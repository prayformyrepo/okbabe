<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCommentResource;
use App\Http\Resources\ProductCommentsCollection;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductCollection;
use App\Product;
use App\Product_category;
use App\Product_comment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function showProducts(Request $request){

    if($request->p_id){

        $product = Product::where('id',$request->p_id)->with(['images','categories','productComments'])->first();

        if(is_null($product)){
            return response()->json(['error'=>'محصول مورد نظر یافت نشد.'],401);
        }elseif($product->status==0){

            return response()->json(['error'=>'محصول مورد نظر غیرفعال است.'],401);

        }else{

       /* $product->load('images');
        $product->load('categories');
        $product->load('productType');*/

        return response()->json(['success'=>
            ['id'=>$product->id,
              'name'=>$product->name,
              'description'=>$product->description,
               'short_description'=>$product->short_description,
                'language'=>$product->language,
                'pages'=>$product->language,
                'size'=>$product->size,
                'author'=>$product->author,
                'translator'=>$product->translator,
                'published_date'=>$product->published_date,
                'publisher'=>$product->publisher,
                'productType'=>$product->productType->name,
                'price'=>$product->price,
                'featured'=>$product->featured,
                'images'=>$product->images()->get(),
                'categories'=>$product->categories()->get(),
                'comments'=>  ProductCommentResource::Collection($product->productComments()->get()),
                'created_at'=>Carbon::make($product->created_at)->format('Y-m-d H:i:s')
            ]
        ]);

        }

    }elseif($request->c_id){

        $c_id = $request->c_id;

        $products = Product::whereHas('categories', function ($query) use  ($c_id) {
            $query->where('id',$c_id);
        })->where('status',1)
            ->get();

        $products = ProductResource::collection($products);

        return response()->json(['success'=>$products]);

    }else{
        $products = Product::where('status',1)->paginate(10);
        ProductResource::wrap('success');
        $products = ProductResource::collection($products);

        return $products;
    }

    }

    public function showCategories()
    {
        $categories = Product_category::select('id','name')->get();

        return response()->json(['success'=>$categories]);

    }

    public function commentStore(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title'=>'nullable',
            'text'=>'required',
            'p_id'=>'required|numeric',
            'user_id'=>'required|numeric'

        ],[
            'text.required'=>'متن دیدگاه را وارد کنید.',
            'p_id.required'=>'شماره محصول را ارسال کنید.',
            'user_id.required'=>'شماره کاربر را ارسال کنید.',
            'p_id.numeric'=>'شماره محصول را عددی وارد کنید.',
            'user_id.numeric'=>'شماره کاربر را عددی وارد کنید.'
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()],401);

        }
        $comment = Product_comment::create([
           'product_id'=>$request->p_id,
           'user_id'=>$request->user_id,
           'title'=>$request->title,
           'text'=>$request->text,
           'status'=>0
        ]);
        return response()->json(['success'],200);
    }


}

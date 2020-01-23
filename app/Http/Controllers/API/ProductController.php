<?php

namespace App\Http\Controllers\API;

use App\Cart;
use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
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
    public $user_id;

    public function user()
    {
        return \Auth::user();
    }
    
    public function showProducts(Request $request){

    if($request->p_id){

        $product = Product::where('id',$request->p_id)->with(['images','categories','productComments'])->first();

        if(is_null($product)){
            return response()->json(['error'=>'محصول مورد نظر یافت نشد.'],401);
        }elseif($product->status==0){

            return response()->json(['error'=>'محصول مورد نظر غیرفعال است.'],401);

        }else{

//            $product['product']=['id'=>$product->id,
//                'name'=>$product->name,
//                'description'=>$product->description,
//                'short_description'=>$product->short_description,
//                'language'=>$product->language,
//                'pages'=>$product->pages,
//                'size'=>$product->size,
//                'author'=>$product->author,
//                'announcer'=>$product->announcer,
//                'translator'=>$product->translator,
//                'published_date'=>$product->published_date,
//                'publisher'=>$product->publisher,
//                'productType'=>$product->productType->name,
//                'price'=>$product->price,
//                'featured'=>$product->featured,
//                'images'=>$product->images()->get(),
//                'categories'=>$product->categories()->get(),
//                'comments'=>  ProductCommentResource::Collection($product->productComments()->orderBy('created_at','DESC')->get()),
//                'created_at'=>Carbon::make($product->created_at)->format('Y-m-d H:i:s')
//            ];
            $product['product']=$product;
            $product['product']['images']=$product->images()->get();
            $product['product']['categories']=$product->categories()->get();
            $product['product']['comments']=ProductCommentResource::Collection($product->productComments()->orderBy('created_at','DESC')->get());

        return response()->json(['success'=>$product]);

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

    public function featuredProducts(Request $request){

            $products = Product::where([['status',1],['featured',1]])->get();
            ProductResource::wrap('success');
            $products = ProductResource::collection($products);

            return $products;
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
        ],[
            'text.required'=>'متن دیدگاه را وارد کنید.',
            'p_id.required'=>'شماره محصول را ارسال کنید.',
            'p_id.numeric'=>'شماره محصول را عددی وارد کنید.',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()],401);
        }

        $comment = Product_comment::create([
           'product_id'=>$request->p_id,
           'user_id'=>$this->user()->id,
           'title'=>$request->title,
           'text'=>$request->text,
           'status'=>0
        ]);
        return response()->json(['success' => 'true'],200);
    }


    public function addCart(Request $request)
    {
        // in future I have to check existability of the product in orders table to prevent duplicate product

        $cart_find = Cart::where(['product_id' => $request->p_id, 'user_id' => $this->user()->id])->first();
        if ($cart_find) {
            return response()->json(['error' => 'این محصول از قبل در سبد خرید شما موجود است.'], 401);
        } else {
            $product = Product::find($request->p_id);
            if($product) {
                $cart = Cart::create([
                    'product_id' => $request->p_id,
                    'user_id' => $this->user()->id,
                    'total_price' => $product->price
                ]);
            }else{
                return response()->json(['error'=>'محصولی با این مشخصات یافت نشد.'], 401);
            }
            $success['count'] = $this->user()->carts->count();
            $success['price']= $this->user()->carts->sum('total_price');


            return response()->json(['success'=>$success]);
        }
    }

    public function removeCart(Request $request)
    {

        $cart = $this->user()->carts->where('id',$request->cart_id)->first();
     /*   dd($cart);
        dd($this->user()->carts()->get());*/

        if($cart != null){
            $cart->delete();
            return response()->json(['success']);
        }
        return response()->json(['error'=>'محصول مورد نظر در سبد خرید موجود نمیباشد!']);

    }

    public function showCart(Request $request)
    {
        $carts = Cart::where('user_id',$this->user()->id)->get();
        if(count($carts) !=0 ){
            return response()->json(['success'=>CartResource::collection($carts)]);
        }else{
            return response()->json(['error'=>'هیج محصولی در سبد خرید شما موجود نمیباشد.']);
        }
    }
}

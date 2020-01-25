<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Http\Resources\ProductCommentResource;
use App\Product;
use App\Product_type;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::where('status',1)->get();
        return view('admin.product.product')->withProducts($products);
    }

    public function create()
    {
        $productTypes = Product_type::all();

        return view('admin.product.add-product',compact('productTypes'));
        
    }

    public function store(Request $request)
    {
        $validatedData = [
            'name' => 'required|unique:products',
            'slug' => 'required|unique:products',
            'product_type_id' => 'required|not_in:0',
            'image' => 'required|mimes:jpeg,jpg,png|max:3000',
        ];
        $messages = [
            'name.required' => 'وارد کردن نام محصول الزامی است',
            'slug.required' => 'وارد کردن اسلاگ محصول الزامی است',
            'slug.unique' => ' اسلاگ محصول تکراری است',
            'name.unique' => ' نام محصول تکراری است',
            'product_type_id.not_in' => ' نوع کتاب را انتخاب کنید',
            'image.required' => 'حداقل یک تصویر برای محصول الزامی است',

        ];

        $this->validate($request, $validatedData, $messages);

        $product=new Product();
        $product->name=$request->name;
        $product->slug=$request->slug;
        $product->description=isset($request->description)?$request->description:null;
        $product->short_description=isset($request->short_description)?$request->short_description:null;
        $product->price=isset($request->price)?$request->price:null;
        $product->pages=isset($request->pages)?$request->pages:null;
        $product->language=isset($request->language)?$request->language:null;
        $product->size=isset($request->size)?$request->size:null;
        $product->announcer=isset($request->announcer)?$request->announcer:null;
        $product->translator=isset($request->translator)?$request->translator:null;
        $product->published_date=isset($request->published_date)?$request->published_date:null;
        $product->publisher=isset($request->publisher)?$request->publisher:null;
        $product->featured=isset($request->featured)?$request->featured:0;
        $product->status=isset($request->status)?$request->status:1;
        $product->product_type_id=$request->product_type_id;
        $product->save();

        $product_id=$product->id;



        $file = $request->file('image');
        $filename = $product->id . '_' . time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('files/products/' . $product->id . '/work_certificate/'), $filename);

        $work_certificate_file = File::create([
            'file_path' => '/files/advisers/' . $user->id . '/work_certificate/' . $filename,
            'orginal_name' => $file->getClientOriginalName(),
            'file_type' => $file->getClientMimeType(),
            'slug' => $user->id . '_' . time()
        ]);
    }
    public function edit(Product $product)
    {
        $productTypes = Product_type::all();

        return view('admin.product.edit-product',compact('product','productTypes'));
    }

    public function update(Product $product,Request $request)
    {
        //dd($request->input('featured') == 1);
        $product = $product->update($request->except('featured'));
        $product->update([
           'featured'=>$request->input('featured') == 1
        ]);
        return back();

    }

    public function delete()
    {

    }

    public function ProductImage(Request $request)
    {

    }

    public function deleteProductImage(Request $request)
    {

    }



}

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
            'product_type_id' => 'required|different:0',
        ];
        $messages = [
            'name.required' => 'وارد کردن نام محصول الزامی است',
            'slug.required' => 'وارد کردن اسلاگ محصول الزامی است',
            'slug.unique' => ' اسلاگ محصول تکراری است',
            'name.unique' => ' نام محصول تکراری است',
        ];




       $images= $request->file('image');
       dd($images);
//       foreach ($images as $image){
//
//       }
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

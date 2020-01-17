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

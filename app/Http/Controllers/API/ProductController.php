<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function showProducts(Request $request){
    if($request->p_id){

        $products = Product::find($request->p_id);

        if(is_null($products)){
            return response()->json(['error'=>'محصول مورد نظر یافت نشد.'],401);
        }elseif($products->status==0){

            return response()->json(['error'=>'محصول مورد نظر غیرفعال است.'],401);

        }else{
        $products->load('images');
        $products->load('categories');
        return response()->json(['success'=>$products]);

        }

    }else {
        $products = Product::where('status', 1)->paginate(10);
        $products->load('images');
        $products->load('categories');
    }
   return response()->json(['success'=>$products]);

    }
}

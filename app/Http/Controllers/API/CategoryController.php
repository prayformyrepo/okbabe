<?php

namespace App\Http\Controllers\API;

use App\Adviser_category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public $successStatus = 200;

    public function add_category_description(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'category_id' => 'required',
            'description' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $category=Adviser_category::find($request->category_id);
        $category->description=$request->description;
        $category->save();

        return response()->json(['success'=>$category], $this-> successStatus);


    }
}

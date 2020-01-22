<?php

namespace App\Http\Controllers\API;

use App\Adviser_category;
use App\Http\Controllers\Controller;
use App\Ticket_category;
use Illuminate\Http\Request;
use Validator;
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

    public function show_categories(Request $request)
    {


        if(isset($request->ticket) && $request->ticket==1){
            $categories_show=Ticket_category::all();

            $cc=$categories_show;
        }else {
            $categories_show = Adviser_category::all();


            $cc = array();
            foreach ($categories_show as $category) {
                if ($category->parent_category_id == null) {
                    $cat['id'] = $category->id;
                    $cat['name'] = $category->name;
                    $subcategories = Adviser_category::where('parent_category_id', $category->id)->select('id', 'name')->get();
                    $cat['sub_category'] = $subcategories;
//                $category = Adviser_category::select('id', 'name')->get();
                    array_push($cc, $cat);
                }
            }
        }

        return response()->json(['success' => $cc], $this-> successStatus);

    }
}

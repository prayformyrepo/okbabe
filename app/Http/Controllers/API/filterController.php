<?php

namespace App\Http\Controllers\API;

use App\Adviser_category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class filterController extends Controller
{
    public $successStatus = 200;
    public function show_filters()
    {
        $cat=array();
        $categories=Adviser_category::all();
        foreach ($categories as $category){
            if ($category->parent_category_id==null){
                $c['id']=$category->id;
                $c['name']=$category->name;
                $c['slug']=$category->slug;
                $c['created_at']=$category->created_at;
                $c['updated_at']=$category->updated_at;
                $subcategories=Adviser_category::select('id','name','slug','parent_category_id')->where('parent_category_id',$category->id)->get();
                $c['sub_categories']=$subcategories;
                array_push($cat,$c);
            }
        }
        return response()->json(['success' => $cat], $this->successStatus);
    }
}

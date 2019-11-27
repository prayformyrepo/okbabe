<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_category;
use App\Http\Controllers\Controller;
use App\Question;
use App\User;
use Illuminate\Http\Request;
use Validator;
class SearchController extends Controller
{
    public $successStatus = 200;

    public function universal_search(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'q' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $all=array();

        //advisers
        $adviser_show=array();
        $advisers=User::where('is_adviser',1)->where('name', 'like', '%'.$request->q.'%')->get();
        foreach ($advisers as $adviser){
            $save['info']=$adviser;
            $save['info']['additional']=$adviser->adviser($adviser);
            array_push($adviser_show,$save);
        }
        $all['advisers']=$adviser_show;

        //categories
        $categories_show=Adviser_category::where('name', 'like', '%'.$request->q.'%')->select('id', 'name','parent_category_id')->get();
        foreach ($categories_show as $category) {
            if ($category->parent_category_id == null) {
                $cat=$category;
                $subcategories=Adviser_category::where('parent_category_id',$category->id)->select('id', 'name')->get();
                $cat['sub_category']=$subcategories;
//                $category = Adviser_category::select('id', 'name')->get();
            }
        }
        $all['categories']=$cat;


        //questions
        $questions_show=array();
        $questions=Question::where('status',1)->where('subject', 'like', '%'.$request->q.'%')->get();
        foreach ($questions as $question){
            $save['info']=$question;
            $save['info']['category']=$question->categories($question);
            array_push($questions_show,$save);
        }
        $all['questions']=$questions_show;



        return response()->json(['success' => $all], $this-> successStatus);


    }
}

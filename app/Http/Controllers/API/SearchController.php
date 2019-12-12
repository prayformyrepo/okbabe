<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_category;
use App\Http\Controllers\Controller;
use App\Post;
use App\Post_category;
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
        $c=0;
        foreach ($advisers as $adviser){
            if ($c<8) {
                $save['user_id'] = $adviser->id;
                $save['name'] = $adviser->name;
                $save['avatar'] = $adviser->avatar;
                $save['field'] = $adviser->adviser($adviser)->field;
                $save['about'] = $adviser->adviser($adviser)->about;
                array_push($adviser_show, $save);
                $c++;
            }
        }
        $all['advisers']=$adviser_show;

        //categories
        $categories_show=Adviser_category::where('name', 'like', '%'.$request->q.'%')->select('id', 'name','parent_category_id')->limit(12)->get();
        $all['categories']=$categories_show;


        //questions
        $questions_show=array();
        $questions=Question::where('status',1)->where('subject', 'like', '%'.$request->q.'%')->get();
        $c=0;
        foreach ($questions as $question){
            if ($c<4) {
                $save = $question;
                $save['category_name']=Adviser_category::find($question->question_category_id)->name;
                if ($question->is_private==1){
                    $save['user_name']='ناشناس';
                    $save['user_avatar']="/themes/custom-5176/userfiles/fdacd9.jpg";
                    $save['user_id']=null;

                }else{
                    $save['user_name']=User::find($question->user_id)->name!=null?User::find($question->user_id)->name:User::find($question->user_id)->username;
                    $save['user_avatar']=User::find($question->user_id)->avatar;

                }
                array_push($questions_show, $save);
            }
        }
        $all['questions']=$questions_show;


        //blog categories
        $blog_categories=Post_category::where('title', 'like', '%'.$request->q.'%')->select('id', 'title','image','parent_category_id')->limit(12)->get();
        $all['blog_categories']=$blog_categories;

        //posts
        $posts=Post::where('title', 'like', '%'.$request->q.'%')->select('id', 'title','image')->limit(4)->get();
        $all['posts']=$posts;


        return response()->json(['success' => $all], $this-> successStatus);


    }
}

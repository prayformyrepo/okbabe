<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestResourceCollection;
use App\Test;
use App\TestQuestion;
use App\UserTestAnswer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public $successStatus = 200;

    public function show_tests(Request $request)
    {
        if (isset($request->test_id)){
            $test=TestQuestion::where('test_id',$request->test_id)->where('question_number',$request->question_number)->first();

            return response()->json(['success' => new TestResourceCollection($test)], $this->successStatus);
        }

        $tests=Test::all();

        $tst=array();
        foreach ($tests as $test){
            $t['id']=$test->id;
            $t['name']=$test->name;
            $t['slug']=$test->slug;
            $t['description']=$test->description;
            $t['questions_count']=$test->questions_count;
            $t['answers_per_question']=$test->answers_per_question;
            $t['status']=$test->status;

            if(UserTestAnswer::where('user_id',Auth::user()->id)->where('test_question_id',$test->id)->count()==0)
                $t['last_answered_question']=null;
                else
            $t['last_answered_question']= UserTestAnswer::where('user_id',Auth::user()->id)->where('test_question_id',$test->id)->orderBy('test_answer_id','ASC')->last();


            $t['created_at']=Carbon::make($test->created_at)->format('Y-m-d H:i:s');

            array_push($tst,$t);
        }


        return response()->json(['success' => $tst], $this->successStatus);

    }

    public function save_test(Request $request)
    {

    }
}

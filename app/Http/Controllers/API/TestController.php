<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestResourceCollection;
use App\Test;
use App\TestAnswer;
use App\TestQuestion;
use App\UserTestAnswer;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

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

            if(UserTestAnswer::where('user_id',Auth::user()->id)->where('test_id',$test->id)->count()==0) {
                $t['last_answered_question_number'] = null;
            }
                else {
                    $test_question_idd = UserTestAnswer::where('user_id', Auth::user()->id)->where('test_id', $test->id)->orderBy('test_question_id', 'ASC')->limit(1)->get();
                    foreach ($test_question_idd as $ttt){
                        $test_question_id=$ttt->test_question_id;
                    }
                    $t['last_answered_question_number'] = TestQuestion::find($test_question_id)->question_number;
                }

            $t['created_at']=Carbon::make($test->created_at)->format('Y-m-d H:i:s');

            array_push($tst,$t);
        }


        return response()->json(['success' => $tst], $this->successStatus);

    }

    public function save_test(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'test_answer_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }


        $test_question_id=TestAnswer::find($request->test_answer_id)->test_question_id;
        $test_id=TestQuestion::find($test_question_id)->test_id;
        $ans= UserTestAnswer::updateOrCreate(
            [
                'user_id' => Auth::user()->id,
                'test_question_id' => $test_question_id,
                'test_id' => $test_id,
            ],
            [
                'test_answer_id' => $request->test_answer_id
            ]);

        $ans['question_number']=TestQuestion::find($ans->test_question_id)->question_number;

        return response()->json(['success' => $ans], $this->successStatus);
    }


    public function result_test(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'test_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $exist=Test::where('id',$request->test_id)->count();
        if ($exist==0) {
            $error['fa_text'] = 'این تست وجود ندارد';
            $error['text'] = 'test is not exist';
            return response()->json(['error' => $error], 404);
        }
        $user=Auth::user();
        $test=Test::find($request->test_id);
        $questions_count=$test->questions_count;
        $user_answers=UserTestAnswer::where('user_id',$user->id)->where('test_id',$request->test_id)->orderBy('test_question_id','DESC');
        if ($user_answers->count()==0){
            $error['fa_text'] = 'به سوالات پاسخ داده نشده است';
            $error['text'] = 'non of questions was answered';
            return response()->json(['error' => $error], 401);
        }
        if ($user_answers->count()<$questions_count){
            $error['fa_text']='تمام سوالات تست پاسخ داده نشده است';
            $error['text']='test is not complete';
            $test_question_id=$user_answers->first()->test_question_id;
            $error['last_answered_question_number']=TestQuestion::find($test_question_id)->question_number;
            return response()->json(['error' => $error], 401);
        }
//        $client = new Client(['base_uri' => 'https://shavernoapp.ir']);
//        $response = $client->request('POST', '/');
//        $body = $response->getBody();

        $text='تست شما ثبت شد و پاسخ آن برایتان ارسال می گردد. به زودی قابلیت تصحیح تست به صورت لحظه ای در اپلیکیشن شاورنو اضافه خواهد شد';
        return response()->json(['success' => $text], 200);


    }
}

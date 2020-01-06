<?php

namespace App\Http\Controllers;

use App\Test;
use App\TestAnswer;
use App\TestQuestion;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Validator;
use Illuminate\Http\Request;


class TestController extends Controller
{

    public function index()
    {
        $tests=Test::all();
        $title='لیست تست ها';
        return view('panel.select-test',compact('title','tests'));
    }
    public function create()
    {
        $title='افزودن تست';
        return view('panel.add-test',compact('title'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'description' => 'required',
            'questions_count' => 'required|integer',
            'answers_per_question' => 'required|integer'
        ]);

        $test=Test::create([
            'name'=>$request->name,
            'slug'=>$request->slug,
            'description'=>$request->description,
            'questions_count'=>$request->questions_count,
            'answers_per_question'=>$request->answers_per_question
        ]);
//        $title='افزودن سوالات تست '. $test->name;
        Session::put('test', $test);

        return Redirect::to(route('show-test-question-page'));

//        return redirect()->route('show-test-question-page',$test);

//        return view('panel.add-test-question',compact('title','test'));

    }

    public function assign_test(Request $request)
    {
        $test_id=$request->test_id;
        $test=Test::findOrFail($test_id);
        Session::put('test', $test);
        return Redirect::to(route('show-test-question-page'));
    }

    public function edit_test($id)
    {
        $test=Test::find($id);

        $title='ویرایش تست';
        return view('panel.edit-test',compact('title','test'));
    }

    public function update(Request $request , $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'description' => 'required',
            'questions_count' => 'required|integer',
            'answers_per_question' => 'required|integer'
        ]);

         Test::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'name'=>$request->name,
                'slug'=>$request->slug,
                'description'=>$request->description,
                'questions_count'=>$request->questions_count,
                'answers_per_question'=>$request->answers_per_question
            ]
        );

        return Redirect::to(route('show-select-test-page'));
    }

    public function destroy($id)
    {
        Test::find($id)->delete();
        $questions=TestQuestion::where('test_id',$id)->get();
        foreach ($questions as $question){
            TestQuestion::find($question->id)->delete();
            $answers=TestAnswer::where('test_question_id',$question->id)->get();
            foreach ($answers as $answer){
                TestAnswer::find($answer->id)->delete();
            }
        }
        return back();
    }

}

<?php

namespace App\Http\Controllers;

use App\defaultTestAnswers;
use App\Test;
use App\TestAnswer;
use App\TestQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class TestQuestionController extends Controller
{
    public function create()
    {
        if (!Session::has('test')) {
            return Redirect::to(route('show-select-test-page'));
        }
        $test = Session::get('test');
        $title = 'افزودن پرسش و پاسخ های تست ' . $test->name;
        $defaults = defaultTestAnswers::all();
        $edit = true;
        return view('panel.add-test-question', compact('title', 'test', 'defaults', 'edit'));
    }

    public function store(Request $request)
    {
//        $validatedData = $request->validate([
//                'name' => 'required',
//            'slug' => 'required',
//            'description' => 'required',
//            'questions_count' => 'required|integer',
//            'answers_per_question' => 'required|integer'
//
//        ]);
        $test = Session::get('test');

        $err = array();
        for ($i = 1; $i <= $test->questions_count; $i++) {
            $q = 'q' . $i;
            if (!isset($request->$q)) array_push($err, 'سوال شماره ' . $i . ' را تکمیل کنید ');
            for ($j = 1; $j <= $test->answers_per_question; $j++) {
                $a = 'q' . $i . 'a' . $j;
                if (!isset($request->$a)) array_push($err, 'پاسخ شماره  ' . $j . ' سوال ' . $i . ' را تکمیل کنید ');
                $w = 'wq' . $i . 'a' . $j;
                if (!isset($request->$w)) array_push($err, 'امتیاز پاسخ شماره  ' . $j . ' سوال ' . $i . ' را تکمیل کنید ');
            }
        }
        $title = 'افزودن پرسش و پاسخ های تست ' . $test->name;
        $defaults = defaultTestAnswers::all();
        if (count($err) != 0) {
            return view('panel.add-test-question', compact('title', 'test', 'defaults', 'err', 'request'));
        }
        for ($i = 1; $i <= $test->questions_count; $i++) {
            $q = 'q' . $i;
            $question_test = TestQuestion::updateOrCreate(
                [
                    'test_id' => $test->id,
                    'question_number' => $i
                ],
                [
                    'question_text' => $request->$q
                ]
            );
            for ($j = 1; $j <= $test->answers_per_question; $j++) {
                $a = 'q' . $i . 'a' . $j;
                $w = 'wq' . $i . 'a' . $j;

                $answer_test = TestAnswer::updateOrCreate(
                    [
                        'test_question_id' => $question_test->id,
                        'answer_number' => $j
                    ],
                    [
                        'answer_text' => $request->$a,
                        'answer_weight' => $request->$w,

                    ]
                );
            }


        }

        return Redirect::to(route('show-select-test-page'));

    }
}

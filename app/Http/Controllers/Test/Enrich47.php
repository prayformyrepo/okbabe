<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use App\Test;
use App\TestAnswer;
use App\TestQuestion;
use App\UserTestAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Enrich47 extends Controller
{
    public function show_result(Request $request)
    {
        $user=Auth::user();
        $test=Test::where('slug','enrich-47')->first();
        $user_answers=UserTestAnswer::where('user_id',$user->id)->where('test_id',$test->id)->get();

        foreach ($user_answers as $user_answer){

        }
    }
}

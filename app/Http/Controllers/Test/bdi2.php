<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class bdi2 extends Controller
{
    public function show_result(Request $request){

    $user = Auth::user();
    $test = Test::where('slug', 'BDI-2')->first();
    $user_answers = UserTestAnswer::where('user_id', $user->id)->where('test_id', $test->id)->get();
    $sum=0;
    foreach ($user_answers as $user_answer) {
        $weight = TestAnswer::find($user_answer->test_answer_id)->answer_weight;
        $sum=sum+$weight;
    }
    if ($sum>=1&&$sum<10) {
        $ans = '
        <p>امتیاز: 
        '.$sum.'
        </p>
        <p>
        میزان افسردگی طبیعی
        </p>';
    } else if ($sum>=11&&$sum<16) {
        $ans = '
        <p>امتیاز: 
        '.$sum.'
        </p>
        <p>
        کمی افسرده
        </p>';
    } else if ($sum>=17&&$sum<20) {
        $ans = '
        <p>امتیاز: 
        '.$sum.'
        </p>
        <p>
        نیازمند مشورت با روانپزشک
        </p>';
    } else if ($sum>=21&&$sum<30) {
        $ans = '
        <p>امتیاز: 
        '.$sum.'
        </p>
        <p>
        به نسبت افسرده
        </p>';
    }else if ($sum>=31&&$sum<40) {
        $ans = '
        <p>امتیاز: 
        '.$sum.'
        </p>
        <p>
        افسردگی شدید
        </p>';
    } else if ($sum>=41) {
        $ans = '
        <p>امتیاز: 
        '.$sum.'
        </p>
        <p>
        افسردگی بیش از حد
        </p>';
    }


    }

    
}

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
        $user = Auth::user();
        $test = Test::where('slug', 'enrich-47')->first();
        $user_answers = UserTestAnswer::where('user_id', $user->id)->where('test_id', $test->id)->get();
        $sum = 0;
        $shakhsiati=0;
        $zanashooii=0;
        $hale_taaroz=0;
        $modiriat_mali=0;
        $faaliat_oghat_feraghat=0;
        $jensi=0;
        $farzandan=0;
        $aghvam=0;
        $mazhabi=0;

        foreach ($user_answers as $user_answer) {
            $question_number=TestQuestion::find($user_answer->test_question_id)->question_number;
            $weight = TestAnswer::find($user_answer->test_answer_id)->answer_weight;

            if ($question_number==2||$question_number==3||$question_number==4||$question_number==12||$question_number==22||$question_number==40){
                $shakhsiati=$shakhsiati+$weight;

            }
            if ($question_number==1||$question_number==6||$question_number==13||$question_number==23||$question_number==32||$question_number==41){
                $zanashooii=$zanashooii+$weight;
            }
            if ($question_number==7||$question_number==14||$question_number==24||$question_number==33||$question_number==42){
                $hale_taaroz=$hale_taaroz+$weight;
            }
            if ($question_number==8||$question_number==15||$question_number==16||$question_number==25||$question_number==34){
                $modiriat_mali=$modiriat_mali+$weight;
            }
            if ($question_number==9||$question_number==17||$question_number==26||$question_number==35||$question_number==43){
                $faaliat_oghat_feraghat=$faaliat_oghat_feraghat+$weight;
            }
            if ($question_number==10||$question_number==18||$question_number==27||$question_number==36||$question_number==44){
                $jensi=$jensi+$weight;
            }
            if ($question_number==11||$question_number==19||$question_number==28||$question_number==37||$question_number==45){
                $farzandan=$farzandan+$weight;
            }
            if ($question_number==20||$question_number==29||$question_number==31||$question_number==38||$question_number==46){
                $aghvam=$aghvam+$weight;
            }
            if ($question_number==5||$question_number==21||$question_number==30||$question_number==39||$question_number==47){
                $mazhabi=$mazhabi+$weight;
            }
            $sum = $sum + $weight;
        }
        $middle = 0;
        $t = 0;
        if ($sum >= 73 && $sum <= 77) {
            $middle = 75;
            $t = 12;
        } else if ($sum >= 78 && $sum <= 82) {
            $middle = 80;
            $t = 14;
        } else if ($sum >= 83 && $sum <= 87) {
            $middle = 85;
            $t = 16;
        } else if ($sum >= 88 && $sum <= 92) {
            $middle = 90;
            $t = 18;
        } else if ($sum >= 93 && $sum <= 97) {
            $middle = 95;
            $t = 19;
        } else if ($sum >= 98 && $sum <= 102) {
            $middle = 100;
            $t = 21;
        } else if ($sum >= 103 && $sum <= 107) {
            $middle = 105;
            $t = 23;
        } else if ($sum >= 108 && $sum <= 112) {
            $middle = 110;
            $t = 25;
        } else if ($sum >= 113 && $sum <= 117) {
            $middle = 115;
            $t = 27;
        } else if ($sum >= 118 && $sum <= 122) {
            $middle = 120;
            $t = 29;
        } else if ($sum >= 123 && $sum <= 127) {
            $middle = 125;
            $t = 31;
        } else if ($sum >= 128 && $sum <= 132) {
            $middle = 130;
            $t = 33;
        } else if ($sum >= 133 && $sum <= 137) {
            $middle = 135;
            $t = 35;
        } else if ($sum >= 138 && $sum <= 142) {
            $middle = 140;
            $t = 36;
        } else if ($sum >= 143 && $sum <= 147) {
            $middle = 145;
            $t = 38;
        } else if ($sum >= 148 && $sum <= 152) {
            $middle = 150;
            $t = 40;
        } else if ($sum >= 153 && $sum <= 157) {
            $middle = 155;
            $t = 42;
        } else if ($sum >= 158 && $sum <= 162) {
            $middle = 160;
            $t = 44;
        } else if ($sum >= 163 && $sum <= 167) {
            $middle = 165;
            $t = 46;
        } else if ($sum >= 168 && $sum <= 172) {
            $middle = 170;
            $t = 48;
        } else if ($sum >= 173 && $sum <= 177) {
            $middle = 175;
            $t = 50;
        } else if ($sum >= 178 && $sum <= 182) {
            $middle = 180;
            $t = 52;
        } else if ($sum >= 183 && $sum <= 187) {
            $middle = 185;
            $t = 53;
        } else if ($sum >= 188 && $sum <= 192) {
            $middle = 190;
            $t = 55;
        } else if ($sum >= 193 && $sum <= 197) {
            $middle = 195;
            $t = 57;
        } else if ($sum >= 198 && $sum <= 202) {
            $middle = 200;
            $t = 59;
        } else if ($sum >= 203 && $sum <= 207) {
            $middle = 205;
            $t = 61;
        } else if ($sum >= 208 && $sum <= 212) {
            $middle = 210;
            $t = 63;
        } else if ($sum >= 213 && $sum <= 217) {
            $middle = 215;
            $t = 65;
        } else if ($sum >= 218 && $sum <= 222) {
            $middle = 220;
            $t = 67;
        } else if ($sum >= 223 && $sum <= 227) {
            $middle = 225;
            $t = 69;
        } else if ($sum >= 228 && $sum <= 232) {
            $middle = 230;
            $t = 71;
        } else if ($sum >= 233 && $sum <= 237) {
            $middle = 235;
            $t = 72;
        }

        //omoomi
        if ($t < 30) {
            $ans = '<h1>پاسخ عمومی</h1>
<p>
شما نارضایتی شدید از روابط زناشویی دارید
</p>';

        }
        else if ($t>=30 && $t<40){
            $ans = '<h1>پاسخ عمومی</h1>
<p>
شما از روابط زناشویی خود ناراضی هستید
</p>';
        }

        else if ($t>=40 && $t<60){
            $ans = '<h1>پاسخ عمومی</h1>
<p>
شما رضایت نسبی و متوسطی از روابط زناشویی خود دارید
</p>';
        }


        else if ($t>=60 && $t<70){
            $ans = '<h1>پاسخ عمومی</h1>
<p>
شما رضایت زیادی از روابط زناشویی خود دارید
</p>';
        }


        else if ($t>=70 ){
            $ans = '<h1>پاسخ عمومی</h1>
<p>
شما رضایتی فوق العاده از روابط زناشویی خود دارید
</p>';
        }

        //takhasosi
        $shakhsiati=ceil($shakhsiati/6);
        $zanashooii=ceil($zanashooii/6);
        $hale_taaroz=ceil($hale_taaroz/5);
        $modiriat_mali=ceil($modiriat_mali/5);
        $faaliat_oghat_feraghat=ceil($faaliat_oghat_feraghat/5);
        $jensi=ceil($jensi/5);
        $farzandan=ceil($farzandan/5);
        $aghvam=ceil($aghvam/5);
        $mazhabi=ceil($mazhabi/5);
        $ans.='<h1>پاسخ تخصصی</h1>';
        switch ($shakhsiati){
            case 1:
                $ans.='<p>نارضایتی شدید از موضوعات شخصیتی</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از موضوعات شخصیتی</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از موضوعات شخصیتی</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از موضوعات شخصیتی</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از موضوعات شخصیتی</p>';
                break;
        }
        switch ($zanashooii){
            case 1:
                $ans.='<p>نارضایتی شدید از ارتباط زناشویی</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از ارتباط زناشویی</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از ارتباط زناشویی</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از ارتباط زناشویی</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از ارتباط زناشویی</p>';
                break;
        }
        switch ($hale_taaroz){
            case 1:
                $ans.='<p>نارضایتی شدید از حل تعارض</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از حل تعارض</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از حل تعارض</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از حل تعارض</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از حل تعارض</p>';
                break;
        }
        switch ($modiriat_mali){
            case 1:
                $ans.='<p>نارضایتی شدید از مدیریت مالی</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از مدیریت مالی</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از مدیریت مالی</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از مدیریت مالی</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از مدیریت مالی</p>';
                break;
        }
        switch ($faaliat_oghat_feraghat){
            case 1:
                $ans.='<p>نارضایتی شدید از فعالیت های اوقات فراغت</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از فعالیت های اوقات فراغت</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از فعالیت های اوقات فراغت</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از فعالیت های اوقات فراغت</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از فعالیت های اوقات فراغت</p>';
                break;
        }
        switch ($jensi){
            case 1:
                $ans.='<p>نارضایتی شدید از روابط جنسی</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از روابط جنسی</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از روابط جنسی</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از روابط جنسی</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از روابط جنسی</p>';
                break;
        }
        switch ($farzandan){
            case 1:
                $ans.='<p>نارضایتی شدید از ازدواج و فرزندان</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از ازدواج و فرزندان</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از ازدواج و فرزندان</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از ازدواج و فرزندان</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از ازدواج و فرزندان</p>';
                break;
        }
        switch ($aghvam){
            case 1:
                $ans.='<p>نارضایتی شدید از اقوام و دوستان</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از اقوام و دوستان</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از اقوام و دوستان</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از اقوام و دوستان</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از اقوام و دوستان</p>';
                break;
        }
        switch ($mazhabi){
            case 1:
                $ans.='<p>نارضایتی شدید از جهت گیری مذهبی</p>';
                break;
            case 2:
                $ans.='<p>عدم رضایت از جهت گیری مذهبی</p>';
                break;
            case 3:
                $ans.='<p>رضایت متوسط از جهت گیری مذهبی</p>';
                break;
            case 4:
                $ans.='<p>رضایت زیاد از جهت گیری مذهبی</p>';
                break;
            case 5:
                $ans.='<p>رضایت فوق العاده از جهت گیری مذهبی</p>';
                break;
        }





//        return response()->json(['success' => $ans], 200);

    }
}

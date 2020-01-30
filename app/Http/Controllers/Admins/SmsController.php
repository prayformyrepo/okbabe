<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Sms;
use Illuminate\Http\Request;

class SmsController extends Controller
{
    public function index()
    {
        $sms=Sms::find(1)->active;
        return view('admin.sms.index',compact('sms'));
    }

    public function change(Request $request)
    {
        $sms=Sms::find(1);
        $sms->active=$request->sms;
        $sms->save();
    }
}


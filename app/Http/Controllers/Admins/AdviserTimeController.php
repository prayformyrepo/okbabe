<?php

namespace App\Http\Controllers\Admins;

use App\Adviser_time;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdviserTimeController extends Controller
{
    public function show($id)
    {
        $adviser_times=Adviser_time::where('adviser_id',$id)->orderBy('date','DESC')->orderBy('time_from','DESC')->get();
    }
}

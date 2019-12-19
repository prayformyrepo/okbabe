<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\reserve_call;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;


class ReserveController extends Controller
{
    public $successStatus = 200;
    public function reserve_call(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'integer|required',
            'date_time' => 'required|date_format:Y-m-d H:i:s',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $exist=reserve_call::where('user_id',Auth::user()->id)->where('adviser_id',$request->adviser_id)->where('status',0)->count();
        if ($exist==0) $exist=reserve_call::where('user_id',Auth::user()->id)->where('adviser_id',$request->adviser_id)->where('status',1)->count();
        if ($exist!=0){
            return response()->json(['error' => 'رزرو قبلی با این مشاور هنوز به اتمام نرسیده است'], 401);
        }
        $is_user=User::where('id',$request->adviser_id)->count();
        if ($is_user==0) return response()->json(['error' => 'کاربر یافت نشد'], 401);
        else{
            $is_adviser=User::where('id',$request->adviser_id)->value('is_adviser');
        }
        if ($is_adviser==0) return response()->json(['error' => 'امکان رزرو تماس با این کاربر مقدور نمی باشد'], 401);
        $reserve=new reserve_call();
        $reserve->user_id=Auth::user()->id;
        $reserve->adviser_id=$request->adviser_id;
        $reserve->date_time=$request->date_time;
        $reserve->status=0;
        $reserve->save();

        $reserve=reserve_call::find($reserve->id);
        $reserve['user_name']=User::find(Auth::user()->id)->name==null?User::find(Auth::user()->id)->username:User::find(Auth::user()->id)->name;
        $reserve['user_avatar']=User::find(Auth::user()->id)->avatar;
        $reserve['adviser_name']=User::find($request->adviser_id)->name;
        $reserve['adviser_avatar']=User::find($request->adviser_id)->avatar;

        return response()->json(['success' => $reserve], $this->successStatus);

    }
}

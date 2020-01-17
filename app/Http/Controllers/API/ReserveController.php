<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Http\Controllers\Controller;
use App\reserve_call;
use App\User;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;


class ReserveController extends Controller
{
    public $successStatus = 200;

    public function reserve(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'integer|required',
            'date_time' => 'required|date_format:Y-m-d H:i:s',
            'type' => 'required' //0:call / 1:visit
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $adviser_id=Adviser::find($request->adviser_id)->user_id;

        if ($request->type == 1) {
            $visitable = Adviser::where('user_id', $adviser_id)->value('visit_price');
            if ($visitable == null) return response()->json(['error' => 'امکان رزرو حضوری با این مشاور فراهم نیست'], 401);
        }

        $exist = reserve_call::where('user_id', Auth::user()->id)->where('adviser_id', $adviser_id)->where('type', $request->type)->where('status', 0)->count();
        if ($exist == 0) $exist = reserve_call::where('user_id', Auth::user()->id)->where('adviser_id', $adviser_id)->where('type', $request->type)->where('status', 1)->count();
        if ($exist != 0) {
            return response()->json(['error' => 'رزرو قبلی با این مشاور هنوز به اتمام نرسیده است'], 401);
        }
        $is_user = User::where('id', $adviser_id)->count();
        if ($is_user == 0) return response()->json(['error' => 'کاربر یافت نشد'], 401);
        else {
            $is_adviser = User::where('id', $adviser_id)->value('is_adviser');
        }
        if ($is_adviser == 0) return response()->json(['error' => 'امکان رزرو تماس با این کاربر مقدور نمی باشد'], 401);

        if ($request->type == 0) {
            $reserve_price = Adviser::where('user_id', $adviser_id)->value('nominal_call_price');
        } else {
            $reserve_price = Adviser::where('user_id', $adviser_id)->value('visit_price');
        }
        $wallet = User::find(Auth::user()->id)->wallet;

        if ($wallet / $reserve_price < 1) return response()->json(['error' => 'موجودی کافی نیست'], 401);
        $reserve = new reserve_call();
        $reserve->user_id = Auth::user()->id;
        $reserve->adviser_id = $adviser_id;
        $reserve->date_time = $request->date_time;
        $reserve->status = 0;
        $reserve->type = $request->type;
        $reserve->save();

        $reserve = reserve_call::find($reserve->id);
        $reserve['user_name'] = User::find(Auth::user()->id)->name == null ? User::find(Auth::user()->id)->username : User::find(Auth::user()->id)->name;
        $reserve['user_avatar'] = User::find(Auth::user()->id)->avatar;
        $reserve['adviser_name'] = User::find($adviser_id)->name;
        $reserve['adviser_avatar'] = User::find($adviser_id)->avatar;

        return response()->json(['success' => $reserve], $this->successStatus);

    }

    public function change_reserve_status(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reserve_call_id' => 'integer|required',
            'status' => 'required|integer', //0: requested - 1:accepted - 2:ended - 3:rejected - 4:canceled
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $is_exist = reserve_call::where('id', $request->reserve_call_id)->count();
        if ($is_exist == 0) return response()->json(['error' => 'شماره رزرو نادرست است'], 401);
        if ($request->status > 4 || $request->status < 0) return response()->json(['error' => 'استاتوس باید بین ۰ تا ۴ باشد'], 401);
        $reserve = reserve_call::find($request->reserve_call_id);
        $reserve->status = $request->status;
        $reserve->save();
        $reserve = reserve_call::find($reserve->id);


        return response()->json(['success' => $reserve], $this->successStatus);

    }


    public function reserve_history()
    {
        $reserves = reserve_call::all();
        $r = array();
        foreach ($reserves as $reserve) {
            $rr = $reserve;

            $v = new Verta($reserve->date_time);
            $rr['shamsi_date'] = $v->format('Y-m-d H:i:s');

            if (Auth::user()->is_adviser == 0) {
                $rr['user_name'] = User::find($reserve->adviser_id)->name;
                $rr['user_avatar'] = User::find($reserve->adviser_id)->avatar;
            } else {
                $rr['user_name'] = User::find($reserve->user_id)->name == null ? User::find($reserve->user_id)->username : User::find($reserve->user_id)->name;
                $rr['user_avatar'] = User::find($reserve->user_id)->avatar;
            }
            array_push($r, $rr);
        }

        return response()->json(['success' => $r], $this->successStatus);

    }


}

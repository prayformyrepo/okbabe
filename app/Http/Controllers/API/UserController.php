<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_time;
use App\Conversation;
use App\oauth_access_token;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Jenssegers\Agent\Agent;
use Kavenegar\Exceptions\ApiException;
use Kavenegar\Exceptions\HttpException;
use Kavenegar\KavenegarApi;
use Validator;
use Kavenegar;
use Hash;

class UserController extends Controller
{

    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function user()
    {
        return \Auth::user();
    }
  
    public function login(){
        if(Auth::attempt(['mobile' => request('mobile'), 'password' => request('password')])){
            $user = Auth::user();
            oauth_access_token::where('user_id', $user->id)->delete();
            $success['token'] = $user->createToken('login')->accessToken;
            $user_token = User::find($user->id);
            $user_token->api_token = $success['token'];
            $user_token->save();
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function auth(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'mobile' => 'required|iran_mobile|regex:/^((?!(0))[0-9]{10})$/',
//            'email' => 'required|email',
//            'password' => 'required',
//            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
//        $input['password'] = bcrypt($input['password']);

        $digits = 4;
        $code = rand(pow(10, $digits - 1), pow(10, $digits) - 1);
        $agent = new Agent();
        $user_count = User::where('mobile', $request->mobile)->count();
        if ($user_count == 0) {

            $user = new User();
            $user->mobile = $request->mobile;
            $user->code = $code;
            $user->os = $agent->platform();
            $user->os_version = $agent->version($agent->platform());

            $user->save();

            $user_id = User::where('mobile', $request->mobile)->value('id');
            $user = User::find($user_id);
        } else {
            $user_id = User::where('mobile', $request->mobile)->value('id');
            $user = User::find($user_id);
            if ($user->password != null) {
                $user->os = $agent->platform();
                $user->os_version = $agent->version($agent->platform());
                $user->api_token = null;
                $user->save();


                oauth_access_token::where('user_id', $user->id)->delete();
                $success['user'] = $user;
                $success['password'] = true;
                return response()->json(['success' => $success], $this->successStatus);

            } else {
                $user->code = $code;
                $user->os = $agent->platform();
                $user->os_version = $agent->version($agent->platform());
                $user->save();
            }
        }


        if ($user_count == 0 || $user_count != 0 && $user->password == null) {

            //sms
            try {
                $receptor = $request->mobile;
                $template = "shaverno";
                $type = "sms";
                $token = $code;
                $token2 = "";
                $token3 = "";
                $result = Kavenegar::VerifyLookup($receptor, $token, $token2, $token3, $template, $type);
            } catch (ApiException $e) {
                echo $e->errorMessage();
            } catch (HttpException $e) {
                echo $e->errorMessage();
            }


        }


        oauth_access_token::where('user_id', $user->id)->delete();
        $token = $user->createToken('Register')->accessToken;
        $user->api_token = $token;
        $user->save();

        $user = User::select('id', 'api_token', 'code')->find($user->id);
        $success['user'] = $user;


        return response()->json(['success' => $success], $this->successStatus);
    }

    /**
     * validate api
     *
     * @return \Illuminate\Http\Response
     */
    public function validation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        $user = User::find($user->id);

        if ($user->code != $request->code) {
            $error['reason'] = 'code is wrong';
            return response()->json(['error' => $error], 401);
        }
        $user->mobile_verified_at = Carbon::now();
        $user->save();

        oauth_access_token::where('user_id', $user->id)->delete();
        $success['token'] = $user->createToken('validation')->accessToken;
        $user->api_token = $success['token'];
        $user->save();

        return response()->json(['success' => $success], $this->successStatus);
    }

    /**
     * set password api
     *
     * @return \Illuminate\Http\Response
     */
    public function set_data(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $user = Auth::user();

        if (!empty($user->password)) {
            $error['reason'] = 'data already set';
            return response()->json(['error' => $error], 401);
        }
        $user_set = User::find($user->id);
        isset($request->name) ? $user_set->name = $request->name : $user_set->name = null;
        $user_set->username = $request->username;
        $user_set->name = $request->username;
        $user_set->password = bcrypt($request->password);
        $user_set->password_set_at = Carbon::now();
        $user_set->save();

        $success['message'] = 'data set';
        return response()->json(['success' => $success], $this->successStatus);
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function user_info(Request $request)
    {
//        $validator = Validator::make($request->all(), [
//            'user_id' => 'required',
//
//        ]);
//
//        if ($validator->fails()) {
//            return response()->json(['error'=>$validator->errors()], 401);
//        }
        $success = array();
        if(isset($request->user_id)){
            $user = User::select('id','name','username','email','mobile','gender','call_page','call_file','call_adviser_name','call_adviser_avatar','wallet','is_adviser','avatar')->find($request->user_id)->toArray();
            $cart['cart_count']=$this->user()->carts->count();
            $cart['cart_price']=$this->user()->carts->sum('total_price');
            $combined = array_merge($user,$cart);
        }
        else{
            $user=Auth::user();
            $user = User::select('id','name','username','email','mobile','gender','call_page','call_file','call_adviser_name','call_adviser_avatar','wallet','is_adviser','avatar')->find($user->id)->toArray();
            $cart['cart_count']=$this->user()->carts->count();
            $cart['cart_price']=$this->user()->carts->sum('total_price');
            $combined = array_merge($user,$cart);
        }



        return response()->json(['success' => $combined], $this-> successStatus);

    }

    public function reset_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user_id = $request->user_id;
        $user = User::find($user_id);
        $user->password = null;
        $user->save();
        $success['message'] = 'password deleted, goto auth route';

        return response()->json(['success' => $success], $this->successStatus);

    }

    public function toggle_online(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'is_online' => 'required|boolean',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        //set online offline for non adviser users
        $user = Auth::user();
        $user = User::find($user->id);
        if ($user->is_adviser == 0) {
            $user->is_online = $request->is_online;
            $user->save();
        }

//    now date time
        $weekMap = [
            0 => 1,
            1 => 2,
            2 => 3,
            3 => 4,
            4 => 5,
            5 => 6,
            6 => 0,
        ];
        $dayOfTheWeek = Carbon::now()->dayOfWeek;
        $weekday = $weekMap[$dayOfTheWeek];
        $hour = Carbon::now()->format('G');
        $today = strtotime(\Carbon\Carbon::now()->format('H:i'));

        //get all advisers
        $users = User::where('is_adviser', 1)->get();
        foreach ($users as $userr) {
            $flag = false;
            $adviser_id = Adviser::where('user_id', $userr->id)->value('id');

            $adviser_times = Adviser_time::where('adviser_id', $adviser_id)->get();
            foreach ($adviser_times as $adviser_time) {
                //check date time
                if ($adviser_time->date == $weekday) {
                    $time_from = strtotime($adviser_time->time_from);
                    $time_to = strtotime($adviser_time->time_to);
                    //echo $userr->id .'date is ok<br>time from:'.$adviser_time->time_from.'<br>time to: '. $adviser_time->time_to .'<br><br>' ;
                    if ($time_from < $today && $time_to > $today) {
                        $flag = true;
                    }
                }
            }

            //set advisers offline-online
            $force_toggle_online = Adviser::where('user_id', $userr->id)->value('force_toggle_online');
            if ($flag == true) {
                if ($force_toggle_online == 0) {
                    // echo 'user_id:'.$userr->id.'<br> flag: true <br>';
                    $u = User::find($userr->id);
                    $u->is_online = 1;
                    $u->save();

                    $a = Adviser::find($adviser_id);
                    $a->is_online = 1;
                    $a->force_toggle_online = 0;
                    $a->save();
                } else if ($force_toggle_online == 1) {
                    $a = Adviser::find($adviser_id);
                    $a->is_online = 1 ? $a->force_toggle_online = 0 : $a->force_toggle_online = 1;
                    $a->save();
                }

            }
            if ($flag == false) {
                if ($force_toggle_online == 0) {

                    $u = User::find($userr->id);
                    $u->is_online = 0;
                    $u->save();

                    $a = Adviser::find($adviser_id);
                    $a->is_online = 0;
                    $a->force_toggle_online = 0;
                    $a->save();
                } else if ($force_toggle_online == 1) {
                    $a = Adviser::find($adviser_id);
                    $a->is_online = 0 ? $a->force_toggle_online = 0 : $a->force_toggle_online = 1;
                    $a->save();
                }
            }
        }

        $success['is_online'] = $user->is_online;
        $success['is_adviser'] = $user->is_adviser;
        $success['id'] = $user->id;
        $success['now'] = $hour;

        return response()->json(['success' => $success], $this->successStatus);
    }

    public function update_info(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $duplicated = User::where('username', $request->username)->count();
        $user_username = User::find(Auth::user()->id)->username;
        if ($duplicated != 0 && $user_username != $request->username) return response()->json(['error' => 'نام کاربری انتخاب شده تکراری است'], 401);

        $user_id = Auth::user()->id;
        $user = User::find($user_id);
        $user->name = isset($request->name) ? $request->name : $user->name;
        $user->username = isset($request->username) ? $request->username : $user->username;
        $user->gender = isset($request->gender) ? $request->gender : $user->gender;
        $user->email = isset($request->email) ? $request->email : $user->email;
        $user->save();

        $user = User::find($user_id);

        return response()->json(['success' => $user], $this->successStatus);

    }

    public function change_pass(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_pass' => 'required',
            'new_pass' => 'required',
            'new_pass_confirm' => 'required|same:new_pass',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();


        if (password_verify($request->old_pass, $user->password)) {
            $user_p = User::find(Auth::user()->id);
            $user_p->password = Hash::make($request->new_pass);
            $user_p->save();
        } else {
            return response()->json(['error' => 'کلمه عبور صحیح نیست'], 401);
        }
        $user = User::find(Auth::user()->id);

        return response()->json(['success' => $user], $this->successStatus);

    }

}
<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showAuthForm()
    {
        return view('users.auth');
    }

    public function login(Request $request)
    {
        $mobile=$request->mobile;

        if (substr($request->mobile,0,1)==0) $mobile=substr($request->mobile,1);

        $checkUser = User::where('mobile', $mobile)->get();
        if (!$checkUser->isEmpty()) {
            $userId = User::where('mobile', $mobile)->value('id');
            $user = User::find($userId);
            if (Hash::check($request->password, $user->password)) {
                // Success
                Auth::loginUsingId($userId);
                if (Auth::user() && isset($request->remember)) {
                    Cookie::queue('mobile', $mobile, 60 * 60 * 60);
                }
                return redirect('panel/add-test');
            }else{
                $error='شماره تلفن یا کلمه عبور صحیح نیست';
                return view('users.auth',compact('error'));
            }
        } else {
            $error='شماره تلفن یا کلمه عبور صحیح نیست';
            return view('users.auth',compact('error'));
        }

    }

}

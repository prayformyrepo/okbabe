<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function showAuthForm()
    {
        return view('users.auth');
    }

    public function login(Request $request)
    {
        $checkUser = User::where('phone', $request->phone)->get();
        if (!$checkUser->isEmpty()) {
            $userId = User::where('phone', $request->phone)->value('id');
            $user = User::find($userId);
            if (Hash::check($request->password, $user->password)) {
                // Success
                Auth::loginUsingId($userId);
                if (Auth::user() && isset($request->remember)) {
                    Cookie::queue('phone', $request->phone, 60 * 60 * 60);
                }
                return redirect('webtab-admin');
            }else{
                $error='شماره تلفن یا کلمه عبور صحیح نیست';
                return view('users.login',compact('error'));
            }
        } else {
            $error='شماره تلفن یا کلمه عبور صحیح نیست';
            return view('users.login',compact('error'));
        }

    }

}

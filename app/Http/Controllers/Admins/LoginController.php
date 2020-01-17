<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

	protected $redirectTo = 'admin/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }*/
	protected function guard()
	{
		return \Auth::guard('admin');
	}

	public function showLoginForm()
	{
		return view('admin.auth.auth');
	}



	public function logout(Request $request)
	{
		$this->guard()->logout();

		$request->session()->invalidate();

		return redirect('admin/login');
	}

	protected function redirectTo()
	{
		return '/admin/';
	}

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required|string',
            'password' => 'required|string',
/*            'captcha' => 'required|captcha',*/
        ],
            [
                'email.required'=>'ایمیل اجباری است.',
                'password.required'=>'رمزعبور اجباری است.',
 /*               'captcha.required'=>'کد امنیتی را وارد کنید.',
                'captcha.captcha'=>'کد امنیتی را صحیح وارد کنید.',*/
            ]
            );
    }

}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Transaction;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SaeedVaziry\Payir\Exceptions\SendException;
use SaeedVaziry\Payir\PayirPG;
use Validator;

class WalletController extends Controller
{
    public $successStatus = 200;

    public function do_pay(Request $request)
    {
        $user=Auth::user();
        $validator = Validator::make($request->all(), [
            'value' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $amount = $request->value; // Required, Amount
//        $payir->factorNumber = 'Factor-Number'; // Optional
        $api='f1749f4ad693f87cd8c0d95a2b2d6184';
        $redirect='shavernoapp.ir/pay/callback';
        $description = 'شارژ کیف پول به مبلغ '.
            $request->value.
            ' تومان '; // Optional
        $mobile = '0'.$user->mobile; // Optional, If you want to show user's saved card numbers in gateway
        $client = new Client([
            // Base URI is used with relative requests
            'base_uri' => 'https://pay.ir',
            // You can set any number of default request options.
            'timeout'  => 2.0,
        ]);
        $response = $client->request('POST', '/pg/send', [
            'form_params' => [
                'api' => $api,
                'amount' => $amount,
                'description' => $description,
                'mobile' => $mobile,
                'redirect' => $redirect,

            ]
        ]);

        $body = $response->getBody();
        $items = json_decode($body);
        $token=$items->token;
        $success['url']='https://pay.ir/pg/'.$token;

// Implicitly cast the body to a string and echo it
        return response()->json(['success' => $success], $this-> successStatus);



    }


    public function verify(Request $request)
    {
       if ($request->status==1){
           return view('callback',compact($request->token));
       }
       else{
           return('<h3 style="text-align: center">دسترسی غیر مجاز</h3>');
       }
    }


}

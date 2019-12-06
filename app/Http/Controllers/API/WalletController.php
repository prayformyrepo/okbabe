<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Transaction;
use App\User;
use App\Wallet;
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

        $wallet=new Wallet();
        $wallet->user_id=Auth::user()->id;
        $wallet->finance=$amount;
        $wallet->payment_method_id=$token;
        $wallet->save();
        $success['url']='https://pay.ir/pg/'.$token;

// Implicitly cast the body to a string and echo it
        return response()->json(['success' => $success], $this-> successStatus);



    }


    public function verify(Request $request)
    {
           $token=$request->token;
           $status=$request->status;
           $user_id=Wallet::where('payment_method_id',$token)->value('user_id');
           $user=User::find($user_id);
           $amount=Wallet::where('payment_method_id',$token)->value('finance');

           if ($status==1){

           }
           return view('callback',compact('user','amount','status'));

    }



}

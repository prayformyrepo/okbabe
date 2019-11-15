<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SaeedVaziry\Payir\Exceptions\SendException;
use SaeedVaziry\Payir\PayirPG;
use Validator;

class WalletController extends Controller
{
    public function pay(Request $request)
    {
        $user=Auth::user();
        $validator = Validator::make($request->all(), [
            'value' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $payir = new PayirPG();
        $payir->amount = $request->value; // Required, Amount
//        $payir->factorNumber = 'Factor-Number'; // Optional
        $payir->description = 'شارژ کیف پول به مبلغ '.
            $request->value.
            ' تومان '; // Optional
        $payir->mobile = '0'.$user->mobile; // Optional, If you want to show user's saved card numbers in gateway

        try {
            $payir->send();
            $transaction=new Transaction();
            $transaction->user_id=$user->id;
            $transaction->amount=$request->value;
            $transaction->save();
            return redirect($payir->paymentUrl);
        } catch (SendException $e) {
            throw $e;
        }


    }

    public function verify(Request $request)
    {
        $payir = new PayirPG();
        $payir->token = $request->token; // Pay.ir returns this token to your redirect url

        try {
            $verify = $payir->verify(); // returns verify result from pay.ir like (transId, cardNumber, ...)

            dd($verify);
        } catch (VerifyException $e) {
            throw $e;
        }
    }


}

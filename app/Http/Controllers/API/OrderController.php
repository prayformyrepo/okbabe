<?php

namespace App\Http\Controllers\API;

use App\Cart;
use App\Http\Controllers\Controller;
use App\Order;
use App\OrderLink;
use App\OrderPayment;
use App\Product;
use App\ProductOrder;
use App\Transaction;
use App\Wallet;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use ZipArchive;

class OrderController extends Controller
{
    public $api = 'f1749f4ad693f87cd8c0d95a2b2d6184';

    public function user()
    {
        return Auth::user();
    }

    public function storeOrder(Request $request)
    {
        if ($this->user()->carts()->exists()) {
            $carts_price = $this->user()->carts->sum('total_price');
            $amount = $carts_price; // Required, Amount
            $carts = $this->user()->carts()->get();
            $order = Order::create([
                'user_id' => $this->user()->id,
                'total_price' => $amount,
                'state' => 1, //سفارش فقط ثبت شده
            ]);
            foreach ($carts as $cart){

                    /*$productOrder = OrderPayment::create([
                        'order_id' => $order->id,
                        'product_id'=>$product->id,
                        'product_info'=>json_encode($product),
                        'price'=>$product->price,
                    ]);*/
                    $productOrder = ProductOrder::Create([
                        'order_id' => $order->id,
                        'product_id' => $cart->product->id,
                        'product_info' => json_encode($cart->product),
                        'price' => $cart->product->price
                    ]);
             }
            $order->load('productOrders');
            return response()->json(['success'=>$order]);

        }else{
            return response()->json(['error'=>'این کاربر محصولی در سبد خرید ندارد.'],401);
        }
    }

    public function doPay(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'payment_id' => 'required|numeric',
            'order_id'=>'required|numeric'
        ],[
            'payment_id.required'=>'روش پرداخت را ارسال کنید.',
            'order_id.required'=>'شماره سفارش را ارسال کنید.'
        ]);


        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        if($request->payment_id == 1) {  //if wanna pay for it

               $order = Order::find($request->order_id);

                if($order->total_price == 0){
                    $orderPayment = OrderPayment::create([
                        'order_id'=>$request->order_id,
                        'user_id'=>$this->user()->id,
                        'authority'=>null,
                        'refid'=>null,
                        'total_price'=>0,
                        'state'=>1
                    ]);

                    $payment = OrderPayment::create([
                        'state' => 1,
                        'order_id'=>$request->order_id,
                        'total_price'=>$order->total_price,
                        'payment_method'=>1,
                        'authority'=>null,
                        'refid'=>null
                    ]);

                    foreach ($order->productOrders as $product){
                        $carts = Cart::where([['product_id',$product->id],['user_id',$this->user()->id]])->first();
                        $carts->delete();
                    }
                    $success['message']='محصول مورد نظر با موفقیت خریداری شده و آماده دانلود میباشد.';
                    $success['status']=200;
                    return response()->json(['success'=>$success]);

                }else {

//        $payir->factorNumber = 'Factor-Number'; // Optional
                    $redirect = 'shavernoapp.ir/pay/verify-product';
                    $description = 'خرید محصول به مبلغ ' .
                        $request->value .
                        ' تومان '; // Optional
                    $mobile = '0' . $this->user()->mobile; // Optional, If you want to show user's saved card numbers in gateway
                    $client = new Client([
                        // Base URI is used with relative requests
                        'base_uri' => 'https://pay.ir',
                        // You can set any number of default request options.
                        'timeout' => 2.0,
                    ]);
                    $response = $client->request('POST', '/pg/send', [
                        'form_params' => [
                            'api' => $this->api,
                            'amount' => $order->total_price,
                            'description' => $description,
                            'mobile' => $mobile,
                            'redirect' => $redirect,
                        ]
                    ]);

                    $body = $response->getBody();
                    $items = json_decode($body);
                    $status = $items->status;
                    if ($status == 1) {
                        $token = $items->token;
                        $payment = OrderPayment::create([
                            'order_id' => $request->order_id,
                            'user_id' => $this->user()->id,
                            'authority' => $token,
                            'total_price' => $order->total_price,
                            'payment_method' => 1,
                            'refid' => $token,
                            'state' => 0
                        ]);
                        $transaction = Transaction::create([
                            'user_id' => $this->user()->id,
                            'payment_method_id' => 1,
                            'amount' => $order->total_price,
                            'refid' => $token,
                            'authority' => $token,
                            'state'=>0
                        ]);
                        $success['url'] = 'https://pay.ir/pg/' . $token;
                        return response()->json(['success' => $success]);
                    } else {
                        $payment = OrderPayment::create([
                            'order_id' => $request->order_id,
                            'user_id' => $this->user()->id,
                            'authority' => null,
                            'total_price' => $order->total_price,
                            'payment_method' => 1,
                            'refid' => null,
                            'state' => 0
                        ]);
                        $transaction = Transaction::create([
                            'user_id' => $this->user()->id,
                            'payment_method_id' => 1,
                            'amount' => $order->total_price,
                            'refid' => null,
                            'authority' => null,
                            'state'=>0
                        ]);

                        return response()->json(['error' => 'اشکال در ورود به درگاه پیش آمده است،کد خطا:  ' . $status]);
                    }


                }

        }else{
            $order = Order::find($request->order_id);
            $amount = $order->total_price;
            if($amount == 0){

                $orderPayment = OrderPayment::where([
                    'order_id'=>$request->order_id,
                    'total_price'=>$amount,
                    'payment_method'=>2,
                    'authority'=> null,
                    'refid'=> null,
                    'state'=>1
                ]);
                foreach ($order->productOrders as $product){
                    $carts = Cart::where([['product_id',$product->id],['user_id',$this->user()->id]])->first();
                    $carts->delete();
                }
                $success['message']='محصول مورد نظر با موفقیت خریداری شده و آماده دانلود میباشد.';
                $success['status']=200;

                return response()->json(['success'=>$success]);


            }else{

            if($this->user()->wallet >= $amount) {
                $wallet = new Wallet();
                $wallet->user_id = $this->user()->id;
                $wallet->finance = -$amount;
                $wallet->payment_method_id = null;
                $wallet->save();
                $this->user()->update([
                   'wallet' =>$this->user()->wallet - $amount
                ]);
                $orderPayment = OrderPayment::where([
                    'order_id'=>$request->order_id,
                    'total_price'=>$amount,
                    'payment_method'=>2,
                    'authority'=> null,
                    'refid'=> null,
                    'state'=>1
                ]);


            }else{
                return response()->json(['error'=>'در کیف پول شما موجودی کافی برای خرید این محصول وجود ندارد.'],401);
            }


            }

        }


    }

    public function verifyPay(Request $request)
    {
        $token = $request->token;
        $status = $request->status;
        if(isset($status)) {
            if ($status == 1) {

                $client = new Client([
                    // Base URI is used with relative requests
                    'base_uri' => 'https://pay.ir',
                    // You can set any number of default request options.
                    'timeout' => 2.0,
                ]);
                $response = $client->post( '/pg/verify', [
                    'form_params' => [
                        'api' => $this->api,
                        'token' => $token
                    ]
                ]);
                $body = $response->getBody();
                $body=json_decode($body);
                $payment = OrderPayment::where([['user_id' => $this->user()->id], ['refid' => $token]])->first();
                if ($payment != null) {

                    if($body['status'] == 1 && $body['message']=='OK') {
                        $order = Order::find($payment->order_id);
                        $payment = $payment->update([
                            'state' => 1
                        ]);

                        foreach ($order->productOrders as $product) {
                            $carts = Cart::where([['product_id', $product->id], ['user_id', $this->user()->id]])->first();
                            $carts->delete();
                        }
                        $success['message'] = 'محصول مورد نظر با موفقیت خریداری شده و آماده دانلود میباشد.';
                        $success['status'] = 200;

                        return response()->json(['success' => $success]);

                }elseif($body['status'] == -5 ){
                        return response()->json(['error'=>'تراکنش با خطا مواجه شده است.'],401);
                    }elseif($body['status'] == -6 ){
                        return response()->json(['error'=>'این تراکنش قبلا انجام شده است.'],401);
                    }else{
                        return response()->json(['error'=>'در پرداخت اشکالی رخ داده است.'],401);
                    }

                }else{
                    return response()->json(['error'=>'پرداختی با چنین مشخضاتی یافت نشد، مبلغ به زودی به حساب شما باز میگردد.'],401);
                }

            } else {
                return response()->json(['error'=>'تراکنش با خطا مواجه شد.'],401);
            }
        }else{
            return response()->json(['error'=>'مشکلی در دریافت وضعیت تراکنش رخ داد.'],401);
        }
    }


    public function CreateDownloadLink(Request $request)
    {
        $validator = Validator::make($request->all(),[
                'order_id'=>'required',
                'p_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()],401);
        }

        $randomtext = $this->getLink(180,$request->order_id);
        $previous = OrderLink::where([['user_id',$this->user()->id],['order_id',$request->order_id],['product_id',$request->p_id]])->first();

        if($previous != null) {
            $orderLink = OrderLink::create([
                'link' => $randomtext,
                'used' => 0,
                'user_id' => $this->user()->id,
                'order_id' => $request->order_id,
                'product_id' => $request->p_id,
            ]);
            $success['url'] = $orderLink->link;
        }else{
          $check = $previous->update([
                'link' => $randomtext,
                'used' => 0,
                'time_used'=>null
            ]);

            $success['url'] = $previous->link;
        }
        return response()->json(['success'=>$success]);
    }

    public function DownloadProductFile($filelink)
    {
        $check = OrderLink::where('link',$filelink)->first();
        if($check != null){
            if($check->used == 0) {
                $updated = $check->update([
                    'used' => 1,
                    'time_used'=>Carbon::now()
                ]);
                $products = Product::find($check->product_id);
                $zip = new ZipArchive;

                $fileName = $filelink.'.zip';

                if ($zip->open(public_path($fileName), ZipArchive::CREATE) === TRUE)
                {
                   // $files = File::files(public_path('myFiles'));

                    foreach ($products->productFiles as $file) {
                        $relativeNameInZipFile = basename($file);
                        $zip->addFile($file, $relativeNameInZipFile);
                    }

                    $zip->close();
                }

        return response()->download(public_path($fileName));

            }else{
                abort(404);
            }
        }else{
            abort(404);
        }
    }

    function getLink($length,$order_id){
        $token = "";
        $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $codeAlphabet.= "abcdefghijklmnopqrstuvwxyz";
        $max = strlen($codeAlphabet);

        for ($i=0; $i < $length; $i++) {
            $token .= $codeAlphabet[random_int(0, $max-1)];
        }
        return sha1(md5(sha1($token.$order_id.time().rand().bin2hex($codeAlphabet.time()).md5(uniqid(rand(), true)))));
    }

/*    public function do_pay(Request $request)
    {
        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            'value' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $amount = $request->value; // Required, Amount
//        $payir->factorNumber = 'Factor-Number'; // Optional
        $redirect = 'shavernoapp.ir/pay/callback';
        $description = 'شارژ کیف پول به مبلغ ' .
            $request->value .
            ' تومان '; // Optional
        $mobile = '0' . $user->mobile; // Optional, If you want to show user's saved card numbers in gateway
        $client = new Client([
            // Base URI is used with relative requests
            'base_uri' => 'https://pay.ir',
            // You can set any number of default request options.
            'timeout' => 2.0,
        ]);
        $response = $client->request('POST', '/pg/send', [
            'form_params' => [
                'api' => $this->api,
                'amount' => $amount,
                'description' => $description,
                'mobile' => $mobile,
                'redirect' => $redirect,

            ]
        ]);

        $body = $response->getBody();
        $items = json_decode($body);
        $token = $items->token;

        $wallet = new Wallet();
        $wallet->user_id = Auth::user()->id;
        $wallet->finance = $amount;
        $wallet->payment_method_id = $token;
        $wallet->save();
        $success['url'] = 'https://pay.ir/pg/' . $token;

// Implicitly cast the body to a string and echo it
        return response()->json(['success' => $success], $this->successStatus);


    }*/


/*    public function verify(Request $request)
    {
        $token = $request->token;
        $status = $request->status;
        $user_id = Wallet::where('payment_method_id', $token)->value('user_id');
        $wallet_id = Wallet::where('payment_method_id', $token)->value('id');
        $user = User::find($user_id);
        $amount = Wallet::where('payment_method_id', $token)->value('finance');

        if ($status == 1) {
            $client = new Client([
                // Base URI is used with relative requests
                'base_uri' => 'https://pay.ir',
                // You can set any number of default request options.
                'timeout' => 2.0,
            ]);
            $response = $client->post( '/pg/verify', [
                'form_params' => [
                    'api' => $this->api,
                    'token' => $request->token
                ]
            ]);
            $body = $response->getBody();
            $body=json_decode($body);
            // echo $body;

            $amount=$amount/10;
            $wallet=Wallet::find($wallet_id);

            if ($wallet->trans_id==null) {
                $user = User::find($user_id);
                $user->wallet = $user->wallet + $amount;
                $user->save();
            }

            $wallet=Wallet::find($wallet_id);
            $wallet->status=1;
            $wallet->trans_id=$body->transId;
            $wallet->save();

        }
        return view('callback', compact('user', 'amount', 'status'));

    }*/

}

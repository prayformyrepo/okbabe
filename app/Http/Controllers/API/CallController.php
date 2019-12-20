<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Call;
use App\Call_secure;
use App\Event;
use App\Http\Controllers\Controller;
use App\User;
use App\Wallet;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Kavenegar\Exceptions\ApiException;
use Kavenegar\Exceptions\HttpException;
use Kavenegar\KavenegarApi;
use Kavenegar;

class CallController extends Controller
{
    public $successStatus = 200;

    public function make_call(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required'
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $adviser_id=Adviser::where('user_id',$request->user_id)->value('id');


        $adviser = Adviser::find($adviser_id);
        if ($adviser->is_online == 0) {
            $call = new Call();
            $call->user_id = Auth::user()->id;
            $call->adviser_id = $adviser_id;
            $call->status = 1; //offline status
            $call->save();

            $error['message']='مشاور آفلاین است';
            $error['status']='offline';
            return response()->json(['error' => $error], 401);
        }

        if ($adviser->status == 0) {
            $call = new Call();
            $call->user_id = Auth::user()->id;
            $call->adviser_id = $adviser_id;
            $call->status = 4; //offline status
            $call->save();

            $error['message']='مشاور در دسترس نیست';
            $error['status']='unreachable';
            return response()->json(['error' => $error], 401);
        }


        if ($adviser->is_busy == 1) {
            $call = new Call();
            $call->user_id = Auth::user()->id;
            $call->adviser_id = $adviser_id;
            $call->status = 0; //busy status
            $call->save();

            $error['message']='مشاور در حال مکالمه است';
            $error['status']='busy';
            return response()->json(['error' => $error], 401);
        }

        $adviser_number = '0' . User::find($adviser->user_id)->mobile;
        $user_number = '0' . Auth::user()->mobile;
        $maxcalltime = floor(Auth::user()->wallet / Adviser::find($adviser_id)->nominal_call_price);
        if ($maxcalltime < 1) {

            $error['message'] = 'اعتبار کافی نیست';
            $error['status'] = 'credit';
            return response()->json(['error' => $error], 401);
        }

        if (Adviser::find($adviser_id)->is_busy == 0 && Adviser::find($adviser_id)->is_online == 1) {
            $client = new Client(['base_uri' => 'http://45.156.186.248']);
// Send a request to https://foo.com/api/test
            $call_secure = Call_secure::all()->first();
            $response = $client->request('GET', 'http://45.156.186.248/my/api' . $call_secure->clid . '.php?email=' . $call_secure->username . '&pass=' . $call_secure->password . '&siteurl=' . $call_secure->siteurl . '&ivrfile=' . $call_secure->ivrfile . '&drivers=' . $adviser_number . '&customer=' . $user_number . '&maxcalltime=' . $maxcalltime);
            $body = $response->getBody();

            if (strpos($body, 'errot') != null) {

                $error['message'] = 'متاسفانه تماس برقرار نشد';
                $error['status'] = 'unknown';
                return response()->json(['error' => $error], 401);
            }

            if (strpos($body, 'callfile') != null) {
                $callfile = substr($body, 32, 19);

                $call = new Call();
                $call->user_id = Auth::user()->id;
                $call->adviser_id = $adviser_id;
                $call->call_file = $callfile;
                $call->status = 2; //speacking status
                $call->save();

                $event = new Event();
                $event->user_id = Auth::user()->id;
                $event->adviser_id = $adviser_id;
                $event->type = 2;
                $event->save();

                $adviser = Adviser::find($adviser_id);
                $adviser->is_busy = 1;
                $adviser->save();

                $adviser_user_id = Adviser::find($adviser_id)->user_id;
                $mobile = User::find($adviser_user_id)->mobile;

                //sms
//                try {
//                    $receptor = $mobile;
//                    $template = "callAlarm";
//                    $type = "sms";
//                    $token = Auth::user()->username;
//                    $token2 = "";
//                    $token3 = "";
//                    $result = Kavenegar::VerifyLookup($receptor, $token, $token2, $token3, $template, $type);
//                } catch (ApiException $e) {
//                    echo $e->errorMessage();
//                } catch (HttpException $e) {
//                    echo $e->errorMessage();
//                }


                $calli['info'] = Call::find($call->id);
                $calli['info']['message'] = 'تماس برقرار شد. لطفا منتظر بمانید';
            }
            return response()->json(['success' => $calli], $this->successStatus);

        }
    }


    public function end_call(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'call_file' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $client = new Client(['base_uri' => 'http://45.156.186.248']);
// Send a request to https://foo.com/api/test
        $call_secure = Call_secure::all()->first();

        $response = $client->request('GET', 'http://45.156.186.248/my/getCDR.php?email=' . $call_secure->username . '&pass=' . $call_secure->password . '&callfile=' . $request->call_file);
        $body = $response->getBody();
        $callinfo = json_decode($body, true);
        $call = Call::where('call_file', $request->call_file)->value('id');
        $call = Call::find($call);
        if ($call->duration == null) {

            $nominal_call_price = Adviser::find($call->adviser_id)->nominal_call_price;
            $nominal_call_price = $nominal_call_price * $callinfo['duration'];

            $call_price = Adviser::find($call->adviser_id)->call_price;
            $call_price = $call_price * $callinfo['duration'];


            $user = User::find(Auth::user()->id);
            $user->wallet = $user->wallet - $nominal_call_price;
            $user->save();


            $user = User::find(Adviser::find($call->adviser_id)->user_id);
            $user->wallet = $user->wallet + $call_price;
            $user->save();

            $adviser = Adviser::find($call->adviser_id);
            $adviser->is_busy = 0;
            $adviser->save();


            $wallet = new Wallet();
            $wallet->user_id = Auth::user()->id;
            $wallet->finance = $nominal_call_price * -1;
            $wallet->call_id = $call->id;
            $wallet->save();

            $wallet = new Wallet();
            $wallet->user_id = Adviser::find($call->adviser_id)->user_id;
            $wallet->finance = $call_price;
            $wallet->call_id = $call->id;
            $wallet->save();

            $call->duration = $callinfo['duration'];
            $call->billing = $nominal_call_price;
            $call->recording_file = $callinfo['recordingfile'];
            $call->status = 3; //ended status
            $call->save();

            $call_center_price = 250 * $callinfo['duration'];
            $sms_price = 160;
            //sms
            try {
                $receptor = User::find(Adviser::find($call->adviser_id)->user_id)->mobile;
                $template = "callStatus";
                $type = "sms";
                $token = $nominal_call_price;
                $token2 = $nominal_call_price - $call_price - $call_center_price - $sms_price;
                $token3 = $call_price;
                $result = Kavenegar::VerifyLookup($receptor, $token, $token2, $token3, $template, $type);
            } catch (ApiException $e) {
                echo $e->errorMessage();
            } catch (HttpException $e) {
                echo $e->errorMessage();
            }


            return response()->json(['success' => $call], $this->successStatus);
        }
        return response()->json(['success' => 'ok'], $this->successStatus);

    }

    public function reject_call(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'call_file' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $client = new Client(['base_uri' => 'http://45.156.186.248']);
// Send a request to https://foo.com/api/test
        $call_secure = Call_secure::all()->first();

        $response = $client->request('GET', 'http://45.156.186.248/my/getCDR.php?email=' . $call_secure->username . '&pass=' . $call_secure->password . '&callfile=' . $request->call_file);
        $body = $response->getBody();
        $callinfo = json_decode($body, true);
        $call = Call::where('call_file', $request->call_file)->value('id');
        $call = Call::find($call);
        if ($call->duration == null) {
            $call->duration = $callinfo['duration'];
            $call->billing = 0;
            $call->recording_file = $callinfo['recordingfile'];
            isset($request->unreachable)&&$request->unreachable==1?$call->status = 4:$call->status = 5; //4:unreachable & 5:reject status
            $call->save();
            return response()->json(['success' => $call], $this->successStatus);
        }
        $adviser=Adviser::find($call->adviser_id);
        $adviser->status=0;
        $adviser->save();
        return response()->json(['success' => 'ok'], $this->successStatus);
    }

    public function call_history()
    {
        $user=Auth::user();
        if ($user->as_adviser==1){
            $adviser_id=Adviser::where('user_id',$user->id)->value('id');
            $calls=Call::where('adviser_id',$adviser_id)->get();
            $calls['adviser_user_id']=$user->id;
            return response()->json(['success' => $calls], $this->successStatus);
        }else{
            $calls=Call::where('user_id',$user->id)->get();
            $c=array();
            foreach ($calls as $call){
                $cc=$call;
                $user_id=Adviser::find($call->adviser_id)->user_id;
                $cc['user_name']=User::find($user_id)->name;
                $cc['user_avatar']=User::find($user_id)->avatar;
                array_push($c,$cc);
            }
            return response()->json(['success' => $c], $this->successStatus);
        }
    }

}

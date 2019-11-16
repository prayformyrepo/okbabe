<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Call;
use App\Call_secure;
use App\Http\Controllers\Controller;
use App\User;
use App\Wallet;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class CallController extends Controller
{
    public $successStatus = 200;
    public function make_call(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'required'
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $adviser=Adviser::find($request->adviser_id);
        if ($adviser->is_online==0) return response()->json(['error'=>'adviser is offline'], 401);

        $adviser_number='0'.User::find($adviser->user_id)->mobile;
        $user_number='0'.Auth::user()->mobile;
        $maxcalltime=floor(Auth::user()->wallet / Adviser::find($request->adviser_id)->nominal_call_price);
        if($maxcalltime<1)  return response()->json(['error'=>'اعتبار کافی نیست'], 401);

        $client = new Client(['base_uri' => 'http://45.156.186.248']);
// Send a request to https://foo.com/api/test
        $call_secure=Call_secure::all()->first();
        $response = $client->request('GET', 'http://45.156.186.248/my/api'.$call_secure->clid.'.php?email='.$call_secure->username.'&pass='.$call_secure->password.'&siteurl='.$call_secure->siteurl.'&ivrfile='.$call_secure->ivrfile.'&drivers='.$adviser_number.'&customer='.$user_number.'&maxcalltime='.$maxcalltime);
        $body = $response->getBody();

        if (strpos($body,'errot')!=null)  return response()->json(['error'=>'متاسفانه تماس برقرار نشد'], 401);

//        $test='                {"callfile":"159_F54QOYe7Yq.call"}';
//        $test='                {"callfile":"159_sASyr4lonh.call"}';
//        $test='                {"callfile":"159_vF12isOODF.call"}';
//        $test='                {"callfile":"159_BCZhLTjNWy.call"}';
//        $test='                {"callfile":"159_brHUtR4wUb.call"}';
//        $test='                {"callfile":"159_1zjh9uc0Se.call"}';
        if (strpos($body,'callfile')!=null)  {
            $callfile=substr($body,32,19);

        $call=new Call();
        $call->user_id=Auth::user()->id;
        $call->adviser_id=$request->adviser_id;
        $call->call_file=$callfile;
        $call->save();

        $calli['info']=Call::find($call->id);
        $calli['info']['message']='تماس برقرار شد. لطفا منتظر بمانید';
        }
return response()->json(['success'=>$calli], $this-> successStatus);
    }


    public function end_call(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'call_file' => 'required'
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $client = new Client(['base_uri' => 'http://45.156.186.248']);
// Send a request to https://foo.com/api/test
        $call_secure=Call_secure::all()->first();

        $response = $client->request('GET', 'http://45.156.186.248/my/getCDR.php?email='.$call_secure->username.'&pass='.$call_secure->password.'&callfile='.$request->call_file);
        $body = $response->getBody();
        $callinfo=json_decode($body,true);
        $call=Call::where('call_file',$request->call_file)->value('id');
        $call=Call::find($call);
        if ($call->duration==null) {
            $nominal_call_price = Adviser::find($call->adviser_id)->nominal_call_price;
            $nominal_call_price = $nominal_call_price * $callinfo['duration'];

            $call_price = Adviser::find($call->adviser_id)->call_price;
            $call_price = $call_price * $callinfo['duration'];

            $call->duration = $callinfo['duration'];
            $call->billing = $nominal_call_price;
            $call->recording_file = $callinfo['recordingfile'];
            $call->save();

            $user = User::find(Auth::user()->id);
            $user->wallet = $user->wallet - $nominal_call_price;
            $user->save();


            $user = User::find(Adviser::find($call->adviser_id)->user_id);
            $user->wallet = $user->wallet + $call_price;
            $user->save();

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



            return response()->json(['success'=>$call], $this-> successStatus);


        }
        return response()->json(['success'=>'ok'], $this-> successStatus);

    }
}

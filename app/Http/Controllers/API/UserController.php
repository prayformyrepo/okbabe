<?php
namespace App\Http\Controllers\API;
use App\Adviser;
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
class UserController extends Controller
{



    public $successStatus = 200;
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(){
        if(Auth::attempt(['mobile' => request('mobile'), 'password' => request('password')])){
            $user = Auth::user();
            oauth_access_token::where('user_id',$user->id)->delete();
            $success['token'] =  $user->createToken('login')-> accessToken;
            $user_token=User::find($user->id);
            $user_token->api_token= $success['token'];
            $user_token->save();
            return response()->json(['success' => $success], $this-> successStatus);
        }
        else{
            return response()->json(['error'=>'Unauthorized'], 401);
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
            return response()->json(['error'=>$validator->errors()], 401);
        }
//        $input['password'] = bcrypt($input['password']);

        $digits = 4;
        $code=rand(pow(10, $digits-1), pow(10, $digits)-1);
        $agent = new Agent();
        $user_count=User::where('mobile',$request->mobile)->count();
        if ($user_count==0) {

            $user = new User();
            $user->mobile = $request->mobile;
            $user->code = $code;
            $user->os = $agent->platform();
            $user->os_version = $agent->version($agent->platform());

            $user->save();

            $user_id=User::where('mobile',$request->mobile)->value('id');
            $user=User::find($user_id);
        }
        else{
            $user_id=User::where('mobile',$request->mobile)->value('id');
            $user=User::find($user_id);
            if ($user->password!=null) {
                $user->os = $agent->platform();
                $user->os_version = $agent->version($agent->platform());
                $user->api_token=null;
                $user->save();


                oauth_access_token::where('user_id',$user->id)->delete();
                $success['user']=$user;
                return response()->json(['success'=>$success], $this-> successStatus);

            }else{
                $user->code = $code;
                $user->os = $agent->platform();
                $user->os_version = $agent->version($agent->platform());
                $user->save();
            }
        }



        //sms
        try {
            $sender = "100065995";
//            09147845149
            $receptor=[$request->mobile];
            $message =$code."\n" ."شاورنو" ;
            $api = new KavenegarApi("614B7A514F4D3067754C4668474E626358616C50356C47467343782B516C6A56");
            $api->Send($sender, $receptor, $message);

        } catch (ApiException $e) {
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            echo $e->errorMessage();
        } catch (HttpException $e) {
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            echo $e->errorMessage();
        }



        oauth_access_token::where('user_id',$user->id)->delete();
        $token =  $user->createToken('Register')-> accessToken;
        $user->api_token=$token;
        $user->save();
        $success['user']=$user;




        return response()->json(['success'=>$success], $this-> successStatus);
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
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = Auth::user();
        $user=User::find($user->id);

        if ($user->code!=$request->code){
            $error['reason'] =  'code is wrong';
            return response()->json(['error'=>$error],401);
        }
        $user->mobile_verified_at=Carbon::now();
        $user->save();

        oauth_access_token::where('user_id',$user->id)->delete();
        $success['token'] =  $user->createToken('validation')-> accessToken;
        $user->api_token=$success['token'];
        $user->save();

        return response()->json(['success'=>$success], $this-> successStatus);
    }
    /**
     * set password api
     *
     * @return \Illuminate\Http\Response
     */
    public function set_data(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $user = Auth::user();

        if (!empty($user->password)){
            $error['reason'] =  'data already set';
            return response()->json(['error'=>$error],401);
        }
        $user_set=User::find($user->id);
        $user_set->name=$request->name;
        $user_set->password=bcrypt($request->password);
        $user_set->password_set_at=Carbon::now();
        $user_set->save();

        $success['message'] = 'data set';
        return response()->json(['success'=>$success], $this-> successStatus);
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function user_info()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this-> successStatus);

    }

    public function reset_password()
    {
        $user_id=Auth::user()->id;
        $user=User::find($user_id);
        $user->password=null;
        $user->save();
        $success['message'] = 'password deleted, goto auth route';

        return response()->json(['success' => $success], $this-> successStatus);

    }

    public function toggle_online(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'is_online' => 'required|boolean',

        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user=Auth::user();
        $user=User::find($user->id);
        $user->is_online=$request->is_online;
        $user->save();
        if ($user->is_adviser==1){
            $adviser_id=Adviser::where('user_id',$user->id)->value('id');
            $adviser=Adviser::find($adviser_id);
            $adviser->is_online=$request->is_online;
            $adviser->save();

        }
        $success['is_online'] = $user->is_online;
        $success['is_adviser'] = $user->is_adviser;

        return response()->json(['success' => $success], $this-> successStatus);
    }

}
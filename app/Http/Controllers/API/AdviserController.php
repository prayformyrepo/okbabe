<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_rate;
use App\Adviser_time;
use App\Adviser_to_category;
use App\Call;
use App\Event;
use App\Http\Controllers\Controller;
use App\oauth_access_token;
use App\Question_answer;
use App\Saved_adviser;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jenssegers\Agent\Agent;
use Validator;
use Kavenegar;
use Kavenegar\Exceptions\ApiException;
use Kavenegar\Exceptions\HttpException;


class AdviserController extends Controller
{
    public $successStatus = 200;

    public function show_advisers(Request $request)
    {
        if (isset($request->show_online) && $request->show_online = true) {
            $advisers = Adviser::where('is_online', 1)->orderBy('id', 'DESC')->paginate(10);
        } else if (isset($request->user_id)) {
            $a = array();
            if (User::find($request->user_id)->is_adviser == 0) return response()->json(['error' => 'user is not adviser'], $this->successStatus);
            $advisers_id = Adviser::where('user_id', $request->user_id)->value('id');
            $advisers = Adviser::find($advisers_id);
            $adviser['adviser'] = $advisers;
            $adviser['adviser']['RN_field'] = str_replace('<br>', ' - ', str_replace("\n", '', $advisers->field));
            $adviser['adviser']['RN_about'] = str_replace('<br>', '', $advisers->about);
            $adviser['adviser']['name'] = User::find($request->user_id)->name;
            $adviser['adviser']['avatar'] = User::find($request->user_id)->avatar;
            $adviser['adviser']['lat'] = Adviser::where('user_id', $request->user_id)->value('lat');
            $adviser['adviser']['long'] = Adviser::where('user_id', $request->user_id)->value('long');
            $adviser['adviser']['video_cover'] = Adviser::where('user_id', $request->user_id)->value('video_cover');
            $adviser['adviser']['video'] = Adviser::where('user_id', $request->user_id)->value('video');
            $adviser['adviser']['is_busy'] = Adviser::where('user_id', $request->user_id)->value('is_busy');
            $adv_id = Adviser::where('user_id', $request->user_id)->value('id');
            $rates = Adviser_rate::where('adviser_id', $adv_id)->get();
            $rate_count = Adviser_rate::where('adviser_id', $adv_id)->count();
            $all = 0;
            foreach ($rates as $rate) {
                $all = $all + $rate->rate;
            }
            if ($rate_count != 0)
                $adviser['adviser']['rate'] = $all / $rate_count;
            else
                $adviser['adviser']['rate'] = 0;
//            $adviser['adviser']['categories']=$advisers->categories()->get();
//            $adviser['adviser']['times']=$advisers->times()->get();
            $times = $advisers->times()->orderBy('date', 'ASC')->get();
            $count = $advisers->times()->count();
            $tt = array();
//            $adviser['adviser']['ttt']=array();
            $testi = array();
            for ($i = 0; $i < $count; $i++) {

                $tt['id'] = $times[$i]['id'];
                $tt['date'] = $times[$i]['date'];
                $tt['time_from'] = $times[$i]['time_from'];
                $tt['time_to'] = $times[$i]['time_to'];
                if ($i != 0) {
                    if ($times[$i]['date'] === $times[$i - 1]['date']) {
                        $tt['date'] = null;
                    }
                }
                array_push($testi, $tt);

            }
            $adviser['adviser']['times'] = $testi;


            $adviser['adviser']['qa_count'] = Question_answer::where('adviser_id', $advisers->id)->count();
            $adviser['adviser']['comment_count'] = Adviser_rate::where('adviser_id', $advisers->id)->where('comment', '!=', null)->count();
            $adviser['adviser']['call_count'] = Call::where('adviser_id', $advisers->id)->where('duration', '!=', null)->count();
            $save_count = Saved_adviser::where('user_id', Auth::user()->id)->where('adviser_id', $advisers_id)->count();
            $adviser['adviser']['is_saved'] = $save_count == 0 ? 0 : 1;

            array_push($a, $adviser);
            return response()->json(['success' => $a], $this->successStatus);
        }

        else if (isset($request->adviser_id)) {
            $user_id=Adviser::find($request->adviser_id)->user_id;
            $a = array();
            if (User::find($user_id)->is_adviser == 0) return response()->json(['error' => 'user is not adviser'], $this->successStatus);
            $advisers_id = Adviser::where('user_id', $user_id)->value('id');
            $advisers = Adviser::find($advisers_id);
            $adviser['adviser'] = $advisers;
            $adviser['adviser']['RN_field'] = str_replace('<br>', ' - ', str_replace("\n", '', $advisers->field));
            $adviser['adviser']['RN_about'] = str_replace('<br>', '', $advisers->about);
            $adviser['adviser']['name'] = User::find($user_id)->name;
            $adviser['adviser']['avatar'] = User::find($user_id)->avatar;
            $adviser['adviser']['lat'] = Adviser::where('user_id', $user_id)->value('lat');
            $adviser['adviser']['long'] = Adviser::where('user_id', $user_id)->value('long');
            $adviser['adviser']['video_cover'] = Adviser::where('user_id', $user_id)->value('video_cover');
            $adviser['adviser']['video'] = Adviser::where('user_id', $user_id)->value('video');
            $adviser['adviser']['is_busy'] = Adviser::where('user_id', $user_id)->value('is_busy');
            $adv_id = Adviser::where('user_id', $user_id)->value('id');
            $rates = Adviser_rate::where('adviser_id', $adv_id)->get();
            $rate_count = Adviser_rate::where('adviser_id', $adv_id)->count();
            $all = 0;
            foreach ($rates as $rate) {
                $all = $all + $rate->rate;
            }
            if ($rate_count != 0)
                $adviser['adviser']['rate'] = $all / $rate_count;
            else
                $adviser['adviser']['rate'] = 0;
//            $adviser['adviser']['categories']=$advisers->categories()->get();
//            $adviser['adviser']['times']=$advisers->times()->get();
            $times = $advisers->times()->orderBy('date', 'ASC')->get();
            $count = $advisers->times()->count();
            $tt = array();
//            $adviser['adviser']['ttt']=array();
            $testi = array();
            for ($i = 0; $i < $count; $i++) {

                $tt['id'] = $times[$i]['id'];
                $tt['date'] = $times[$i]['date'];
                $tt['time_from'] = $times[$i]['time_from'];
                $tt['time_to'] = $times[$i]['time_to'];
                if ($i != 0) {
                    if ($times[$i]['date'] === $times[$i - 1]['date']) {
                        $tt['date'] = null;
                    }
                }
                array_push($testi, $tt);

            }
            $adviser['adviser']['times'] = $testi;


            $adviser['adviser']['qa_count'] = Question_answer::where('adviser_id', $advisers->id)->count();
            $adviser['adviser']['comment_count'] = Adviser_rate::where('adviser_id', $advisers->id)->where('comment', '!=', null)->count();
            $adviser['adviser']['call_count'] = Call::where('adviser_id', $advisers->id)->where('duration', '!=', null)->count();
            $save_count = Saved_adviser::where('user_id', Auth::user()->id)->where('adviser_id', $advisers_id)->count();
            $adviser['adviser']['is_saved'] = $save_count == 0 ? 0 : 1;

            array_push($a, $adviser);
            return response()->json(['success' => $a], $this->successStatus);
        }

        else {
            $advisers = Adviser::orderBy('rate', 'DESC')->paginate(10);
        }
        $a = array();
        foreach ($advisers as $advise) {
            $adviser['adviser'] = $advise;
            $adviser['adviser']['adviser_id'] = $advise->id;
            $adviser['adviser']['RN_field'] = str_replace('<br>', '', $advise->field);
            $adviser['adviser']['RN_about'] = str_replace('<br>', '', $advise->about);
            $adviser['adviser']['name'] = User::find($advise->user_id)->name;
            $adviser['adviser']['avatar'] = User::find($advise->user_id)->avatar;
            $adviser['adviser']['lat'] = Adviser::where('user_id', $advise->user_id)->value('lat');
            $adviser['adviser']['long'] = Adviser::where('user_id', $advise->user_id)->value('long');
            $adviser['adviser']['video'] = Adviser::where('user_id', $advise->user_id)->value('video');
            $adviser['adviser']['categories'] = $advise->categories()->get();
            $adviser['adviser']['times'] = $advise->times()->get();
            $adviser['adviser']['qa_count'] = Question_answer::where('adviser_id', $advise->id)->count();
            $adviser['adviser']['comment_count'] = Adviser_rate::where('adviser_id', $advise->id)->where('comment', '!=', null)->count();
            $adviser['adviser']['call_count'] = Call::where('adviser_id', $advise->id)->where('duration', '!=', null)->count();
            $save_count = Saved_adviser::where('user_id', Auth::user()->id)->where('adviser_id', $advise->id)->count();
            $adviser['adviser']['is_saved'] = $save_count == 0 ? 0 : 1;

            $all = 0;

            $rates = Adviser_rate::where('adviser_id', $advise->id)->get();
            $rate_count = Adviser_rate::where('adviser_id', $advise->id)->count();

            foreach ($rates as $rate) {
                $all = $all + $rate->rate;
            }
            if ($rate_count != 0)
                $adviser['adviser']['rate'] = $all / $rate_count;
            else
                $adviser['adviser']['rate'] = 0;

            array_push($a, $adviser);
        }
        $paginate['total'] = $advisers->total();
        $paginate['per_page'] = $advisers->perPage();
        $paginate['current_page'] = $advisers->currentPage();
        $paginate['last_page'] = $advisers->lastPage();
        $paginate['has_more_pages'] = $advisers->hasMorePages();
        $paginate['next_page_url'] = $advisers->nextPageUrl();
        $paginate['previous_page_url'] = $advisers->previousPageUrl();
        return response()->json(['success' => $a, "pagination" => $paginate], $this->successStatus);

    }


    public function add_adviser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'mobile' => 'required|unique:users|iran_mobile|regex:/^((?!(0))[0-9]{10})$/',
            'gender' => 'required|integer',
            'field' => 'required',
            'about' => 'required',
            'call_price' => 'required|integer',
            'nominal_call_price' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $agent = new Agent();

        $user = new User();
        $user->name = $request->name;
        $user->mobile = $request->mobile;
        $user->gender = $request->gender;
        $user->is_adviser = 1;
        $user->os = $agent->platform();
        $user->os_version = $agent->version($agent->platform());
        $user->save();

        $adviser = new Adviser();
        $adviser->user_id = $user->id;
        $adviser->field = $request->field;
        $adviser->about = $request->about;
        $adviser->call_price = $request->call_price;
        $adviser->nominal_call_price = $request->nominal_call_price;
        $adviser->save();


        $adviser = Adviser::find($adviser->id);

        return response()->json(['success' => $adviser], $this->successStatus);

    }


    public function add_adviser_category(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'slug' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $category = new Adviser_category();
        $category->name = $request->name;
        $category->slug = $request->slug;
        isset($request->parent_category_id) ? $category->parent_category_id = $request->parent_category_id : $category->save();
        $category->save();

        $category = Adviser_category::find($category->id);

        return response()->json(['success' => $category], $this->successStatus);
    }

    public function assign_adviser_to_category(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'required',
            'adviser_category_id' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $assign = Adviser_to_category::where('adviser_id', $request->adviser_id)->where('adviser_category_id', $request->adviser_category_id)->count();
        if ($assign == 0) {

            $assign = new Adviser_to_category();
            $assign->adviser_id = $request->adviser_id;
            $assign->adviser_category_id = $request->adviser_category_id;
            $assign->save();

        }
        $adviser = Adviser::find($request->adviser_id)->categories()->get();
        return response()->json(['success' => $adviser], $this->successStatus);

    }


    public function add_adviser_time(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required|integer',
            'time_from' => 'required',
            'time_to' => 'required',
            'adviser_id' => 'required'

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $time = Adviser_time::where('adviser_id', $request->adviser_id)->where('date', $request->date)->where('time_from', $request->time_from)->where('time_to', $request->time_to)->count();

        if ($time == 0) {
            $time = new Adviser_time();
            $time->adviser_id = $request->adviser_id;
            $time->date = $request->date;
            $time->time_from = $request->time_from;
            $time->time_to = $request->time_to;
            $time->save();
        }
        $adviser = Adviser::find($request->adviser_id)->times()->get();
        return response()->json(['success' => $adviser], $this->successStatus);
    }

    public function save_adviser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'required'

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();

        $adviser = Adviser::find($request->adviser_id);
        if ($adviser == null) {
            $message = 'adviser not found';
            return response()->json(['error' => $message], 404);
        }

        $saved_adviser = Saved_adviser::where('user_id', $user->id)->where('adviser_id', $request->adviser_id);
        if ($saved_adviser->count() == 0) {
            $save = new Saved_adviser();
            $save->user_id = $user->id;
            $save->adviser_id = $request->adviser_id;
            $save->save();
            $success['message'] = 'created';


            //add to events
            $event = Event::where('user_id', $user->id)->where('adviser_id', $request->adviser_id);
            if ($event->count() == 0) {
                $event = new Event();
                $event->type = 0;
                $event->adviser_id = $request->adviser_id;
                $event->user_id = $user->id;
                $event->save();
            }

        } else {
            $saved_adviser_id = $saved_adviser->value('id');
            Saved_adviser::find($saved_adviser_id)->delete();
            $success['message'] = 'deleted';

        }

        return response()->json(['success' => $success], $this->successStatus);

    }

    public function show_adviser_categories()
    {
        $adviser_category = Adviser_category::orderBy('id', 'DESC')->simplePaginate(10);
        return response()->json(['success' => $adviser_category], $this->successStatus);
    }


    public function rate_adviser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'required',
            'rate' => 'required',
            'is_private' => 'required'
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $adviser_r = @Adviser_rate::where('user_id', Auth::user()->id)->where('adviser_id', $request->adviser_id)->get();
        $adviser_r = $adviser_r->count();
        if ($adviser_r == 0) {
            $rate = new Adviser_rate();
            $rate->adviser_id = $request->adviser_id;
            $rate->user_id = Auth::user()->id;
            $rate->rate = $request->rate;
            $rate->is_private = $request->is_private;
            if (isset($request->comment)) $rate->comment = $request->comment;
            $rate->save();
            $rates = Adviser_rate::where('adviser_id', $request->adviser_id)->get();
            $rate_count = Adviser_rate::where('adviser_id', $request->adviser_id)->count();
            $all = 0;
            foreach ($rates as $rate) {
                $all = $all + $rate->rate;
            }
            if ($rate_count != 0)
                $ad=Adviser::find($request->adviser_id);
            $ad->rate = $all / $rate_count;
            $ad->save();

            return response()->json(['success' => $rate], $this->successStatus);

        }
        return response()->json(['success' => 'ok'], $this->successStatus);

    }

    public function accept_rate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'accept' => 'required',
            'rate_id' => 'required'

//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $rate = Adviser_rate::find($request->rate_id);
        $rate->status = $request->accept;
        $rate->save();
        return response()->json(['success' => $rate], $this->successStatus);
    }

    public function reach_adviser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'required'

//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $adviser = Adviser::find($request->adviser_id);
        $adviser->status = 1;
        $adviser->save();
        return response()->json(['success' => $adviser], $this->successStatus);
    }

    public function force_toggle_online()
    {
        $user = Auth::user();
        if ($user->is_adviser == 0) return response()->json(['error' => 'user is not adviser'], '401');


//    now date time
        $weekMap = [
            0 => 1,
            1 => 2,
            2 => 3,
            3 => 4,
            4 => 5,
            5 => 6,
            6 => 0,
        ];
        $dayOfTheWeek = Carbon::now()->dayOfWeek;
        $weekday = $weekMap[$dayOfTheWeek];
        $today = strtotime(\Carbon\Carbon::now()->format('H:i'));

        //get all advisers
        $userr = $user;

        $flag = false;
        $adviser_id = Adviser::where('user_id', $userr->id)->value('id');

        $force_toggle_online = Adviser::where('user_id', $userr->id)->value('force_toggle_online');

        $adviser_times = Adviser_time::where('adviser_id', $adviser_id)->get();
        foreach ($adviser_times as $adviser_time) {
            //check date time
            if ($adviser_time->date == $weekday) {
                $time_from = strtotime($adviser_time->time_from);
                $time_to = strtotime($adviser_time->time_to);
                //echo $userr->id .'date is ok<br>time from:'.$adviser_time->time_from.'<br>time to: '. $adviser_time->time_to .'<br><br>' ;
                if ($time_from < $today && $time_to > $today) {
                    $flag = true;
                }
            }
        }

        //set advisers offline-online
        if ($flag == true) {
            // echo 'user_id:'.$userr->id.'<br> flag: true <br>';
            if ($force_toggle_online == 0) {
                $u = User::find($userr->id);
                $u->is_online = 0;
                $u->save();

                $a = Adviser::find($adviser_id);
                $a->is_online = 0;
                $a->force_toggle_online = 1;
                $a->save();

            } else if ($force_toggle_online == 1) {
                $u = User::find($userr->id);
                $u->is_online = 1;
                $u->save();

                $a = Adviser::find($adviser_id);
                $a->is_online = 1;
                $a->force_toggle_online = 0;
                $a->save();
            }

        }

        if ($flag == false) {
            //  echo 'user_id:'.$userr->id.'<br> flag:false<br>';
            if ($force_toggle_online == 0) {

                $u = User::find($userr->id);
                $u->is_online = 1;
                $u->save();

                $a = Adviser::find($adviser_id);
                $a->is_online = 1;
                $a->force_toggle_online = 1;
                $a->save();

            } else if ($force_toggle_online == 1) {
                $u = User::find($userr->id);
                $u->is_online = 0;
                $u->save();

                $a = Adviser::find($adviser_id);
                $a->is_online = 0;
                $a->force_toggle_online = 0;
                $a->save();

            }
        }


//        }
        $success['force_online_toggle'] = $force_toggle_online = Adviser::where('user_id', Auth::user()->id)->value('force_toggle_online');
        $success['is_online'] = Adviser::where('user_id', Auth::user()->id)->value('is_online');

        return response()->json(['success' => $success], $this->successStatus);

    }

    public function change_number(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'mobile' => 'required|unique:users|iran_mobile|regex:/^((?!(0))[0-9]{10})$/'
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        if ($user->is_adviser == 0) return response()->json(['error' => 'user is not adviser'], '401');

        $user = User::find($user->id);
        $user->mobile = $request->mobile;
        $user->mobile_verified_at = null;
        $digits = 4;
        $code = rand(pow(10, $digits - 1), pow(10, $digits) - 1);


        //sms
        try {
            $receptor = $request->mobile;
            $template = "shaverno";
            $type = "sms";
            $token = $code;
            $token2 = "";
            $token3 = "";
            $result = Kavenegar::VerifyLookup($receptor, $token, $token2, $token3, $template, $type);
        } catch (ApiException $e) {
            echo $e->errorMessage();
        } catch (HttpException $e) {
            echo $e->errorMessage();
        }

        $success['code'] = $code;
        $success['message'] = 'open verify page';
        return response()->json(['success' => $success], $this->successStatus);
    }

    public function add_time(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required',
            'time_from' => 'required',
            'time_to' => 'required',
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        if ($user->is_adviser == 0) return response()->json(['error' => 'user is not adviser'], '401');

        $date = $request->date;
        $time_from = $request->time_from;
        $time_to = $request->time_to;
        $adviser_id = Adviser::where('user_id', $user->id)->value('id');
        if (Adviser_time::where('adviser_id', $adviser_id)->where('date', $date)->count() != 0) {

            $all_times = Adviser_time::where('adviser_id', $adviser_id)->where('date', $date)->get();
            $flag = false;
            foreach ($all_times as $all_time) {
                if (($time_from < $all_time->time_to && $time_from > $all_time->time_from) || ($time_to > $all_time->time_from && $time_to < $all_time->time_to) || ($time_from == $all_time->time_from && $time_to == $all_time->time_to)) {
                    $flag = true;
                    return response()->json(['error' => 'زمان انتخابی با زمان های فعلی تداخل دارد'], '401');
                }


            }

            if ($flag == false) {
                $times = Adviser_time::create([
                    'adviser_id' => $adviser_id,
                    'date' => $date,
                    'time_from' => $time_from,
                    'time_to' => $time_to,
                ]);
            }


        } else {

            $times = Adviser_time::create([
                'adviser_id' => $adviser_id,
                'date' => $date,
                'time_from' => $time_from,
                'time_to' => $time_to,
            ]);
        }

        $adviser_times = Adviser_time::where('adviser_id', $adviser_id)->get();

        return response()->json(['success' => $adviser_times], $this->successStatus);


    }


    public function edit_time(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'time_id' => 'required',
            'date' => 'required',
            'time_from' => 'required',
            'time_to' => 'required',
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $adviser_id = Adviser::where('user_id', Auth::user()->id)->value('id');


        $times = Adviser_time::updateOrCreate(
            [
                'id' => $request->time_id
            ],

            [
                'date' => $request->date,
                'time_from' => $request->time_from,
                'time_to' => $request->time_to,
            ]
        );
        $adviser_times = Adviser_time::where('adviser_id', $adviser_id)->get();

        return response()->json(['success' => $adviser_times], $this->successStatus);

    }

    public function delete_time(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'time_id' => 'required',
//
        ]);
        $adviser_id = Adviser::where('user_id', Auth::user()->id)->value('id');


        Adviser_time::find($request->time_id)->delete();

        $adviser_times = Adviser_time::where('adviser_id', $adviser_id)->get();

        return response()->json(['success' => $adviser_times], $this->successStatus);
    }

    public function adviser_times()
    {
        $adviser_id = Adviser::where('user_id', Auth::user()->id)->value('id');


        $adviser_times = Adviser_time::where('adviser_id', $adviser_id)->get();

        return response()->json(['success' => $adviser_times], $this->successStatus);
    }

    public function adviser_comments(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_id' => 'required',
//
        ]);

        $rates=Adviser_rate::where('adviser_id',$request->adviser_id)->orderBy('id','DESC')->get();
        $ra=array();
        foreach ($rates as $rate){
            $r=$rate;
            if ($rate->is_private==0){
                $r['user_name']=User::find($rate->user_id)->name==null?User::find($rate->user_id)->username:User::find($rate->user_id)->name;
                $r['avatar']=User::find($rate->user_id)->avatar;
            }else{
                $r['user_id']=null;
                $r['user_name']='ناشناس';
                $r['avatar']='/themes/custom-5176/userfiles/fdacd9.jpg';
            }
            array_push($ra,$r);
        }
        return response()->json(['success' => $ra], $this->successStatus);
    }

}

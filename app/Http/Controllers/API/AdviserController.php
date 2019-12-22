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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jenssegers\Agent\Agent;
use Validator;


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
            $adviser['adviser']['lat'] = Adviser::where('user_id',$request->user_id)->value('lat');
            $adviser['adviser']['long'] = Adviser::where('user_id',$request->user_id)->value('long');
            $adviser['adviser']['video'] = Adviser::where('user_id',$request->user_id)->value('video');
//            $adviser['adviser']['categories']=$advisers->categories()->get();
//            $adviser['adviser']['times']=$advisers->times()->get();
            $times = $advisers->times()->orderBy('date', 'ASC')->get();
            $count=$advisers->times()->count();
            $tt = array();
//            $adviser['adviser']['ttt']=array();
            $testi=array();
            for ($i=0;$i<$count;$i++){

                $tt['id']=$times[$i]['id'];
                $tt['date']=$times[$i]['date'];
                $tt['time_from']=$times[$i]['time_from'];
                $tt['time_to']=$times[$i]['time_to'];
                if($i!=0) {
                    if ($times[$i]['date'] === $times[$i - 1]['date']) {
                        $tt['date'] = null;
                    }
                }
                array_push($testi,$tt);

            }
            $adviser['adviser']['times']=$testi;


            $adviser['adviser']['qa_count'] = Question_answer::where('adviser_id', $advisers->id)->count();
            $adviser['adviser']['comment_count'] = Adviser_rate::where('adviser_id', $advisers->id)->where('comment', '!=', null)->count();
            $adviser['adviser']['call_count'] = Call::where('adviser_id', $advisers->id)->where('duration', '!=', null)->count();
            $save_count = Saved_adviser::where('user_id', Auth::user()->id)->where('adviser_id', $advisers_id)->count();
            $adviser['adviser']['is_saved'] = $save_count == 0 ? 0 : 1;

            array_push($a, $adviser);
            return response()->json(['success' => $a], $this->successStatus);
        } else {
            $advisers = Adviser::orderBy('id', 'DESC')->paginate(10);
        }
        $a = array();
        foreach ($advisers as $advise) {
            $adviser['adviser'] = $advise;
            $adviser['adviser']['RN_field'] = str_replace('<br>', '', $advise->field);
            $adviser['adviser']['RN_about'] = str_replace('<br>', '', $advise->about);
            $adviser['adviser']['name'] = User::find($advise->user_id)->name;
            $adviser['adviser']['avatar'] = User::find($advise->user_id)->avatar;
            $adviser['adviser']['lat'] = Adviser::where('user_id',$advise->user_id)->value('lat');
            $adviser['adviser']['long'] = Adviser::where('user_id',$advise->user_id)->value('long');
            $adviser['adviser']['video'] = Adviser::where('user_id',$advise->user_id)->value('video');
            $adviser['adviser']['categories'] = $advise->categories()->get();
            $adviser['adviser']['times'] = $advise->times()->get();
            $adviser['adviser']['qa_count'] = Question_answer::where('adviser_id', $advise->id)->count();
            $adviser['adviser']['comment_count'] = Adviser_rate::where('adviser_id', $advise->id)->where('comment', '!=', null)->count();
            $adviser['adviser']['call_count'] = Call::where('adviser_id', $advise->id)->where('duration', '!=', null)->count();
            $save_count = Saved_adviser::where('user_id', Auth::user()->id)->where('adviser_id', $advise->id)->count();
            $adviser['adviser']['is_saved'] = $save_count == 0 ? 0 : 1;

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

}

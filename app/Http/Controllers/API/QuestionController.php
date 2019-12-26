<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_to_category;
use App\Event;
use App\Http\Controllers\Controller;
use App\Like_question;
use App\Notification;
use App\Question;
use App\Question_answer;
use App\User;
use App\View_question;
use Carbon\Carbon;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class QuestionController extends Controller
{
    public $successStatus = 200;

    public function add_question(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'adviser_category_id' => 'integer|required',
            'subject' => 'required',
            'text' => 'required',
            'is_private' => 'required|boolean'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        if ($user->is_adviser == 1) {
            return response()->json(['error' => 'Unauthorized'], 401);

        }
        $question = new Question();
        $question->user_id = $user->id;
        $question->question_category_id = $request->adviser_category_id;
        $question->subject = $request->subject;
        $question->text = $request->text;
        $question->is_private = $request->is_private;
        $question->add_date = Verta();
        $question->save();


        //send notification to related advisers
        $advisers = Adviser::all();
        foreach ($advisers as $adviser) {
            $has_cat = Adviser_to_category::where('adviser_id', $adviser->id)->where('adviser_category_id', $request->adviser_category_id)->count();
            if ($has_cat != 0) {
                $has_notif = Notification::where('user_id', $adviser->user_id)->where('type', 2)->where('read_at', null)->count();
                if ($has_notif == 0) {
                    $notification = new Notification();
                    $notification->user_id = $adviser->user_id;
                    $notification->is_adviser = 1;
                    $notification->data = 'یک پرسش جدید در زمینه کاری شما ثبت شده است';
                    $notification->type = 2;
                    $notification->save();
                }
            }
        }
        $question = Question::find($question->id);
        return response()->json(['success' => $question], $this->successStatus);
    }

    public function show_questions(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'show_all' => 'boolean',
            'self' => 'boolean',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $user = Auth::user();
        if (isset($request->show_all) && $request->show_all == 1 && !isset($request->self)) {
            $questions = Question::orderBy('id', 'DESC')->paginate(10);
            $questions_array = array();
            foreach ($questions as $question) {
                $save['question'] = $question;
                $save['question']['user_info'] = User::select('id', 'username', 'avatar')->find($question->user_id);
                if ($question->is_private==1) {
                    $save['question']['user_info']['username'] = 'ناشناس';
                    $save['question']['user_info']['avatar'] =  "/themes/custom-5176/userfiles/fdacd9.jpg";

                }
                $save['question']['user_info']['now'] = Carbon::now()->format('Y-m-d H:i:s');

                array_push($questions_array, $save);
            }

        } else if (isset($request->self) && $request->self == 1) {
            if ($user->is_adviser == 1) {
                $qcount=0;
                $adviser_id = Adviser::where('user_id', $user->id)->value('id');
                $adviser_categories = Adviser_to_category::where('adviser_id', $adviser_id)->get();
                $questions_array = array();
                foreach ($adviser_categories as $adviser_category) {
                    $questionsArray = Question::where('question_category_id', $adviser_category->adviser_category_id)->orderBy('id', 'DESC')->get();
                    foreach ($questionsArray as $questionArray) {
                        $q = $questionArray;
                        $q['now'] = Carbon::now()->format('Y-m-d H:i:s');
                        $qcount++;
                        array_push($questions_array, $q);
                    }
                }
//                $questions_array=array();
//                foreach ($questions as $question){
//                    $save['question']=$question;
//                    $save['question']['user_info']=User::select('id','name','avatar')->find($question->user_id);
//                    array_push($questions_array,$save);
//                }
            } else {
                $questions = Question::where('user_id', $user->id)->orderBy('id', 'DESC')->paginate(10);
                $questions_array = array();
                foreach ($questions as $question) {
                    $save['question'] = $question;
                    $save['question']['user_info'] = User::select('id', 'username', 'avatar')->find($question->user_id);
                    $save['question']['user_info']['now'] = Carbon::now()->format('Y-m-d H:i:s');
                    array_push($questions_array, $save);
                }
            }

        } else {
            $questions = Question::where('status', 1)->orderBy('id', 'DESC')->paginate(10);
            $questions_array = array();
            foreach ($questions as $question) {
                $save['question'] = $question;
                $save['question']['user_info'] = User::select('id', 'username', 'avatar')->find($question->user_id);
                if ($question->is_private==1) {
                    $save['question']['user_info']['username'] = 'ناشناس';
                    $save['question']['user_info']['avatar'] =  "/themes/custom-5176/userfiles/fdacd9.jpg";

                }
                $save['question']['user_info']['now'] = Carbon::now()->format('Y-m-d H:i:s');

                array_push($questions_array, $save);
            }
        }
//        $questions_array['now'] = Carbon::now()->format('Y-m-d H:i:s');

    if ($user->is_adviser == 1 && isset($request->self)){
        $paginate['total'] = $qcount;
        $paginate['per_page'] = $qcount;
        $paginate['current_page'] = 1;
        $paginate['last_page'] = 1;
        $paginate['has_more_pages'] = false;
        $paginate['next_page_url'] = null;
        $paginate['previous_page_url'] = null;
        }else {
        $paginate['total'] = $questions->total();
        $paginate['per_page'] = $questions->perPage();
        $paginate['current_page'] = $questions->currentPage();
        $paginate['last_page'] = $questions->lastPage();
        $paginate['has_more_pages'] = $questions->hasMorePages();
        $paginate['next_page_url'] = $questions->nextPageUrl();
        $paginate['previous_page_url'] = $questions->previousPageUrl();
    }
        return response()->json(['success' => $questions_array,'pagination'=>$paginate], $this->successStatus);

    }

    public function accept_question(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'question_id' => 'required',
            'accept' => 'required|boolean'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        if ($user->is_adviser == 0) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        @$question = Question::find($request->question_id);
        if (!isset($question)) return response()->json(['error' => 'not found'], 404);
        $question->status = $request->accept;
        $question->save();


        return response()->json(['success' => $question], $this->successStatus);


    }

    public function like_question(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'question_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        @$question = Question::find($request->question_id);
        if (!isset($question)) return response()->json(['error' => 'not found'], 404);
        $user = Auth::user();
        $like = Like_question::where('question_id', $request->question_id)->where('user_id', $user->id)->count();
        if ($like != 0) {
            $like_id = Like_question::where('question_id', $request->question_id)->where('user_id', $user->id)->value('id');
            Like_question::find($like_id)->delete();
            $question_l = Question::find($request->question_id);
            $question_l->likes = $question_l->likes - 1;
            $question_l->save();
            $success = 'disliked';
        } else {
            $like = new Like_question();
            $like->user_id = $user->id;
            $like->question_id = $request->question_id;
            $like->save();

            $question_l = Question::find($request->question_id);
            $question_l->likes = $question_l->likes + 1;
            $question_l->save();

            $success = 'liked';
        }
        return response()->json(['success' => $success], $this->successStatus);

    }

    public function view_question(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'question_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        @$question = Question::find($request->question_id);
        if (!isset($question)) return response()->json(['error' => 'not found'], 404);
        $user = Auth::user();
        $success = 'already viewed';

        $view = View_question::where('question_id', $request->question_id)->where('user_id', $user->id)->count();
        if ($view == 0) {
            $view = new View_question();
            $view->user_id = $user->id;
            $view->question_id = $request->question_id;
            $view->save();

            $question_l = Question::find($request->question_id);
            $question_l->views = $question_l->views + 1;
            $question_l->save();

            $success = 'viewd';
        }
        return response()->json(['success' => $success], $this->successStatus);
    }

    public function answer_question(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'question_id' => 'required',
            'answer' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        @$question = Question::find($request->question_id);
        if (!isset($question)) return response()->json(['error' => 'not found'], 404);
        $user = Auth::user();
        $user = User::find($user->id);
        if ($user->is_adviser != 1) return response()->json(['error' => 'unauthorized'], 401);
        $adviser_id = Adviser::where('user_id', $user->id)->value('id');
        $answer = new Question_answer();
        $answer->adviser_id = $adviser_id;
        $answer->question_id = $request->question_id;
        $answer->text = $request->answer;
        $answer->save();

        $question_category = Question::find($request->question_id)->question_category_id;
        $event = new Event();
        $event->type = 1;
        $event->adviser_id = $adviser_id;
        $event->user_id = $question->user_id;
        $event->category_id = $question_category;
        $event->save();


        $answer = Question_answer::find($answer->id);
        return response()->json(['success' => $answer], $this->successStatus);
    }

    public function show_question(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'question_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $user=Auth::user();

        @$question = Question::find($request->question_id);
        if (!isset($question)) return response()->json(['error' => 'not found'], 404);
        if ($question->status == 0 && $user->is_adviser==0) return response()->json(['error' => 'unauthorized'], 401);
        if ($question->is_private == 1) {
            $question = Question::select('id', 'question_category_id', 'subject', 'text', 'is_private', 'status', 'views', 'likes', 'created_at', 'updated_at')->find($request->question_id);
            $question['answers_count']= Question::find($request->question_id)->answers()->count();
            $question['question_category']= Adviser_category::find($question->question_category_id)->name;

            $question_a = Question::find($request->question_id)->answers()->get();
            $qqq=array();
            foreach ($question_a as $answers){
                $qq=array();
                $qq['id']=$answers->id;
                $qq['question_id']=$answers->question_id;
                $qq['adviser_id']=$answers->adviser_id;
                $adviser_user_id=Adviser::find($answers->adviser_id)->value('user_id');
                $adviser_user=User::find($adviser_user_id);
                $qq['adviser_name']=$adviser_user->name;
                $qq['adviser_avatar']=$adviser_user->avatar;
                $qq['text']=$answers->text;
                $qq['created_at']=$answers->created_at->format('Y-m-d H:i:s');
                $qq['updated_at']=$answers->updated_at->format('Y-m-d H:i:s');
                array_push( $qqq,$qq);
            }
            $question['answers'] = $qqq;

        } else {
            $question = Question::find($request->question_id);
            $question['name']=User::find($question->user_id)->name==null?User::find($question->user_id)->username:User::find($question->user_id)->name;
            $question['avatar']=User::find($question->user_id)->avatar;
            $question_a = Question::find($request->question_id)->answers()->get();
            $qqq=array();
            foreach ($question_a as $answers){
                $qq=array();
                $qq['id']=$answers->id;
                $qq['question_id']=$answers->question_id;
                $qq['adviser_id']=$answers->adviser_id;
                $adviser_user_id=Adviser::find($answers->adviser_id)->value('user_id');
                $adviser_user=User::find($adviser_user_id);
                $qq['adviser_name']=$adviser_user->name;
                $qq['adviser_avatar']=$adviser_user->avatar;
                $qq['text']=$answers->text;
                $qq['created_at']=$answers->created_at->format('Y-m-d H:i:s');
                $qq['updated_at']=$answers->updated_at->format('Y-m-d H:i:s');
                array_push( $qqq,$qq);
            }
            $question['answers'] = $qqq;
        }
        $liked=Like_question::where('user_id',$user->id)->where('question_id',$request->question_id)->count();

        $liked==0?$question['is_liked']=0:$question['is_liked']=1;

        return response()->json(['success' => $question], $this->successStatus);


    }

}

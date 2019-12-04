<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Conversation_Message;
use App\Http\Controllers\Controller;
use App\Message;
use App\Notification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Conversation;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use PhpParser\Builder;
use Validator;

class ConversationController extends Controller
{
    public $successStatus = 200;

    /**
     * request conversation api
     *
     * @return \Illuminate\Http\Response
     */
    public function request_conversation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }


        $adviser = User::find($request->user_id);
        if ($adviser == null) {
            $error['reason'] = 'user not found';
            return response()->json(['error' => $error], 401);
        }
        $user = Auth::user();
        if ($adviser->is_adviser == $user->is_adviser) {
            $error['reason'] = 'both users are advisers or users!';
            return response()->json(['error' => $error], 401);
        }

        if ($adviser->is_adviser == 1) {
            $conversation = Conversation::where('user_id', $user->id)->where('adviser_id', $request->user_id);
            if ($conversation->count() == 0) {
                $conversation = new Conversation();
                $conversation->adviser_id = $request->user_id;
                $conversation->user_id = $user->id;
                $conversation->status = 0;
                $conversation->has_unread = 1;
                $conversation->save();
            } else {
                $conversation_id = $conversation->value('id');
                if ($conversation->value('status') == 2) {
                    $conversation = Conversation::find($conversation_id);
                    $conversation->status = 0;
                    $conversation->has_unread = 1;
                    $conversation->save();
                } else {
                    $success['message'] = 'message already requested';
                    $conversation = Conversation::find($conversation_id);
//                    $success['conversation'] = $conversation;
                    return response()->json(['success' => $success], $this->successStatus);
                }
            }


            $notification = new Notification();
            $notification->user_id = $request->user_id;
            $notification->is_adviser = 1;
            $notification->data = 'پیام جدید از طرف ' . $user->name;
            $notification->sender_user_id = $user->id;
            $notification->type = 1;
            $notification->save();

            $success['message'] = 'message requested';
//            $success['conversation'] = $conversation;

        } else {
            $conversation = Conversation::where('adviser_id', $user->id)->where('user_id', $request->user_id);
            if ($conversation->count() == 0) {
                $conversation = new Conversation();
                $conversation->adviser_id = $user->id;
                $conversation->user_id = $request->user_id;
                $conversation->status = 0;
                $conversation->has_unread = 1;
                $conversation->save();
            } else {
                $conversation_id = $conversation->value('id');
                if ($conversation->value('status') == 2) {
                    $conversation = Conversation::find($conversation_id);
                    $conversation->status = 0;
                    $conversation->has_unread = 1;
                    $conversation->save();
                } else {
                    $success['message'] = 'message already requested';
                    $conversation = Conversation::find($conversation_id);
//                    $success['conversation'] = $conversation;

                    return response()->json(['success' => $success], $this->successStatus);
                }
            }


            $notification = new Notification();
            $notification->user_id = $request->user_id;
            $notification->is_adviser = 0;
            $notification->data = 'پیام جدید از طرف ' . $user->name;
            $notification->sender_user_id = $user->id;
            $notification->type = 1;
            $notification->save();

            $success['message'] = 'message requested';
//            $success['conversation'] = $conversation;
        }


        return response()->json(['success' => $success], $this->successStatus);

    }

    public function fetch_conversations()
    {
        $user = Auth::user();
        if ($user->is_adviser == 0) {
            $conversations = Conversation::where('user_id', $user->id)->orderBy('id', 'DESC')->get();
            $conver = array();
            foreach ($conversations as $conversation) {
                $con['id'] = $conversation->id;
                $con['adviser_id'] = $conversation->adviser_id;
                $con['adviser_name'] = User::find($conversation->adviser_id)->name;
                $con['adviser_avatar'] = User::find($conversation->adviser_id)->avatar;
                $con['user_id'] = $conversation->user_id;
                $con['status'] = $conversation->status;
                $con['last_message_id'] = $conversation->last_message_id;
                $con['last_message_text'] = $conversation->last_message_text;
                $conversation->unread_user_id==Auth::user()->id?$con['has_unread'] = $conversation->has_unread : $con['has_unread']=0;
                $con['created_at'] = $conversation->created_at->format('Y-m-d H:i:s');
                $con['updated_at'] = $conversation->updated_at->format('Y-m-d H:i:s');
                $con['now'] = Carbon::now()->format('Y-m-d H:i:s');

                array_push($conver, $con);
            }
        } else {
            $conversations = Conversation::where('adviser_id', $user->id)->orderBy('id', 'DESC')->get();
            $conver = array();
            foreach ($conversations as $conversation) {
                $con['id'] = $conversation->id;
                $con['adviser_id'] = $conversation->adviser_id;
                $con['user_id'] = $conversation->user_id;
                $con['user_name'] = User::find($conversation->user_id)->name;
                $con['user_avatar'] = User::find($conversation->user_id)->avatar;
                $con['status'] = $conversation->status;
                $con['last_message_id'] = $conversation->last_message_id;
                $con['last_message_text'] = $conversation->last_message_text;
                $conversation->unread_user_id==Auth::user()->id?$con['has_unread'] = $conversation->has_unread : $con['has_unread']=0;
                $con['created_at'] = $conversation->created_at->format('Y-m-d H:i:s');
                $con['updated_at'] = $conversation->updated_at->format('Y-m-d H:i:s');
                $con['now'] = Carbon::now()->format('Y-m-d H:i:s');
                array_push($conver, $con);
            }
        }
        return response()->json(['success' => $conver], $this->successStatus);
    }

    public function fetch_messages(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'conversation_id' => 'required',
//            'last_message_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        $conversation = Conversation::find($request->conversation_id);

        if ($conversation->user_id == $user->id) {
            $sender_user_id = $conversation->adviser_id;
        } else if ($conversation->adviser_id == $user->id) {
            $sender_user_id = $conversation->user_id;
        } else {
            $error['reason'] = 'Unauthorized';
            return response()->json(['error' => $error], 401);
        }
        if ($conversation == null) {
            $error['reason'] = 'conversation not found';
            return response()->json(['error' => $error], 404);
        }
        if ($conversation->user_id != $user->id && $conversation->adviser_id != $user->id) {
            $error['reason'] = 'Unauthorized';
            return response()->json(['error' => $error], 401);
        }

        !isset($request->last_message_id) ? $last_message_id = 1 : $last_message_id = $request->last_message_id;

        $messages = $conversation->messages()->get();
        foreach ($messages as $message) {
            $read = Message::find($message->id);
            if ($read->status == 0 && $conversation->unread_user_id==Auth::user()->id) {
                $read->status = 1;
                $read->save();
            }
        }

        $notifications = Notification::where('type', 1)->where('read_at', null)->where('user_id', $user->id)->where('sender_user_id', $sender_user_id)->get();
        foreach ($notifications as $notification) {
            $a = Notification::find($notification->id);
            $a->read_at = Carbon::now();
            $a->save();
        }
        if ($conversation->unread_user_id==Auth::user()->id) {
            $conversation->has_unread = 0;
            $conversation->save();
        }


//        $conversation=Conversation::select('id','text','status','updated_at')->find($request->conversation_id);

        $messages = $conversation->messages()->paginate(10)->where('id', '>=', $request->last_message_id);
        $mess = array();
        foreach ($messages as $m) {
            $me['id'] = $m->id;
            $me['text'] = $m->text;
            $me['status'] = $m->status;
            $me['user_id'] = $m->user_id;

            if (User::find($m->user_id)->name == null)
                $me['user_name'] = User::find($m->user_id)->username;
            else
                $me['user_name'] = User::find($m->user_id)->name;

            $me['user_avatar'] = User::find($m->user_id)->avatar;
            $me['parent_message_id'] = $m->parent_message_id;
            $me['updated_at'] = $m->updated_at->format('Y-m-d H:i:s');
            array_push($mess, $me);
        }


        return response()->json(['success' => $mess], $this->successStatus);
    }

    public function send_message(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required',
            'conversation_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user_id = Auth::user()->id;
        $user = User::find($user_id);

        $message = new Message();
        $message->text = $request->text;
        if ($request->parent_message_id != null) {
            $message->parent_message_id = $request->parent_message_id;
        }
        $message->user_id = $user_id;
        $message->save();

        $message_id = $message->id;
        $conversation_message = new Conversation_Message();
        $conversation_message->message_id = $message_id;
        $conversation_message->conversation_id = $request->conversation_id;
        $conversation_message->save();


        $conversation = Conversation::find($request->conversation_id);
        $conversation->has_unread = 1;
        if ($user->is_adviser == 0) {
            $conversation->unread_user_id = $conversation->adviser_id;
        } else {
            $conversation->unread_user_id = $conversation->user_id;
        }
        $conversation->last_message_id = $message_id;
        $conversation->save();


        if ($user->is_adviser == 0) {
            $notifications = Notification::where('type', 1)->where('read_at', null)->where('user_id', $conversation->adviser_id)->where('sender_user_id', $user->id)->get();
            if ($notifications->count() == 0) {
                $notification = new Notification();
                $notification->user_id = $conversation->adviser_id;
                $notification->is_adviser = 1;
                $notification->data = 'پیام جدید از طرف ' . $user->name;
                $notification->type = 1;
                $notification->sender_user_id = $user->id;
                $notification->save();
            }
        } else {
            $notifications = Notification::where('type', 1)->where('read_at', null)->where('user_id', $conversation->adviser_id)->where('sender_user_id', $user->id)->get();
            if ($notifications->count() == 0) {
                $notification = new Notification();
                $notification->user_id = $conversation->adviser_id;
                $notification->is_adviser = 0;
                $notification->data = 'پیام جدید از طرف ' . $user->name;
                $notification->type = 1;
                $notification->sender_user_id = $user->id;
                $notification->save();
            }
        }


        // $message=$conversation->messages()->get()->where('id',$message_id);
        return response()->json(['success' => 'success'], $this->successStatus);
    }

    public function fetch_message_by_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        try {
            $message = Message::find($request->message_id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e], 401);

        }

        return response()->json(['success' => $message], $this->successStatus);


    }


}

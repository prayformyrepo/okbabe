<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Notification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class notificationController extends Controller
{
    public $successStatus = 200;

    public function read_notification(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'notification_id' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = Auth::user();
        @$notification = Notification::find($request->notification_id);
        if (!isset($notification) || $notification->user_id != $user->id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $notification->read_at = Carbon::now();
        $notification->save();
        $success['message'] = 'marked as read';
        return response()->json(['success' => $success], $this->successStatus);


    }

    public function get_notifications(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'unread' => 'boolean',
            'notification_id'=>'integer'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $user = Auth::user();
        if (isset($request->notification_id)){
            @$notifications = Notification::find($request->notification_id);
            if (!isset($notifications)){
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }
        if (isset($request->unread) && $request->unread==true ){
            $notifications = Notification::where('user_id', $user->id)->where('read_at', null)->orderBy('id','DESC')->get();
        }else{
            $notifications = Notification::where('user_id', $user->id)->orderBy('id','DESC')->get();
        }
        return response()->json(['success' => $notifications], $this->successStatus);
    }
}

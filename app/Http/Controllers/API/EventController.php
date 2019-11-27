<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_category;
use App\Event;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public $successStatus = 200;

    public function show_events(Request $request)
    {
        if (isset($request->type)) $events=Event::where('type',$request->type)->orderBy('id','DESC')->paginate(10);
        else $events=Event::orderBy('id','DESC')->paginate(10);
        $eventArray=array();
        foreach ($events as $event){
            $ev=$event;
            $user=Adviser::find($event->adviser_id);
            if($event->type==1){
                if ($event->category_id!=null)
                    $ev['category_name']=Adviser_category::find($event->category_id)->name;
            }
            $ev['user_info']=User::select('id','name','avatar')->find($user->user_id);
            $ev['user_info']['about']=Adviser::find($event->adviser_id)->about;
            $ev['user_info']['field']=Adviser::find($event->adviser_id)->field;
            array_push($eventArray,$ev);
        }


        return response()->json(['success' => $eventArray], $this->successStatus);
    }

}

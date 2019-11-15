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

    public function show_events()
    {
        $events=Event::orderBy('id','DESC')->paginate(10);
        $eventArray=array();
        foreach ($events as $event){
            $ev=$event;
            $user=Adviser::find($event->adviser_id);
            $ev['user_info']=User::select('id','name','avatar')->find($user->user_id);
            if($event->type==1){
                $ev['category_name']=Adviser_category::find($event->category_id)->name;
            }
            array_push($eventArray,$ev);
        }


        return response()->json(['success' => $eventArray], $this->successStatus);
    }

}

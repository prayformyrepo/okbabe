<?php

namespace App\Http\Controllers\API;

use App\Event;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public $successStatus = 200;

    public function show_events()
    {
        $events=Event::orderBy('id','DESC')->paginate(10);

        return response()->json(['success' => $events], $this->successStatus);
    }

}

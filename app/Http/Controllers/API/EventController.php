<?php

namespace App\Http\Controllers\API;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_to_category;
use App\Event;
use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public $successStatus = 200;

    public function show_events(Request $request)
    {
        if (isset($request->type)) {
            if (isset($request->category_id)) {
                $evs = Event::where('type', $request->type)->orderBy('id', 'DESC')->paginate(10);
                $events = array();
                foreach ($evs as $ev) {
                    $adviser_categories = Adviser_to_category::where('adviser_id', $ev->adviser_id)->get();
                    $flag = false;
                    foreach ($adviser_categories as $adviser_category) {
                        if ($adviser_category->adviser_category_id == $request->category_id) $flag = true;
                    }
                    if ($flag == true) {
                        array_push($events,$ev);
                    }
                }
            } else {
                $events = Event::where('type', $request->type)->orderBy('id', 'DESC')->paginate(10);
            }
        } else {
            if (isset($request->category_id)) {
                $evs = Event::orderBy('id', 'DESC')->paginate(10);
                $events = array();
                foreach ($evs as $ev) {
                    $adviser_categories = Adviser_to_category::where('adviser_id', $ev->adviser_id)->get();
                    $flag = false;
                    foreach ($adviser_categories as $adviser_category) {
                        if ($adviser_category->adviser_category_id == $request->category_id) $flag = true;
                    }
                    if ($flag == true) {
                        array_push($events,$ev);
                    }
                }

            }else {
                $events = Event::orderBy('id', 'DESC')->paginate(10);
            }
        }

        $eventArray = array();
        foreach ($events as $event) {
            $ev = $event;
            $user = Adviser::find($event->adviser_id);
            if ($event->type == 1) {
                if ($event->category_id != null)
                    $ev['category_name'] = Adviser_category::find($event->category_id)->name;
            }
            $ev['now'] = Carbon::now()->format('Y-m-d H:i:s');

            $ev['user_info'] = User::select('id', 'name', 'avatar')->find($user->user_id);
            $ev['user_info']['about'] = Adviser::find($event->adviser_id)->about;
            $ev['user_info']['field'] = Adviser::find($event->adviser_id)->field;
            $ev['user_info']['is_online'] = Adviser::find($event->adviser_id)->is_online;
            array_push($eventArray, $ev);
        }

        if (!isset($request->category_id)) {
            $paginate['total'] = $events->total();
            $paginate['per_page'] = $events->perPage();
            $paginate['current_page'] = $events->currentPage();
            $paginate['last_page'] = $events->lastPage();
            $paginate['has_more_pages'] = $events->hasMorePages();
            $paginate['next_page_url'] = $events->nextPageUrl();
            $paginate['previous_page_url'] = $events->previousPageUrl();
        }

        return response()->json(['success' => $eventArray, 'pagination' => $paginate], $this->successStatus);
    }

}

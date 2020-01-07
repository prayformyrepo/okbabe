<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Ticket;
use App\Ticket_answer;
use App\Ticket_category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;


class TicketController extends Controller
{
    public $successStatus = 200;
    public function create_ticket(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ticket_category_id' => 'required',
            'text' => 'required',
            'subject'=>'required'
//
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $ticket = \Auth::user()->tickets()->create([
            'ticket_category_id'=>$request->ticket_category_id,
            'subject'=>$request->subject,
            'text'=>$request->text,
        ]);

        return response()->json(['success'=>$ticket],200);
    }

    public function answer_ticket(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required',
            'ticket_id'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $ticketAnswer=Ticket_answer::create([
           'text'=>$request->text,
           'ticket_id'=>$request->ticket_id,
           'admin_id'=>$request->admin_id ? $request->admin_id : null,
           'status'=>$request->admin_id ?  1 : 0
        ]);
        $ticket=Ticket::find($request->ticket_id);
        $ticket->status=$request->admin_id ?  1 : 2;
        $ticket->save();
        return response()->json(['success'=>$ticketAnswer],200);
    }

    public function end_ticket(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ticket_id'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $ticket=Ticket::find($request->ticket_id);
        $ticket->status=3;
        $ticket->save();

        return response()->json(['success'=>$ticket],200);

    }

    public function show_tickets(Request $request)
    {
        if(isset($request->ticket_id)){
            $tickets=Ticket::find($request->ticket_id);
            $tickets['answers']=Ticket::find($request->ticket_id)->answers()->get();

        }
        else
        $tickets=Ticket::where('user_id',Auth::user()->id)->get();

        return response()->json(['success'=>$tickets],200);

    }

    public function ticket_categories()
    {
        $categories=Ticket_category::all();
        return response()->json(['success'=>$categories],200);

    }

   /* public function add_ticket_category(Request $request)
    {

    }*/
}

<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Ticket;
use App\Ticket_answer;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {
        $tickets=Ticket::all();

        return view('admin.tickets.index',compact('tickets'));
    }

    public function destroy($id)
    {
        Ticket::find($id)->delete();
        $answers=Ticket_answer::where('ticket_id',$id)->get();
        foreach ($answers as $answer){
            Ticket_answer::find($answer->id)->delete();
        }
        return back();
    }

    public function show_ticket($id)
    {
        $ticket=Ticket::find($id);
        $ticket_answers=Ticket_answer::where('ticket_id',$id)->orderBy('created_at','ASC')->get();
        return view('admin.tickets.single',compact('ticket','ticket_answers'));
    }

    public function answer_ticket(Request $request,$id)
    {
        $validatedData = $request->validate([
            'text' => 'required',
        ]);

        $text=$request->text;
        $ticket=Ticket::find($id);
        $ticket->status=1;
        $ticket->save();

        $answer=new Ticket_answer();
        $answer->text=$text;
        $answer->status=1;
        $answer->admin_id=1;
        $answer->ticket_id=$id;
        $answer->save();
        return back();

    }
}

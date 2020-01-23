<?php

namespace App\Http\Controllers\Admins;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_time;
use App\Adviser_to_category;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class AdviserController extends Controller
{
    public function index()
    {
        $advisers=User::where('is_adviser',1)->get();

        return view('admin.advisers.index',compact('advisers'));
    }

    public function destroy($id)
    {
        //delete user
        User::find($id)->delete();
        $adviser_id=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$id)->first()->id;

        //delete adviser
        Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$id)->first()->delete();

        return back();
    }

    public function show($id)
    {
        $categories=Adviser_category::all();
        $user=User::find($id);
        $adviser=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$id)->first();
        $adviser_categories=Adviser_to_category::where('adviser_id',$adviser->id)->get();

        return view('admin.advisers.show',compact('categories','user','adviser_categories','adviser'));
    }

}

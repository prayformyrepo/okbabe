<?php

namespace App\Http\Controllers\Admins;

use App\Adviser;
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

        //delete adviser times
        $adviser_times=Adviser_time::where('adviser_id',$adviser_id)->get();
        foreach ($adviser_times as $adviser_time) {
            Adviser_time::find($adviser_time->id)->delete();
        }

        //delete adviser categories
        $adviser_categories=Adviser_to_category::where('adviser_id',$adviser_id)->get();
        foreach ($adviser_categories as $adviser_categorie) {
            Adviser_to_category::find($adviser_categorie->id)->delete();
        }




    }

}

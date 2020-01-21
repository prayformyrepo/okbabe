<?php

namespace App\Http\Controllers\Advisers;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_to_category;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdviserController extends Controller
{
    public function create()
    {
        $categories=Adviser_category::all();
        return view('adviser.add-adviser',compact('categories'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users',
            'mobile' => 'required|unique:users',
            'gender' => 'required',
            'about' => 'required',
            'field' => 'required',
            'call_price' => 'required',
            'visit_price' => 'required',
            'categories' => 'required',
        ]);

        $mobile=$request->mobile;
        if ($mobile[0]==0) $mobile=substr($mobile,1);

        $user=new User();
        $user->name=$request->name;
        $user->username=$request->username;
        $user->mobile=$mobile;
        $user->gender=$request->gender;
        $user->is_adviser=1;
        $user->save();
        if ($request->file('avatar')) {
            $file = $request->file('avatar');
            $filename =  time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/avatars/'), $filename);

            $user=User::find($user->id);
            $user->avatar='/images/avatars/' . $filename;
            $user->save();
        }

        $adviser=new Adviser();
        $adviser->user_id=$user->id;
        $adviser->field=$request->field;
        $adviser->about=$request->about;
        $adviser->call_price=$request->call_price;
        $adviser->nominal_call_price=$request->call_price*1.5;
        $adviser->visit_price=$request->visit_price;
        $adviser->save();

        $categories=$request->categories;
        foreach ($categories as $category){
            $cat=new Adviser_to_category();
            $cat->adviser_id=$adviser->id;
            $cat->adviser_category_id=$category;
            $cat->save();
        }
        $categories=Adviser_category::all();
        $pm='درخواست شما با موفقیت ارسال شد';
        return view('adviser.add-adviser',compact('categories','pm'));
    }
}

<?php

namespace App\Http\Controllers\Admins;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_time;
use App\Adviser_to_category;
use App\Http\Controllers\Controller;
use App\User;
use Response;
use Illuminate\Http\Request;
use Validator;
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

    public function accept_adviser(Request $request)
    {
        $adviser_id=$request->adviser_id;
        $adviser=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->find($adviser_id);
        $adviser->verified=1;
        $adviser->save();
        return redirect('/admin/advisers');
    }

    public function decline_adviser(Request $request)
    {
        $adviser_id=$request->adviser_id;
        $adviser=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->find($adviser_id);
        $adviser->verified=0;
        $adviser->save();
        return redirect('/admin/advisers');
    }

    public function update($id , Request $request)
    {
        $validatedData = array(
            'name' => 'required',
            'username' => 'required|is_not_persian',
            'mobile' => 'required|iran_mobile',
            'gender' => 'required',
            'about' => 'required',
            'field' => 'required',
            'call_price' => 'required',
            'visit_price' => 'required',
            'categories' => 'required',
            'card_number' => 'required|card_number',
            'sheba_number' => 'required|sheba',
            'bank_account_number' => 'required',
        );
        $messages = [
            'name.required' => 'وارد کردن نام الزامی است',
            'username.required' => 'وارد کردن نام کاربری الزامی است',
            'username.is_not_persian' => 'نام کاربری فارسی مجاز نیست',
            'mobile.required' => 'وارد کردن موبایل الزامی است',
            'gender.required' => 'وارد کردن جنسیت الزامی است',
            'about.required' => 'وارد کردن درباره مشاور الزامی است',
            'field.required' => 'وارد کردن زمینه کاری الزامی است',
            'call_price.required' => 'وارد کردن هزینه مشاوره تلفنی الزامی است',
            'visit_price.required' => 'وارد کردن هزینه مشاوره حضوری الزامی است',
            'categories.required' => 'وارد کردن دسته بندی الزامی است',
            'card_number.required' => 'شماره کارت الزامی است',
            'card_number.card_number' => 'شماره کارت صحیح نیست',
            'sheba_number.sheba' => 'شماره شبا صحیح نیست',
            'sheba_number.required' => 'شماره شبا الزامی است',
            'bank_account_number.required' => 'شماره حساب الزامی است',
        ];

        $this->validate($request, $validatedData, $messages);


        $mobile = $request->mobile;
        if ($mobile[0] == 0) $mobile = substr($mobile, 1);

        $adviser_id=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$id)->value('id');

        $categories=Adviser_category::all();
        $user=User::find($id);
        $adviser=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$id)->first();
        $adviser_categories=Adviser_to_category::where('adviser_id',$adviser->id)->get();

        $n_exist=User::where('mobile',$mobile)->count();
        if ($n_exist!=0) {
            $m_user_id = User::where('mobile', $mobile)->value('id');
            $err = 'شماره موبایل تکراری است';
            if ($m_user_id != $id) return view('admin.advisers.show', compact('categories', 'user', 'adviser_categories', 'adviser', 'err'));
        }

        $n_exist=User::where('mobile',$request->username)->count();
        if ($n_exist!=0) {
            $m_user_id = User::where('mobile', $request->usernname)->value('id');
            $err = 'نام کاربری تکراری است';
            if ($m_user_id != $id) return view('admin.advisers.show', compact('categories', 'user', 'adviser_categories', 'adviser', 'err'));
        }

        $user = User::find($id);
        $user->name = $request->name;
        $user->username = $request->username;
        $user->mobile = $mobile;
        $user->gender = $request->gender;
        $user->is_adviser = 1;
        $user->save();


        $adviser = Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->find($adviser_id);
        $adviser->user_id = $user->id;
        $adviser->field = $request->field;
        $adviser->about = $request->about;
        $remain=$request->call_price-250;
        $adviser->call_price = $request->call_price - 250 - ($remain*0.3);
        $adviser->nominal_call_price =$request->call_price;
        $adviser->visit_price = $request->visit_price;
        $adviser->card_number = $request->card_number;
        $adviser->sheba_number = $request->sheba_number;
        $adviser->bank_account_number = $request->bank_account_number;
        $adviser->save();

       $adviser_categories=Adviser_to_category::where('adviser_id',$adviser_id)->get();
       foreach ($adviser_categories as $adviser_category){
           Adviser_to_category::find($adviser_category->id)->delete();
       }

        $categories = $request->categories;
        foreach ($categories as $category) {
            $cat = new Adviser_to_category();
            $cat->adviser_id = $adviser->id;
            $cat->adviser_category_id = $category;
            $cat->save();
        }
        $categories=Adviser_category::all();
        $user=User::find($id);
        $adviser=Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$id)->first();
        $adviser_categories=Adviser_to_category::where('adviser_id',$adviser->id)->get();

        $pm='مشاور با موفقیت ویرایش شد';
        return view('admin.advisers.show',compact('categories','user','adviser_categories','adviser','pm'));



    }

}

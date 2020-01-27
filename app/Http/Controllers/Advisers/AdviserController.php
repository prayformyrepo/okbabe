<?php

namespace App\Http\Controllers\Advisers;

use App\Adviser;
use App\Adviser_category;
use App\Adviser_to_category;
use App\File;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdviserController extends Controller
{
    public function create()
    {
        $categories = Adviser_category::all();
        return view('adviser.add-adviser', compact('categories'));
    }

    public function store(Request $request)
    {
        $validatedData = [
            'name' => 'required',
            'username' => 'required|unique:users|is_not_persian',
            'mobile' => 'required|unique:users|iran_mobile',
            'gender' => 'required',
            'about' => 'required',
            'field' => 'required',
            'call_price' => 'required',
            'visit_price' => 'required',
            'categories' => 'required',
            'rights' => 'required',
            'accept' => 'required',
            'melli' => 'required|mimes:jpeg,jpg,png,zip,pdf|max:5120',
            'avatar' => 'mimes:jpeg,jpg,png|max:5120',
            'shenasname' => 'required|mimes:jpeg,jpg,png,zip,pdf|max:5120',
            'edu' => 'required|mimes:jpeg,jpg,png,zip,pdf|max:5120',
            'faaliat' => 'required|mimes:jpeg,jpg,png,zip,pdf|max:5120',
            'card_number' => 'required|card_number',
            'sheba_number' => 'required|sheba',
            'bank_account_number' => 'required',
        ];
        $messages = [
            'accept.required' => 'پذیرش صحت اطلاعات وارد شده الزامی است',
            'rights.required' => 'پذیرش قوانین و ضوابط شاورنو الزامی است',
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
            'melli.required' => 'آپلود تصویر کارت ملی الزامی است',
            'shenasname.required' => 'آپلود تصویر شناسنامه الزامی است',
            'edu.required' => 'آپلود تصویر مدرک تحصیلی الزامی است',
            'faaliat.required' => 'آپلود تصویر مجوز فعالیت الزامی است',
            'card_number.required' => 'شماره کارت الزامی است',
            'card_number.card_number' => 'شماره کارت صحیح نیست',
            'sheba_number.sheba' => 'شماره شبا صحیح نیست',
            'sheba_number.required' => 'شماره شبا الزامی است',
            'bank_account_number.required' => 'شماره حساب الزامی است',
        ];


        $this->validate($request, $validatedData, $messages);


        $mobile = $request->mobile;
        if ($mobile[0] == 0) $mobile = substr($mobile, 1);

        $user = new User();
        $user->name = $request->name;
        $user->username = $request->username;
        $user->mobile = $mobile;
        $user->gender = $request->gender;
        $user->is_adviser = 1;
        $user->save();
        if ($request->file('avatar')) {
            $file = $request->file('avatar');
            $filename = $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/avatars/'), $filename);

            $user = User::find($user->id);
            $user->avatar = '/images/avatars/' . $filename;
            $user->save();
        }


        // cart melli
        $file = $request->file('melli');
        $filename = $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('files/advisers/' . $user->id . '/national_card/'), $filename);

        $national_card_file = File::create([
            'file_path' => '/files/advisers/' . $user->id . '/national_card/' . $filename,
            'orginal_name' => $file->getClientOriginalName(),
            'file_type' => $file->getClientMimeType(),
            'slug' => $user->id . '_' . time()
        ]);
//        $adviser_add=Adviser::find($adviser_id);
//        $adviser_add->national_card_file_id=$file->id;
//        $adviser_add->save();

        // shenasname
        $file = $request->file('shenasname');
        $filename = $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('files/advisers/' . $user->id . '/birth_certificate/'), $filename);

        $birth_certificate_file = File::create([
            'file_path' => '/files/advisers/' . $user->id . '/birth_certificate/' . $filename,
            'orginal_name' => $file->getClientOriginalName(),
            'file_type' => $file->getClientMimeType(),
            'slug' => $user->id . '_' . time()
        ]);
//        $adviser_add=Adviser::find($adviser_id);
//        $adviser_add->birth_certificate_file_id=$file->id;
//        $adviser_add->save();


        // madrak tahsili
        $file = $request->file('edu');
        $filename = $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('files/advisers/' . $user->id . '/education_certificate/'), $filename);

        $education_certificate_file = File::create([
            'file_path' => '/files/advisers/' . $user->id . '/education_certificate/' . $filename,
            'orginal_name' => $file->getClientOriginalName(),
            'file_type' => $file->getClientMimeType(),
            'slug' => $user->id . '_' . time()
        ]);
//        $adviser_add=Adviser::find($adviser_id);
//        $adviser_add->education_certificate_file_id=$file->id;
//        $adviser_add->save();


        // mojavez faaliat
        $file = $request->file('faaliat');
        $filename = $user->id . '_' . time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('files/advisers/' . $user->id . '/work_certificate/'), $filename);

        $work_certificate_file = File::create([
            'file_path' => '/files/advisers/' . $user->id . '/work_certificate/' . $filename,
            'orginal_name' => $file->getClientOriginalName(),
            'file_type' => $file->getClientMimeType(),
            'slug' => $user->id . '_' . time()
        ]);
//        $adviser_add=Adviser::find($adviser_id);
//        $adviser_add->work_certificate_file_id=$file->id;
//        $adviser_add->save();


        $adviser = new Adviser();
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
        $adviser->work_certificate_file_id = $work_certificate_file->id;
        $adviser->education_certificate_file_id = $education_certificate_file->id;
        $adviser->birth_certificate_file_id = $birth_certificate_file->id;
        $adviser->national_card_file_id = $national_card_file->id;
        $adviser->save();


        $categories = $request->categories;
        foreach ($categories as $category) {
            $cat = new Adviser_to_category();
            $cat->adviser_id = $adviser->id;
            $cat->adviser_category_id = $category;
            $cat->save();
        }


        $adviser_id = $adviser->id;


        $categories = Adviser_category::all();
        $pm = 'درخواست شما با موفقیت ارسال شد';
        return view('adviser.add-adviser', compact('categories', 'pm'));
    }
}

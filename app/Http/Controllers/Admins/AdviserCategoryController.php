<?php

namespace App\Http\Controllers\Admins;

use App\Adviser_category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdviserCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories=Adviser_category::all();
        return view('admin.advisers.categories.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories=Adviser_category::where('parent_category_id',null)->get();
        return view('admin.advisers.categories.create',compact('categories'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = [
            'name' => 'required|unique:adviser_categories',
            'slug' => 'required|unique:adviser_categories',
        ];
        $messages = [
            'name.required' => 'وارد کردن نام دسته بندی الزامی است',
            'slug.required' => 'وارد کردن اسلاگ دسته بندی الزامی است',
            'slug.unique' => ' اسلاگ دسته بندی تکراری است',
            'name.unique' => ' نام دسته بندی تکراری است',

        ];

        $this->validate($request, $validatedData, $messages);

        $category=new Adviser_category();
        $category->name=$request->name;
        $category->slug=$request->slug;
        $category->description=$request->description?$request->description:null;
        $category->parent_category_id=$request->parent_category_id?$request->parent_category_id:null;
        $category->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

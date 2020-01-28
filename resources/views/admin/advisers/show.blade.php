<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <link href="/css/select2.min.css" rel="stylesheet"/>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title> شاورنو - اطلاعات مشاور </title>

</head>

<body>

<!-- Begin page -->
<div id="wrapper">
@include('includes.panel.topBar')
@include('includes.panel.leftSideBar')



<!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">

                <div class="row">

                    <div class="col-12">
                        <div class="card-box">

                            <div class="dropdown float-right">
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <!-- item-->
                                    <a href="{{route('admin.adviser.index')}}" class="dropdown-item">لیست
                                        مشاور ها</a>

                                </div>
                            </div>
                            <form action="{{route('admin.adviser.update',[$user->id])}}" method="post"
                                  class="main_form" enctype="multipart/form-data">
                                @csrf
                                {{ method_field('PUT') }}
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">نام
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="name" name="name"
                                                       class="form-control"
                                                       placeholder="نام مشاور" value="{{$user->name}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">نام کاربری
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="username" name="username"
                                                       class="form-control" placeholder="نام کاربری مشاور"
                                                       value="{{$user->username}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">شماره موبایل
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="mobile" name="mobile"
                                                       class="form-control"
                                                       placeholder="شماره موبایل مشاور" value="{{$user->mobile}}">
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">جنسیت
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                {{--<input type="text" id="mobile" name="mobile" class="form-control" placeholder="شماره تماس مشاور" value="{{old('mobile')}}">--}}

                                                <select name="gender" id="gender" class="form-control">
                                                    <option value="0" @if($user->gender==0) selected @endif>مرد
                                                    </option>
                                                    <option value="1" @if($user->gender==1) selected @endif>زن
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                <img src="{{Request::root().$user->avatar}}" height="100px"
                                                     alt="تصویر مشاور">
                                                <input type="file" class="form-control" name="avatar" id="avatar">

                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر کارت
                                                ملی
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                @if(\App\File::find($adviser->national_card_file_id))

                                                    <a href="{{Request::root().\App\File::find($adviser->national_card_file_id)->file_path}}"
                                                       download>دانلود</a>
                                                @else
                                                    <p>ندارد</p>

                                                @endif
                                                    <input type="file" class="form-control" name="melli" id="melli">


                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر
                                                شناسنامه
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                @if(\App\File::find($adviser->birth_certificate_file_id))

                                                    <a href="{{Request::root().\App\File::find($adviser->birth_certificate_file_id)->file_path}}"
                                                       download>دانلود</a>
                                                @else
                                                    <p>ندارد</p>
                                                @endif

                                                    <input type="file" class="form-control" name="shenasname" id="shenasname">


                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput"> نصویر مدرک
                                                تحصیلی
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                @if(\App\File::find($adviser->education_certificate_file_id))

                                                    <a href="{{Request::root().\App\File::find($adviser->education_certificate_file_id)->file_path}}"
                                                       download>دانلود</a>
                                                @else
                                                    <p>ندارد</p>
                                                @endif
                                                    <input type="file" class="form-control" name="edu" id="edu">


                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput"> مجوز فعالیت
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                @if(\App\File::find($adviser->work_certificate_file_id))
                                                    <a href="{{Request::root().\App\File::find($adviser->work_certificate_file_id)->file_path}}"
                                                       download>دانلود</a>
                                                @else
                                                    <p>ندارد</p>
                                                @endif

                                                    <input type="file" class="form-control" name="faaliat" id="faaliat">

                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="example-textarea">درباره
                                                مشاور</label>
                                            <div class="col-sm-10">
                                                            <textarea class="form-control" rows="5" id="about"
                                                                      name="about">

                                                                {{$adviser->about}}

                                                            </textarea>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="example-textarea">زمینه
                                                کاری مشاور</label>
                                            <div class="col-sm-10">
                                                            <textarea class="form-control" rows="5" id="field"
                                                                      name="field">

                                                                {{$adviser->field}}

                                                            </textarea>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">هزینه تماس
                                                مشاور به تومان</label>
                                            <div class="col-sm-10">
                                                <input type="number" id="call_price" name="call_price"
                                                       class="form-control" placeholder="هزینه تماس مشاور"
                                                       value="{{$adviser->nominal_call_price}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">هزینه رزرو
                                                حضوری مشاور به تومان</label>
                                            <div class="col-sm-10">
                                                <input type="number" id="visit_price" name="visit_price"
                                                       class="form-control" placeholder="هزینه رزرو حضوری مشاور"
                                                       value="{{$adviser->visit_price}}">
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">دسته بندی
                                                ها</label>
                                            <div class="col-sm-10">

                                                <select class="js-example-basic-multiple"
                                                        name="categories[]"
                                                        multiple="multiple">
                                                    @foreach($categories as $category)
                                                        <option
                                                                @foreach($adviser_categories as $adviser_category)
                                                                @if($adviser_category->adviser_category_id==$category->id)
                                                                selected
                                                                @endif
                                                                @endforeach
                                                                value="{{$category->id}}">{{$category->name}}</option>

                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">شماره کارت</label>
                                            <div class="col-sm-10">
                                                <input style="direction: ltr!important;" type="text" id="card_number" name="card_number"
                                                       class="form-control" placeholder="شماره کارت"
                                                       value="{{$adviser->card_number}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">شماره شبا</label>
                                            <div class="col-sm-10">
                                                <input style="direction: ltr!important;" type="text" id="sheba_number" name="sheba_number"
                                                       class="form-control" placeholder="شماره شبا"
                                                       value="{{$adviser->sheba_number}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">شماره حساب</label>
                                            <div class="col-sm-10">
                                                <input style="direction: ltr!important;" type="text" id="bank_account_number" name="bank_account_number"
                                                       class="form-control" placeholder="شماره حساب"
                                                       value="{{$adviser->bank_account_number}}">
                                            </div>
                                        </div>

                                        <div class="form-group mb-0 justify-content-end row">
                                            <div class="col-sm-12">
                                                <button type="submit"
                                                        class="save_form btn btn-primary waves-effect waves-light"
                                                        style="float: left;margin: 0 10px"> ویرایش مشاور
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>


                            <div class="form-group mb-0 justify-content-end row" style="margin-top: 10px">
                                <div class="col-sm-12">
                                    <form action="{{route('admin.adviser.accept')}}" method="post">
                                        @csrf
                                        <input type="number" value="{{$adviser->id}}" name="adviser_id"
                                               hidden id="adviser_id">
                                        <button type="submit"
                                                class="btn btn-success waves-effect waves-light"
                                                style="float: left;margin: 0 10px"> تایید مشاور
                                        </button>
                                    </form>


                                    <form action="{{route('admin.adviser.decline')}}" method="post">
                                        @csrf
                                        <input type="number" name="adviser_id" value="{{$adviser->id}}"
                                               hidden id="adviser_id">
                                        <button type="submit"
                                                class="btn btn-danger waves-effect waves-light"
                                                style="float: left;margin: 0 10px"> رد مشاور
                                        </button>
                                    </form>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <!-- end row -->

            </div> <!-- end card-box -->
        </div><!-- end col -->
    </div>
    <!-- end row -->


</div> <!-- container-fluid -->

</div> <!-- content -->

@include('includes.panel.footer')


<!-- ============================================================== -->
<!-- End Page content -->
<!-- ============================================================== -->


</div>
<!-- END wrapper -->

{{--@include('includes.panel.rightSideBar')--}}


@include('includes.panel.footerLinks')
<script>
    CKEDITOR.replace('about');
    CKEDITOR.replace('field');
</script>
<script src="/js/select2.min.js"></script>

<script>
    $(document).ready(function () {
        $('.js-example-basic-multiple').select2();
    });

</script>

@if(isset($pm))
    <script src="/js/swal.js"></script>

    <script>
        $(document).ready(function () {

            Swal.fire(
                'تایید',
                '{{$pm}}',
                'success'
            )
        });

    </script>
@endif


@if ($errors->any())
    <script src="/js/swal.js"></script>

    <script>

        $(document).ready(function () {
            swal.fire({
                position: 'center',
                icon: 'error',
                title: 'خطا',
                html:        "            @foreach ($errors->all() as $error)\n" +
                "                {{ $error }}<br>" +
                "            @endforeach\n" ,
                showConfirmButton: true
            });
        });
    </script>

@endif

@if (isset($err))
    <script src="/js/swal.js"></script>

    <script>

        $(document).ready(function () {
            swal.fire({
                position: 'center',
                icon: 'error',
                title: 'خطا',
                html:  "{{$err}}" ,
                showConfirmButton: true
            });
        });
    </script>

@endif


<script src="/js/input_mask.js"></script>
<script>
    $("#card_number").inputmask({"mask": "9999999999999999","placeholder": "________________"});
    $("#sheba_number").inputmask({"mask": "IR999999999999999999999999","placeholder": "IR________________________"});
    $("#bank_account_number").inputmask({"mask": "999999999999999999999","placeholder": ""});
    $("#mobile").inputmask({"mask": "09999999999","placeholder": "___________"});
</script>

</body>

</html>
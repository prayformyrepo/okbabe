<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <link href="/css/select2.min.css" rel="stylesheet" />

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

                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach($errors->all() as $err)
                                    <li>{{$err}}</li>

                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <div class="col-12">
                        <div class="card-box">

                            {{--<div class="dropdown float-right">--}}
                            {{--<a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"--}}
                            {{--aria-expanded="false">--}}
                            {{--<i class="mdi mdi-dots-vertical"></i>--}}
                            {{--</a>--}}
                            {{--<div class="dropdown-menu dropdown-menu-right">--}}
                            {{--<!-- item-->--}}
                            {{--<a href="{{route('admin.test.show-select-test-page')}}" class="dropdown-item">لیست تست ها</a>--}}

                            {{--</div>--}}
                            {{--</div>--}}

                            <div class="row">
                                <div class="col-12">
                                    <div class="p-2">
                                        <form class="form-horizontal" role="form" method="post"
                                              enctype="multipart/form-data" action="{{route('store-adviser')}}">
                                            @csrf
                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">نام
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="text" id="name" name="name" class="form-control"
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
                                                    <input type="number" id="mobile" name="mobile" class="form-control"
                                                           placeholder="شماره موبایل مشاور" value="{{$user->mobile}}">
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">جنسیت
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    {{--<input type="text" id="mobile" name="mobile" class="form-control" placeholder="شماره تماس مشاور" value="{{old('mobile')}}">--}}

                                                    <select name="gender" id="gender" class="form-control">
                                                        <option value="0" @if($user->gender==0) selected @endif>مرد</option>
                                                        <option value="1">زن</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="avatar" id="avatar">

                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر کارت ملی
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="melli" id="melli">

                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر شناسنامه
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="shenasname" id="shenasname">

                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> نصویر مدرک تحصیلی
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="edu" id="edu">

                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> مجوز فعالیت
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="faaliat" id="faaliat">

                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="example-textarea">درباره
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                            <textarea class="form-control" rows="5" id="about"
                                                                      name="about">

                                                                {{old('about')}}

                                                            </textarea>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="example-textarea">زمینه
                                                    کاری مشاور</label>
                                                <div class="col-sm-10">
                                                            <textarea class="form-control" rows="5" id="field"
                                                                      name="field">

                                                                {{old('field')}}

                                                            </textarea>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">هزینه تماس
                                                    مشاور به تومان</label>
                                                <div class="col-sm-10">
                                                    <input type="number" id="call_price" name="call_price"
                                                           class="form-control" placeholder="هزینه تماس مشاور"
                                                           value="{{old('call_price')}}">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">هزینه رزرو
                                                    حضوری مشاور به تومان</label>
                                                <div class="col-sm-10">
                                                    <input type="number" id="visit_price" name="visit_price"
                                                           class="form-control" placeholder="هزینه رزرو حضوری مشاور"
                                                           value="{{old('visit_price')}}">
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">دسته بندی
                                                    ها</label>
                                                <div class="col-sm-10">

                                                    <select class="js-example-basic-multiple" name="categories[]"
                                                            multiple="multiple">
                                                        @foreach($categories as $category)
                                                            <option selected value="{{$category->id}}">{{$category->name}}</option>

                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>




                                            <div class="form-group mb-0 justify-content-end row">
                                                <div class="col-sm-12">
                                                    <button type="submit" class="btn btn-info waves-effect waves-light"
                                                            style="float: left"> ثبت اطلاعات
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
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

    </div>

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
    $(document).ready(function() {
        $('.js-example-basic-multiple').select2();
    });


    $('#reset').on('click', function () {
        var captcha = $('#captcha_img');
        var config = captcha.data('refresh-config');
        $.ajax({
            method: 'GET',
            url: '/get_captcha/' + config,
        }).done(function (response) {
            captcha.prop('src', response);
        });
    });
</script>

@if(isset($pm))
    <script src="/js/swal.js"></script>

<script>
    $(document).ready(function() {

        Swal.fire(
            'تایید',
            '{{$pm}}',
            'success'
        )
    });

</script>
    @endif

</body>

</html>
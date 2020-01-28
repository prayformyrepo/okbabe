<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <link href="/css/select2.min.css" rel="stylesheet"/>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title> شاورنو - ثبت نام مشاور </title>

</head>

<body>

<!-- Begin page -->
<div id="wrapper">
{{--@include('includes.panel.topBar')--}}
{{--@include('includes.panel.leftSideBar')--}}



<!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page" style="margin-right: 0">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">

                <div class="row">
                    <div class="row" style="width: 100%">
                        <div class="col-sm-5 col-3"></div>
                        <div class="col-sm-2 col-6">
                            <img src="http://shavernoapp.ir/images/shsh.png" style="width: 100%;margin: 10px auto;"
                                 alt="">
                        </div>
                        <div class="col-sm-5 col-3"></div>
                    </div>
                    <h2 class="text-center" style="width: 100%;margin-bottom: 20px">فرم درخواست همکاری</h2>

                    {{--@if ($errors->any())--}}
                        {{--<div class="alert alert-danger" style="width: 100%">--}}
                            {{--<ul>--}}
                                {{--@foreach($errors->all() as $err)--}}
                                    {{--<li>{{$err}}</li>--}}

                                {{--@endforeach--}}
                            {{--</ul>--}}
                        {{--</div>--}}
                    {{--@endif--}}

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
                                                           placeholder="نام مشاور" value="{{old('name')}}">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">نام کاربری
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="text" id="username" name="username"
                                                           class="form-control" placeholder="نام کاربری مشاور"
                                                           value="{{old('username')}}">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">شماره موبایل
                                                    مشاور</label>
                                                <div class="col-sm-8">
                                                    <input style="direction: ltr!important;" type="text" id="mobile" name="mobile" class="form-control"
                                                           placeholder="شماره موبایل مشاور" value="{{old('mobile')}}">
                                                </div>
                                                <div class="col-sm-2">
                                                    <a href="" id="send_code" class="btn btn-primary">تایید شماره تماس</a>
                                                </div>

                                            </div>


                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">کد تایید شماره موبایل</label>
                                                <div class="col-sm-10">
                                                    <input style="direction: ltr!important;" type="text" id="code" name="code" class="form-control"
                                                           placeholder="کد تایید شماره موبایل">
                                                </div>

                                            </div>


                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">جنسیت
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    {{--<input type="text" id="mobile" name="mobile" class="form-control" placeholder="شماره تماس مشاور" value="{{old('mobile')}}">--}}

                                                    <select name="gender" id="gender" class="form-control">
                                                        <option value="0">مرد</option>
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
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر کارت
                                                    ملی
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="melli" id="melli">

                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> تصویر
                                                    شناسنامه
                                                    مشاور</label>
                                                <div class="col-sm-10">
                                                    <input type="file" class="form-control" name="shenasname" id="shenasname">

                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput"> نصویر مدرک
                                                    تحصیلی
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
                                                                      name="about">{{old('about')}}</textarea>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="example-textarea">زمینه
                                                    کاری مشاور</label>
                                                <div class="col-sm-10">
                                                            <textarea class="form-control" rows="5" id="field"
                                                                      name="field">{{old('field')}}</textarea>
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
                                                <label class="col-sm-2  col-form-label" for="simpleinput">شماره کارت</label>
                                                <div class="col-sm-10">
                                                    <input style="direction: ltr!important;" type="text" id="card_number" name="card_number"
                                                           class="form-control" placeholder="شماره کارت"
                                                           value="{{old('card_number')}}">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">شماره شبا</label>
                                                <div class="col-sm-10">
                                                    <input style="direction: ltr!important;" type="text" id="sheba_number" name="sheba_number"
                                                           class="form-control" placeholder="شماره شبا"
                                                           value="{{old('sheba_number')}}">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">شماره حساب</label>
                                                <div class="col-sm-10">
                                                    <input style="direction: ltr!important;" type="text" id="bank_account_number" name="bank_account_number"
                                                           class="form-control" placeholder="شماره حساب"
                                                           value="{{old('bank_account_number')}}">
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-sm-2  col-form-label" for="simpleinput">دسته بندی
                                                    ها</label>
                                                <div class="col-sm-10">

                                                    <select class="js-example-basic-multiple" name="categories[]" id="categories"
                                                            multiple="multiple">
                                                        @foreach($categories as $category)
                                                            <option value="{{$category->id}}">{{$category->name}}</option>

                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="offset-sm-4 col-sm-8">
                                                    <div class="checkbox">
                                                        <input name="accept" id="accept" type="checkbox"
                                                               data-parsley-multiple="accept">
                                                        <label for="accept"> صحت اطلاعات وارد شده را تایید می
                                                            کنم</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="offset-sm-4 col-sm-8">
                                                    <div class="checkbox">
                                                        <input name="rights" id="rights" type="checkbox"
                                                               data-parsley-multiple="rights">
                                                        <label for="rights"><a href="https://shaverno.com/copyright"
                                                                               target="_blank">قوانین و ضوابط
                                                                شاورنو </a> را می پذیرم</label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="form-group mb-0 justify-content-end row">
                                                <div class="col-sm-12">
                                                    <button type="submit" class="send-form btn btn-info waves-effect waves-light"
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
{{--<script>--}}
    {{--CKEDITOR.replace('about');--}}
    {{--CKEDITOR.replace('field');--}}
{{--</script>--}}
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

<script src="/js/input_mask.js"></script>
<script>
    $("#card_number").inputmask({"mask": "9999999999999999","placeholder": "________________"});
    $("#sheba_number").inputmask({"mask": "IR999999999999999999999999","placeholder": "IR________________________"});
    $("#bank_account_number").inputmask({"mask": "999999999999999999999","placeholder": ""});
    $("#mobile").inputmask({"mask": "09999999999","placeholder": "___________"});
    $("#code").inputmask({"mask": "9999","placeholder": "____"});
</script>
<script src="/js/swal.js"></script>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $("#send_code").on("click", function () {
        console.log($('#mobile').val());
        event.preventDefault();


        var mobile = $('#mobile').val();
        if(mobile!==null && mobile!=='') {
            var url = "{{route('adviser.verify')}}";
            $.ajax({
                data: {'mobile': mobile},
                url: url,
                type: "POST",
                success: function (data) {
                    $('#send_code').remove();

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'موفقیت آمیز',
                        html: 'کد تایید ارسال شد',
                        showConfirmButton: false,
                        timer: 2500
                    });

                },
                error: function (err) {
                    console.log(err);

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'خطا',
                        html: err.responseJSON.errors.mobile[0],
                        showConfirmButton: false,
                        timer: 2500
                    })

                }
            });
        }




    });


    $(".send-form").on("click", function () {
        event.preventDefault();


        var melli = $('input[name="melli"]').get(0).files[0];
        var avatar = $('input[name="avatar"]').get(0).files[0];
        var shenasname = $('input[name="shenasname"]').get(0).files[0];
        var edu = $('input[name="edu"]').get(0).files[0];
        var faaliat = $('input[name="faaliat"]').get(0).files[0];
        var formData = new FormData();
        formData.append('melli',melli);
        formData.append('avatar',avatar);
        formData.append('shenasname',shenasname);
        formData.append('edu',edu);
        formData.append('faaliat',faaliat);

        formData.append('name', $('#name').val());
        formData.append('username', $('#username').val());
        formData.append('mobile', $('#mobile').val());
        formData.append('gender', $('#gender').val());
        formData.append('about', CKEDITOR.instances.about.getData());
        formData.append('code', $('#code').val());
        formData.append('field', CKEDITOR.instances.field.getData());
        formData.append('call_price', $('#call_price').val());
        formData.append('visit_price', $('#visit_price').val());
        formData.append('rights', $('#rights').val());
        formData.append('accept', $('#accept').val());
        formData.append('card_number', $('#card_number').val());
        formData.append('sheba_number', $('#sheba_number').val());
        formData.append('bank_account_number', $('#bank_account_number').val());
        formData.append('categories', $('#categories').val());

            var url = "{{route('store-adviser')}}";
            $.ajax({
                data: formData,
                url: url,
                type: "POST",
                processData: false,
                contentType: false,
                success: function (data) {
                    // $('#send_code').remove();
                    console.log(data);

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'موفقیت آمیز',
                        html: 'درخواست شما ارسال شد',
                        showConfirmButton: false,
                        timer: 2500
                    });

                },
                error: function (err) {
                    console.log(err);
                    if (typeof err.responseJSON.error_code !== 'undefined') {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'خطا',
                            html: err.responseJSON.error_code,
                            showConfirmButton: true,
                        })
                    }
                    var errormsg='';

                    Object.size = function(obj) {
                        var size = 0, key;
                        for (key in obj) {
                            if (obj.hasOwnProperty(key)) size++;
                        }
                        return size;
                    };

// Get the size of an object
                    var size = Object.size(err.responseJSON.errors);
                    var keys = Object.values( err.responseJSON.errors );

                    for(var i=0;i<size;i++){
                     errormsg+=  keys[i] + '<br>';
                    }

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'خطا',
                        html: errormsg,
                        showConfirmButton: true,
                    })

                }
            });





    });




    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(document)
        .ajaxStart(function () {
            Swal.fire({
                position: 'center',
                // icon: 'error',
                title: '<i class="fa fa-spinner fa-spin fa-4x" style="color: dodgerblue;"></i>',
                html: 'لطفا صبر کنید',
                showConfirmButton: false,
                // timer: 2500
            })
        })





    ///
    /**send request **/
    $(document).ready(function () {
        console.log('start');
        $('#plucksuggest').on('submit', function (e) {
            e.preventDefault();
            if ($(this).find("input[type=file]").val()) {
                var image = $('input[name="image"]').get(0).files[0];
                var formData = new FormData();
                formData.append('image', image);
                var objArr = [];
                objArr.push({
                    "title": $(this).find('input[name=title]').val(),
                    "name": $(this).find('input[name=name]').val(),
                    "lastname": $(this).find('input[name=lastname]').val(),
                    "phonenumber": $(this).find('input[name=phonenumber]').val(),
                    "pluckname": $(this).find('input[name=pluckname]').val(),
                    "text": $(this).find('textarea[name=text]').val(),
                    "type": $(this).find('input[name=type]').val()
                });
                formData.append('objArr', JSON.stringify(objArr));
                formData.append('_token', $(this).find("input[name=_token]").val());
            } else {
                var formData = new FormData();
                var objArr = [];
                objArr.push({
                    "title": $(this).find('input[name=title]').val(),
                    "name": $(this).find('input[name=name]').val(),
                    "lastname": $(this).find('input[name=lastname]').val(),
                    "phonenumber": $(this).find('input[name=phonenumber]').val(),
                    "pluckname": $(this).find('input[name=pluckname]').val(),
                    "text": $(this).find('textarea[name=text]').val(),
                    "type": $(this).find('input[name=type]').val()
                });
                formData.append('objArr', JSON.stringify(objArr));
                formData.append('_token', $(this).find("input[name=_token]").val());

            }
            $.ajax({
                url: $(this).attr('action'),
                type: 'post',
                data: formData,
                dataType: 'json',
                processData: false, //neccessory
                contentType: false,//neccessory
                success: function (response) {
                    if (response == 1) {
                        swal({
                            type: 'success',
                            text: 'درخواست با موفیت ارسال شد.',
                            confirmButtonColor: '#22caff',
                        });
                        $('#plucksuggest').find("input[type=text],input[type=number],input[type=file], textarea").val("");
                        $('#requestpluck').modal('toggle');

                    } else {
                        swal({
                            type: 'error',
                            text: 'مشکلی در حین ارسال پیش آمده،دوباره تلاش کنید.',
                            confirmButtonColor: '#22caff'
                        });
                    }
                },
                error: function (response) {
                    return response;
                }
            });
        });
    });

</script>
</body>

</html>
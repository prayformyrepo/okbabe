<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <link href="/css/select2.min.css" rel="stylesheet"/>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <title> شاورنو - افزودن دسته بندی مشاور </title>

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
                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">نام
                                                دسته بندی</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="name" name="name" class="form-control"
                                                       placeholder="نام دسته بندی" value="{{old('name')}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">اسلاگ
                                                دسته بندی</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="slug" name="slug" class="form-control"
                                                       placeholder="اسلاگ دسته بندی" value="{{old('slug')}}">
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label"
                                                   for="example-textarea">توضیحات</label>
                                            <div class="col-sm-10">
                                                            <textarea title="description" class="form-control" rows="5"
                                                                      id="description"
                                                                      name="description">
                                                                {{old('description')}}
                                                            </textarea>
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">دسته بندی
                                                پدر</label>
                                            <div class="col-sm-10">

                                                <select class="js-example-basic" name="parent_category"
                                                        id="parent_category">
                                                    <option value="0">ندارد</option>
                                                @foreach($categories as $category)
                                                        <option value="{{$category->id}}">{{$category->name}}</option>

                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group mb-0 justify-content-end row">
                                            <div class="col-sm-12">
                                                <button type="submit"
                                                        class="save_form btn btn-success waves-effect waves-light"
                                                        style="float: left;margin: 0 10px"> ثبت
                                                </button>


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

    </div>

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->


</div>
<!-- END wrapper -->

{{--@include('includes.panel.rightSideBar')--}}


@include('includes.panel.footerLinks')

<script src="/js/select2.min.js"></script>

<script>
    $(document).ready(function () {
        $('.js-example-basic').select2();
        CKEDITOR.replace('description');

    });
</script>

<script src="/js/swal.js"></script>


@if(isset($pm))

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

<script>

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $(".save_form").on("click", function () {

        var name = $('#name').val();
        var slug = $('#slug').val();
        var description = $('#description').val();
        var parent_category_id = $('#parent_category').val()===0?null:$('#parent_category').val();

        var url = "{{route('admin.advisers.categories.store')}}";
        $.ajax({
            data: {'name': name, 'slug': slug, 'description': description, 'parent_category_id': parent_category_id},
            url: url,
            type: "POST",
            success: function (data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'موفقیت آمیز',
                    html: 'دسته بندی شما با موفقیت ثبت شد',
                    showConfirmButton: false,
                    timer: 2500
                })

                $('#name').val('')
                $('#slug').val('')
                $('#description').val('')
            },
            error: function (err) {
                console.log(err);

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'خطا',
                    html: err.responseJSON.errors.name[0] + '<br>' + err.responseJSON.errors.slug[0],
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        });

    });


    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>

</body>

</html>
<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>

    <title> شاورنو - افزودن محصول </title>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

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
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $err)
                                <li>{{$err}}</li>

                            @endforeach
                        </ul>
                    </div>
                @endif
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item active">
                            <a role="tab" class="nav-link active" href="#general" data-toggle="tab"
                               aria-expanded="true">اطلاعات اصلی</a>
                        </li>
                        <li class="nav-item">
                            <a role="tab" class="nav-link" href="#image" data-toggle="tab" aria-expanded="false">عکس</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <!-- general tab content -->
                    <div id="general" class="tab-pan active show">

                        {{--<form class="form-horizontal" role="form" method="post"--}}
                              {{--action="{{route('admin.product.store')}}" enctype="multipart/form-data">--}}
                            @csrf
                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="simpleinput">عنوان محصول</label>
                                <div class="col-sm-10">
                                    <input type="text" id="name" name="name" class="form-control"
                                           placeholder="عنوان محصول" value="{{old('name')}}">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="simpleinput">پیوند یکتای محصول</label>
                                <div class="col-sm-10">
                                    <input type="text" id="slug" name="slug" class="form-control"
                                           placeholder="اسلاگ تست" value="{{old('slug')}}">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="example-textarea">توضیحات تکمیلی</label>
                                <div class="col-sm-10">
 <textarea class="form-control" rows="5" id="description" name="description">{{old('description')}}
 </textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="example-textarea">توضیحات کوتاه</label>
                                <div class="col-sm-10">
 <textarea class="form-control" rows="5" id="short_description" name="short_description">{{old('short_description')}}
 </textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="simpleinput">قیمت به تومان</label>
                                <div class="col-sm-2">
                                    <input type="number" id="price" name="price" class="form-control"
                                           placeholder="قیمت" value="{{old('price')}}">
                                </div>

                                <label class="col-sm-2  col-form-label" for="simpleinput">تعداد صفحات</label>
                                <div class="col-sm-2">
                                    <input type="number" id="pages" name="pages" class="form-control"
                                           placeholder="تعداد صفحات" value="{{old('pages')}}">
                                </div>

                                <label class="col-sm-1  col-form-label" for="simpleinput">زبان کتاب</label>
                                <div class="col-sm-3">
                                    <input type="text" id="language" name="language" class="form-control"
                                           placeholder="زبان محصول" value="{{old('language')}}">
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="simpleinput">حجم فایل ها</label>
                                <div class="col-sm-2">
                                    <input type="text" id="size" name="size" class="form-control"
                                           placeholder="زبان محصول" value="{{old('size')}}">
                                </div>

                                <label class="col-sm-2  col-form-label" for="simpleinput">نویسنده</label>
                                <div class="col-sm-2">
                                    <input type="text" id="author" name="author" class="form-control"
                                           placeholder="نویسنده" value="{{old('author')}}">
                                </div>

                                <label class="col-sm-1  col-form-label" for="simpleinput">گوینده</label>
                                <div class="col-sm-3">
                                    <input type="text" id="announcer" name="announcer" class="form-control"
                                           placeholder="گوینده" value="{{old('announcer')}}">
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="simpleinput">مترجم</label>
                                <div class="col-sm-2">
                                    <input type="text" id="translator" name="translator" class="form-control"
                                           placeholder="مترجم" value="{{old('translator')}}">
                                </div>

                                <label class="col-sm-2  col-form-label" for="simpleinput">سال انتشار</label>
                                <div class="col-sm-2">
                                    <input type="text" id="published_date" name="published_date"
                                           class="form-control" placeholder="سال انتشار"
                                           value="{{old('published_date')}}">
                                </div>
                                <label class="col-sm-1  col-form-label" for="simpleinput">ناشر</label>
                                <div class="col-sm-3">
                                    <input type="text" id="publisher" name="publisher" class="form-control"
                                           placeholder="ناشر" value="{{old('publisher')}}">
                                </div>

                            </div>


                            <div class="form-group row">
                                <label for="inlineCheckbox2"> محصول ویژه </label>


                                <div class="checkbox checkbox-primary" style="padding-right: 20px;">
                                    <input id="featured" name="featured" type="checkbox">

                                    <label for="featured">

                                    </label>
                                </div>

                            </div>

                            <div class="form-group row">
                                <label class="col-sm-2  col-form-label" for="simpleinput">وضعیت محصول</label>
                                <div class="col-sm-4">
                                    <select class="form-control" name="status" id="status">
                                        <option value="1">فعال</option>
                                        <option value="0">غیرفعال</option>
                                    </select>
                                </div>

                                <label class="col-sm-1  col-form-label" for="simpleinput">نوع کتاب</label>
                                <div class="col-sm-5">
                                    <select class="form-control" name="product_type_id" id="product_type_id">
                                        <option value="0">نوع کتاب را انتخاب کنید</option>

                                        @foreach($productTypes as $productType)
                                            <option value="{{$productType->id}}">{{$productType->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div id="image" class="tab-pan">

                                <div class="whole-tab">
                                    <div class="col-md-12 col-lg-10">
                                        <div class="col-md-10">
                                            <div class="form-group required">


                                                <table class="table">
                                                    <tbody id="imagefield">
                                                    <tr>
                                                        <td>
                                                            <input class="form-control" type="file" name="image[]">
                                                        </td>
                                                        <td>
                                                        </td>

                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                        </div>

                                    </div>
                                    <div class="col-md-2">
                                        <button class="btn btn-success center" type="button" id="addphoto">افزودن فیلد عکس
                                        </button>
                                    </div>

                                </div>

                            </div> <!-- container-fluid -->

                            <div class="form-group mb-0 justify-content-end row">
                                <div class="col-sm-12">
                                    <button type="submit" class=" save_form btn btn-info waves-effect waves-light"
                                            style="float: left"> افزودن محصول
                                    </button>
                                </div>
                            </div>

                        {{--</form>--}}

                    </div>



                </div> <!-- content -->

                @include('includes.panel.footer')

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
    </div>
</div>

<!-- END wrapper -->

@include('includes.panel.rightSideBar')


@include('includes.panel.footerLinks')
<script>
    CKEDITOR.replace('description');
    $('#addphoto').click(function () {
        $('#imagefield').append(' <tr>\n' +
            '                            <td>\n' +
            ' <input class="form-control" type="file" name="image[]">\n' +
            '                            </td>\n' +
            '                            <td>\n' +
            '<button type="button" class="btn btn-danger deleterow">حذف</button>\n' +
            '                            </td>\n' +
            '\n' +
            '                        </tr>');
        $('.deleterow').click(function () {
            $(this).parents('tr').remove();
        });

    });
</script>

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
        var short_description = $('#short_description').val();
        var price = $('#price').val();
        var pages = $('#pages').val();
        var language = $('#language').val();
        var size = $('#size').val();
        var author = $('#author').val();
        var announcer = $('#announcer').val();
        var translator = $('#translator').val();
        var published_date = $('#published_date').val();
        var publisher = $('#publisher').val();
        var featured = $('#featured').val();
        var status = $('#status').val();
        var product_type_id = $('#product_type_id').val();
        var images = [];
        $("input[name='image[]']").each(function() {
            images.push($(this).val());
        });


        var url = "{{route('admin.product.store')}}";
        $.ajax({
            data: {'name': name, 'slug': slug, 'description': description,  'short_description' : short_description,  'price': price,  'pages': pages,},
            url: url,
            type: "POST",
            success: function (data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'موفقیت آمیز',
                    html: 'پیام شما با موفقیت ثبت شد',
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
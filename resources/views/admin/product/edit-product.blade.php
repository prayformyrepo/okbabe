<!DOCTYPE html>
<html lang="fa">
    
<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>

    <title> شاورنو - ویرایش محصول </title>

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
                                  <a role="tab" class="nav-link active" href="#general" data-toggle="tab" aria-expanded="true">اطلاعات اصلی</a>
                                </li>
                                <li class="nav-item">
                                    <a role="tab" class="nav-link" href="#image" data-toggle="tab" aria-expanded="false">عکس</a>
                                </li>
                            </ul>
                    </div>
                            <div class="tab-content">
                                <!-- general tab content -->
                            <div id="general" class="tab-pan active show">

                                    <form class="form-horizontal" role="form" method="post" action="{{route('admin.product.update',$product)}}">
                                        @csrf
                                        @method('patch')
                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">عنوان محصول</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="name" name="name" class="form-control" placeholder="عنوان محصول"  value="{{$product->name}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">پیوند یکتای محصول</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="slug" name="slug" class="form-control" placeholder="اسلاگ تست" value="{{$product->slug}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="example-textarea">توضیحات تکمیلی</label>
                                            <div class="col-sm-10">
 <textarea class="form-control" rows="5" id="description" name="description">{{$product->description}}
 </textarea>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="example-textarea">توضیحات کوتاه</label>
                                            <div class="col-sm-10">
 <textarea class="form-control" rows="5" id="description" name="short_description">{{$product->short_description}}
 </textarea>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">قیمت به تومان</label>
                                            <div class="col-sm-2">
                                                <input type="number" id="questions_count" name="price" class="form-control" placeholder="قیمت"  value="{{$product->price}}">
                                            </div>

                                            <label class="col-sm-2  col-form-label" for="simpleinput">تعداد صفحات</label>
                                            <div class="col-sm-2">
                                                <input type="number" id="answers_per_question" name="pages" class="form-control" placeholder="تعداد صفحات" value="{{$product->pages}}">
                                            </div>

                                            <label class="col-sm-1  col-form-label" for="simpleinput">زبان کتاب</label>
                                            <div class="col-sm-3">
                                                <input type="text" id="answers_per_question" name="language" class="form-control" placeholder="زبان محصول" value="{{$product->language}}">
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">حجم فایل ها</label>
                                            <div class="col-sm-2">
                                                <input type="text" id="answers_per_question" name="size" class="form-control" placeholder="زبان محصول" value="{{$product->size}}">
                                            </div>

                                            <label class="col-sm-2  col-form-label" for="simpleinput">نویسنده</label>
                                            <div class="col-sm-2">
                                                <input type="text" id="answers_per_question" name="author" class="form-control" placeholder="نویسنده" value="{{$product->author}}">
                                            </div>

                                            <label class="col-sm-1  col-form-label" for="simpleinput">گوینده</label>
                                            <div class="col-sm-3">
                                                <input type="text" id="answers_per_question" name="announcer" class="form-control" placeholder="گوینده" value="{{$product->announcer}}">
                                            </div>
                                        </div>



                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">مترجم</label>
                                            <div class="col-sm-2">
                                                <input type="text" id="answers_per_question" name="translator" class="form-control" placeholder="مترجم" value="{{$product->translator}}">
                                            </div>

                                            <label class="col-sm-2  col-form-label" for="simpleinput">سال انتشار</label>
                                            <div class="col-sm-2">
                                                <input type="text" id="answers_per_question" name="published_date" class="form-control" placeholder="سال انتشار" value="{{$product->published_date}}">
                                            </div>
                                            <label class="col-sm-1  col-form-label" for="simpleinput">ناشر</label>
                                            <div class="col-sm-3">
                                                <input type="text" id="answers_per_question" name="publisher" class="form-control" placeholder="ناشر" value="{{$product->publisher}}">
                                            </div>

                                        </div>


                                        <div class="form-group row">
                                            <label for="inlineCheckbox2"> محصول ویژه </label>


                                            <div class="checkbox checkbox-primary"  style="padding-right: 20px;">
                                                <input id="checkbox2" name="featured" type="checkbox" value="1"  @if($product->featured == 1) checked @endif>

                                                <label for="checkbox2">

                                                </label>
                                            </div>

                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2  col-form-label" for="simpleinput">وضعیت محصول</label>
                                            <div class="col-sm-4">
                                                <select class="form-control" name="status">
                                                    <option value="1" @if($product->status ==1) selected @endif>فعال</option>
                                                    <option value="0" @if($product->status ==0) selected @endif>غیرفعال</option>
                                                </select>
                                            </div>

                                            <label class="col-sm-1  col-form-label" for="simpleinput">نوع کتاب</label>
                                            <div class="col-sm-5">
                                                <select class="form-control" name="product_type_id">
                                                    <option>نوع کتاب را انتخاب کنید</option>

                                                    @foreach($productTypes as $productType)
                                                        <option value="{{$productType->id}}" @if($product->productType->id == $productType->id) @endif>{{$productType->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>




                                        <div class="form-group mb-0 justify-content-end row">
                                            <div class="col-sm-12">
                                                <button type="submit" class="btn btn-info waves-effect waves-light" style="float: left"> ویرایش محصول</button>
                                            </div>
                                        </div>

                                    </form>

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
                                        <button class="btn btn-success center" type="button" id="addphoto">افزودن فیلد عکس</button>
                                    </div>
                                    <div class="images col-md-12">
                                        @if(count($product->images) > 0)
                                            <button type="button" class="btn btn-info form-control" data-toggle="collapse" data-target="#demo" style="margin-bottom:20px">نمایش تصاویر محصول</button>

                                            <div id="demo" class="collapse">
                                                @foreach($product->images as $image)
                                                    <div class="row img_{{$image->id}}" style="border: 1px solid whitesmoke;box-shadow: 1px 1px 1px 1px #928e8e;border-radius: 20px; margin-bottom:10px;">
                                                        <div class="col-md-9">
                                                            <img class="img-responsive" src="{{asset($image->image_path)}}" style="width:400px; margin-right:220px;">
                                                        </div>
                                                        <div class="col-md-3 not_thumbnail_{{$image->id}}" style="@if($product->thumbnail_id == $image->id) display:none; @endif">
                                                            <button type="button" class="btn btn-danger form-control btn-delete_img" data-img_id="{{$image->id}}" data-event_id="{{$product->id}}">حذف این تصویر</button>
                                                            <hr/>
{{--<button type="button" class="btn btn-warning form-control btn-change_thumbnail" data-img_id="{{$image->id}}" data-event_id="{{$product->id}}">انتخاب به عنوان عکس شاخص</button>--}}
                                                        </div>
                                                      {{--  <div class="col-md-3 is_thumbnail_{{$image->id}} label-success" style="border-radius: 30px;text-align: center; @if($product->thumbnail_id != $image->id) display:none; @endif">
                                                            <label class="">تصویر شاخص <br/> برای حذف این تصویر ابتدا باید یکی دیگر از تصاویر موجود را به عنوان تصویر شاخص انتخاب کنید!</label>
                                                        </div>--}}
                                                    </div>
                                                @endforeach
                                            </div>
                                        @endif
                                            </div>

                            </div>

                    </div> <!-- container-fluid -->

                </div> <!-- content -->

                @include('includes.panel.footer')

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        @include('includes.panel.rightSideBar')


        @include('includes.panel.footerLinks')
                <script>
            CKEDITOR.replace( 'description' );
        </script>

        <script>
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

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
                }
            });
            $(".btn-delete_img").on("click", function(){
                swal.fire({
                    title: 'اطمینان دارید ؟',
                    text: "بعد از حذف این تصویر قادر با بازیابی آن نمیباشیم!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'بله, حذف شود',
                    cancelButtonText: 'خیر'
                }).then((result) => {
                    if (result.value) {

                        var product_id = "{{$product->id}}";
                        var image_id = $(this).data('img_id');
                        var url = "{{route('admin.product.image-delete')}}";
                        $.ajax({
                            data:{'product_id':product_id, 'image_id':image_id},
                            url:url,
                            type:"POST",
                            success:function(data){
                                swal.fire({
                                    position: 'center',
                                    type: 'success',
                                    title: 'تصویر با موفقیت حذف گردید!',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setTimeout(function(){
                                    $(".img_"+data).fadeOut("slow");
                                },1500);
                            },
                            error:function(){
                                console.log('errror in deleting image');
                            }
                        });
                    }
                })
            });



            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
                }
            });
/*
            $(".btn-change_thumbnail").on("click", function(){
                swal.fire({
                    title: 'تغییر تصویر شاخص',
                    text: "اطمینان دارید ؟",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'بله, تصویر شاخص تغییر کند.',
                    cancelButtonText: 'خیر'
                }).then((result) => {
                    if (result.value) {

                        var event_id = $(this).data('event_id');
                        var image_id = $(this).data('img_id');
                        var url = "http://hejr/admin/event/image/changeThumbnail";
                        $.ajax({
                            data:{'event_id':event_id, 'image_id':image_id},
                            url:url,
                            type:"POST",
                            success:function(data){
                                swal.fire({
                                    position: 'top-left',
                                    type: 'success',
                                    title: 'تصویر شاخص با موفقیت تغییر کرد',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                //field haye ghabli ok she
                                $(".is_thumbnail_"+data).fadeOut("slow");
                                $(".not_thumbnail_"+data).fadeIn("slow");
                                //field haye alana ok she
                                $(".not_thumbnail_"+image_id).fadeOut("slow");
                                $(".is_thumbnail_"+image_id).fadeIn("slow");
                            },
                            error:function(){
                                console.log('errror in changeing thumbnail image');
                            }
                        });
                    }
                })
            });
*/

        </script>

    </body>

</html>
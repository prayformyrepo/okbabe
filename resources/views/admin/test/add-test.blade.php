<!DOCTYPE html>
<html lang="fa">
    
<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>

    <title> شاورنو - افزودن تست </title>

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
                                            <a href="{{route('admin.test.show-select-test-page')}}" class="dropdown-item">لیست تست ها</a>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-12">
                                            <div class="p-2">
                                                <form class="form-horizontal" role="form" method="post" action="{{route('admin.test.add-test')}}">
                                                        @csrf
                                                    <div class="form-group row">
                                                        <label class="col-sm-2  col-form-label" for="simpleinput">عنوان تست</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" id="name" name="name" class="form-control" placeholder="عنوان تست"  value="{{old('name')}}">
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-2  col-form-label" for="simpleinput">اسلاگ تست</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" id="slug" name="slug" class="form-control" placeholder="اسلاگ تست" value="{{old('slug')}}">
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-2  col-form-label" for="example-textarea">توضیحات</label>
                                                        <div class="col-sm-10">
                                                            <textarea class="form-control" rows="5" id="description" name="description">

                                                                {{old('description')}}

                                                            </textarea>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-2  col-form-label" for="simpleinput">تعداد سوالات</label>
                                                        <div class="col-sm-10">
                                                            <input type="number" id="questions_count" name="questions_count" class="form-control" placeholder="تعداد سوالات"  value="{{old('questions_count')}}">
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-2  col-form-label" for="simpleinput">تعداد گزینه های پاسخ</label>
                                                        <div class="col-sm-10">
                                                            <input type="number" id="answers_per_question" name="answers_per_question" class="form-control" placeholder="تعداد گزینه های پاسخ" value="{{old('answers_per_question')}}">
                                                        </div>
                                                    </div>


                                                    {{--<div class="form-group row">--}}
                                                        {{--<label class="col-sm-2  col-form-label">Input Select</label>--}}
                                                        {{--<div class="col-sm-10">--}}
                                                            {{--<select class="form-control">--}}
                                                                {{--<option>1</option>--}}
                                                                {{--<option>2</option>--}}
                                                                {{--<option>3</option>--}}
                                                                {{--<option>4</option>--}}
                                                                {{--<option>5</option>--}}
                                                            {{--</select>--}}
                                                            {{--<h6>Multiple select</h6>--}}
                                                            {{--<select multiple class="form-control">--}}
                                                                {{--<option>1</option>--}}
                                                                {{--<option>2</option>--}}
                                                                {{--<option>3</option>--}}
                                                                {{--<option>4</option>--}}
                                                                {{--<option>5</option>--}}
                                                            {{--</select>--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}

                                                    {{--<div class="form-group row">--}}
                                                        {{--<label class="col-sm-2  col-form-label" for="example-fileinput">Default file input</label>--}}
                                                        {{--<div class="col-sm-10">--}}
                                                            {{--<input type="file" class="form-control" id="example-fileinput">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}

                                                    <div class="form-group mb-0 justify-content-end row">
                                                        <div class="col-sm-12">
                                                            <button type="submit" class="btn btn-info waves-effect waves-light" style="float: left"> ثبت تست</button>
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

        @include('includes.panel.rightSideBar')


        @include('includes.panel.footerLinks')
        <script>
            CKEDITOR.replace( 'description' );
        </script>
    </body>

</html>
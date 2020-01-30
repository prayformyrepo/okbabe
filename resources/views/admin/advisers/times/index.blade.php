<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <script src="/js/swal.js"></script>

    <title> شاورنو - تایم های مشاور </title>

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
                    <div class="col-lg-12">

                        <div class="card-box">
                            {{--<div class="dropdown float-right">--}}
                            {{--<a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"--}}
                            {{--aria-expanded="false">--}}
                            {{--<i class="mdi mdi-dots-vertical"></i>--}}
                            {{--</a>--}}
                            {{--<div class="dropdown-menu dropdown-menu-right">--}}
                            {{--<!-- item-->--}}
                            {{--<a href="{{route('admin.test.add-test')}}" class="dropdown-item">افزودن تست</a>--}}

                            {{--</div>--}}
                            {{--</div>--}}
                            <h4 class="header-title">لیست مشاوران</h4>
                            {{--<p class="text-muted font-14 mb-3">--}}
                            {{--Your awesome text goes here.Your awesome text goes here.--}}
                            {{--</p>--}}

                            <div class="table-responsive">
                                <table class="table table-dark mb-0 text-center">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>نام</th>
                                        <th>نام کاربری</th>
                                        <th>شماره موبایل</th>
                                        <th>وضعیت</th>
                                        <th>مشاهده جزئیات</th>
                                        <th>حذف</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($advisers as $adviser)


                                        <tr>
                                            <th scope="row">{{$adviser->id}}</th>
                                            <td>{{$adviser->name}}</td>
                                            <td>{{$adviser->username}}</td>
                                            <td>
                                                {{$adviser->mobile}}
                                                @if($adviser->mobile_verified_at==null) <i class="fa fa-times-circle fa-2x" style="color: darkred"> </i> @endif
                                            </td>
                                            <td>
                                                @if(\App\Adviser::withoutGlobalScope(\App\Scopes\AdviserScope::class)->where('user_id',$adviser->id)->first()->verified==0)
                                                    <span class="alert alert-danger" style="font-size: 0.7rem;">تایید نشده</span>
                                                @else
                                                    <span class="alert alert-success" style="font-size: 0.7rem;">تایید شده</span>
                                                @endif
                                            </td>

                                            <td>
                                                <a href="{{route('admin.adviser.show',[$adviser->id])}}" class="btn btn-primary">
                                                    <i class="fa fa-info-circle"> مشاهده جزئیات </i>
                                                </a>
                                            </td>

                                            <td>
                                                <form onsubmit="return confirm(this);"
                                                      action="{{route('admin.adviser.destroy',['adviser_id'=>$adviser->id])}}"
                                                      method="post">
                                                    {{method_field('delete')}}
                                                    {{csrf_field()}}
                                                    <button type="submit" class="btn btn-danger btn-small"><i
                                                                class="fa fa-trash"> حذف مشاور </i></button>
                                                </form>


                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>

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
    CKEDITOR.replace('description');

    function confirm(e) {
        event.preventDefault();
        Swal.fire({
            title: 'از حذف این تیکت اطمینان دارید؟',
            text: "این عملیات غیر قابل بازگشت است",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'انصراف',
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'حذف'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'حذف شد ',
                    'تیکت مورد نظر شما حذف شد',
                    'success',
                    e.submit()
                )
            }
        })
    }

</script>
</body>

</html>
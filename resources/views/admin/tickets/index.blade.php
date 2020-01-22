<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <script src="/js/swal.js"></script>

    <title> شاورنو - تیکت ها </title>

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
                            <h4 class="header-title">لیست تیکت ها</h4>
                            {{--<p class="text-muted font-14 mb-3">--}}
                            {{--Your awesome text goes here.Your awesome text goes here.--}}
                            {{--</p>--}}

                            <div class="table-responsive">
                                <table class="table table-dark mb-0 text-center">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>عنوان</th>
                                        <th>نام کاربر</th>
                                        <th>دسته بندی</th>
                                        <th>وضعیت</th>
                                        <th>پاسخ</th>
                                        <th>حذف</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @php($i=1)
                                    @foreach($tickets as $ticket)

                                        <tr>
                                            <th scope="row">{{$i}}</th>
                                            <td>{{$ticket->subject}}</td>
                                            <td>{{\App\User::find($ticket->user_id)->name==null?\App\User::find($ticket->user_id)->username:\App\User::find($ticket->user_id)->name}}</td>
                                            <td>{{ \App\Ticket_category::find($ticket->ticket_category_id)->name  }}</td>
                                            <td>@if($ticket->status==0) تیکت ایجاد شده  @elseif($ticket->status==1) پاسخ ادمین @elseif($ticket->status==2) پاسخ کاربر
                                                @elseif($ticket->status==3) تیکت بسته شده@endif</td>
                                            <td><a href="{{route('admin.ticket.show',[$ticket->id])}}" class="btn btn-primary fa fa-pen-square btn-md"> پاسخ به تیکت</a></td>

                                            <td>
                                                <form onsubmit="return confirm(this);"
                                                      action="{{route('admin.ticket.destroy',['ticket_id'=>$ticket->id])}}"
                                                      method="post">
                                                    {{method_field('delete')}}
                                                    {{csrf_field()}}
                                                    <button type="submit" class="btn btn-danger btn-small"><i
                                                                class="fa fa-trash"> حذف تیکت </i></button>
                                                </form>


                                            </td>
                                        </tr>
                                        @php($i++)
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
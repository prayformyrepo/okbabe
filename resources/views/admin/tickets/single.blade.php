<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')

    <title> شاورنو - پاسخ به تیکت
    </title>

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
                @if (isset($err))
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($err as $er)
                                <li>{{$er}}</li>

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
                                    <a href="{{route('admin.ticket.index')}}" class="dropdown-item">لیست تیکت ها</a>

                                </div>
                            </div>
                            <h4 class="header-title">{{$ticket->subject}}</h4>

                            <div class="row">
                                <div class="col-12">
                                    <div class="p-2">
                                        @foreach($ticket_answers as $ticket_answer)
                                            @if($ticket_answer->status==0)
                                                <div class="row">
                                                    <div class="col-sm-9"></div>
                                                    <div class="alert alert-success col-sm-3">
                                                        {{\App\User::find($ticket->user_id)->name==null?\App\User::find($ticket->user_id)->username:\App\User::find($ticket->user_id)->name}}
                                                        :
                                                        {{$ticket_answer->text}}</div>
                                                </div>
                                            @elseif($ticket_answer->status==1)
                                                <div class="row">

                                                    <div class="alert alert-danger col-sm-3">
                                                        ادمین :
                                                        {{$ticket_answer->text}}</div>
                                                    <div class="col-sm-9"></div>
                                                </div>
                                            @endif
                                        @endforeach
                                    </div>
                                </div>

                            </div>
                            <!-- end row -->

                        </div> <!-- end card-box -->

                        <div class="card-box">

                            <div class="row">
                                <form action="{{route('admin.ticket.answer',[$ticket->id])}}" method="post" class="col-12">
                                    @csrf
                                    <div class="form-group row">
                                        <input type="text" class="form-control col-sm-9" name="text" id="text"
                                               placeholder="پاسخ به تیکت">
                                        <input type="submit" class="btn btn-success col-sm-3" value="ارسال پاسخ" name=""
                                               id="">
                                    </div>
                                </form>
                            </div>
                        </div>


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


    function autoComplete(q, a, t) {
        console.log(q, a, t);
        $('#q' + q + 'a' + a).val(t);
    }
</script>
</body>

</html>
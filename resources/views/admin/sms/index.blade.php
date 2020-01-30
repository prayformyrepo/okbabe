<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>
    <script src="/js/swal.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title> شاورنو - تنظیمات پیامک </title>

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
                            <h4 class="header-title">تنظیمات پیامک</h4>
                            {{--<p class="text-muted font-14 mb-3">--}}
                            {{--Your awesome text goes here.Your awesome text goes here.--}}
                            {{--</p>--}}

                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group row">
                                        <label class="col-sm-4  col-form-label" for="simpleinput">
                                            فعالسازی درخواست کد پیامک
                                        </label>
                                        <div class="col-sm-8">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" @if($sms==1) checked
                                                       @endif name="sms" id="customSwitch1">
                                                <label class="custom-control-label" for="customSwitch1">فعالسازی</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
});
<script src="/js/swal.js"></script>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $("#customSwitch1").on("click", function () {



        if( $( "#customSwitch1" ).attr( 'type' ) === 'checkbox' ) {
            var sms = +$(this).is( ':checked' );
        }


            var url = "{{route('admin.sms.change')}}";
            $.ajax({
                data: {'sms': sms},
                url: url,
                type: "POST",
                success: function (data) {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'موفقیت آمیز',
                        html: 'وضعیت تغییر یافت',
                        showConfirmButton: false,
                        timer: 2500
                    });

                },
                error: function (err) {
                    console.log(err);

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

</script>
</body>

</html>
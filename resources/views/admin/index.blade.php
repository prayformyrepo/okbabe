<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')
    <script src="/ckeditor/ckeditor.js"></script>

    <title> شاورنو - پنل کاربری مدیر </title>

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
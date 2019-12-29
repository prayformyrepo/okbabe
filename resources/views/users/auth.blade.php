<!DOCTYPE html>
<html lang="fa">
    
<head>
        @include('includes.users.headLinks')
        <title>شاورنو - ورود / ثبت نام</title>

    </head>


    <body class="authentication-bg">

        <div class="home-btn d-none d-sm-block">
            <a href="index-2.html"><i class="fas fa-home h2 text-dark"></i></a>
        </div>

        <div class="account-pages mt-5 mb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="text-center">
                            <a href="index-2.html">
                                <span><img src="assets/images/logo-light.png" alt="" height="22"></span>
                            </a>
                            <p class="text-muted mt-2 mb-4">شاورنو</p>
                        </div>
                        <div class="card">

                            <div class="card-body p-4">
                                
                                <div class="text-center mb-4">
                                    <h4 class="text-uppercase mt-0">ورود</h4>
                                </div>

                                <form action="{{route('user.login')}}" method="post">
                                    @csrf

                                    <div class="form-group mb-3">
                                        <label for="emailaddress">شماره موبایل</label>
                                        <input class="form-control" name="mobile" type="tel" id="mobile" required="" placeholder="موبایل خود را وارد کنید">
                                    </div>

                                    <div class="form-group mb-3">
                                        <label for="password">کلمه عبور</label>
                                        <input class="form-control" type="password" name="password" required="" id="password" placeholder="کلمه عبور خود را وارد کنید">
                                    </div>

                                    <div class="form-group mb-3">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked>
                                            <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                        </div>
                                    </div>

                                    <div class="form-group mb-0 text-center">
                                        <button class="btn btn-primary btn-block" type="submit"> ورود </button>
                                    </div>

                                </form>

                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card -->

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p> <a href="pages-recoverpw.html" class="text-muted ml-1"><i class="fa fa-lock mr-1"></i>کلمه عبور خود را فراموش کردید؟</a></p>
                                <p class="text-muted">حساب کاربری ندارید؟ <a href="pages-register.html" class="text-dark ml-1"><b>ثبت نام</b></a></p>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page -->
    

    @include('includes.users.footerLinks')
    </body>

</html>
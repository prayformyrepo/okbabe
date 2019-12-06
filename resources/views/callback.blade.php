<!doctype html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>نتیجه شارژ کیف پول</title>
    <link href="/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        @font-face {
            font-family: 'iranSans';
            src:url('/iranSans/eot/IRANSansWeb(FaNum)_Medium.eot');
            src:url('/iranSans/eot/IRANSansWeb(FaNum)_Medium.eot?#iefix') format('embedded-opentype'),
            url('/iranSans/woff/IRANSansWeb(FaNum)_Medium.woff') format('woff'),
            url('/iranSans/ttf/IRANSansWeb(FaNum)_Medium.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        body{
            background-color: #f2f2f2;
            direction: rtl;
            text-align: center;
            font-family: 'iranSans';

        }

        .title{
            direction: rtl;
            color: cornflowerblue;
            font-size: 30px;
            font-weight: bolder;
            margin: 20px auto;

        }

        .title{
            color: #4340ed;
            font-weight: bold;

        }
        .row{
            margin: 15px 0;
        }

        img{
            border-radius: 20px;
        }
        .box{
            background-color: white;
            width: 90%;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(108, 108, 108, 0.8);
        }
        .green{
            font-size: 30px;
            font-weight: bolder;
            color: #1e7e34;
        }
        .subtitle{
            font-size: 12px;
        }
    </style>
</head>
<body>

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6"><img src="https://shavernoapp.ir/logo/one.jpg" style="width: 200px" alt=""></div>
    <div class="col-sm-3"></div>
</div>

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6 title">
        @if($status==1)
        {{$user->username}}
         عزیز
        <br>
        پرداخت با موفقیت انجام شد
            @else
            متاسفانه پرداخت با موفقیت انجام نشد
@endif
    </div>
    <div class="col-sm-3"></div>
</div>

<div class="box">
    @if($status==1)
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6 subtitle">
        رسید پرداخت آنلاین:
        <br>
        <span class="green">{{$amount}} تومان</span>
        <br>
        برای بازگشت به برنامه روی دکمه زیر کلیک کنید.
         </div>
    <div class="col-sm-3"></div>
</div>
    @endif

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6 subtitle"><a class="btn btn-success btn-lg" href="com.shavernoapp.shaverno">بازگشت به شاورنو</a></div>
    <div class="col-sm-3"></div>
</div>
</div>

</body>
</html>
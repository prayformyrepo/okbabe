<!doctype html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="http://45.156.186.248/my/api159.php">
   email
    <input type="email" value="aliaharian@yahoo.com" name="email" id="">
    pass
    <input type="password" value="Ali@77570328" name="pass" id="">
    driver
    <input type="text" value="09307473703" name="drivers" id="">
    customer
    <input type="text" value="09059871707" name="customer" id="">
    max
    <input type="text" value="3" name="maxcalltime" id="">
    site
    <input type="text" value="shavernoapp.ir" name="siteUrl" id="">
    sub
    <input type="submit" name="" id="">
</form>


@php
          $test='                {"callfile":"159_F54QOYe7Yq.call"}';
          $test='                {"callfile":"159_sASyr4lonh.call"}';
          $test='                {"callfile":"159_vF12isOODF.call"}';
          $test='                {"callfile":"159_BCZhLTjNWy.call"}';
          $test='                {"callfile":"159_brHUtR4wUb.call"}';
          $test='                {"callfile":"159_1zjh9uc0Se.call"}';

        echo strpos($test,'159').'<br>';

    echo substr($test,29,19)."<br>";


@endphp
</body>
</html>
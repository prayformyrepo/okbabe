<!doctype html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$post->title}}</title>
    <style>
        @font-face {
            font-family: 'iranSans';
            src:url('/iranSans/eot/IRANSansWeb.eot');
            src:url('/iranSans/eot/IRANSansWeb.eot?#iefix') format('embedded-opentype'),
            url('/iranSans/woff/IRANSansWeb.woff') format('woff'),
            url('/iranSans/ttf/IRANSansWeb.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        *{
            direction: rtl;
        }
        p,h1,h2,h3,h4,h5,h6,span,strong,div{
            font-family: 'iranSans';
        }

        a{
            display: none!important;
        }
    </style>
</head>
<body style="text-align: right;">
{!! $post->content !!}
</body>
<script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script>
    $( document ).ready(function() {
        $("a").parent().css({"display": "none"});
    });

    $('*').each(function(){
        var backImg;

        if ($(this).is('img')) {
            var src=$(this).attr('src');
            if(src.charAt(0)==='/'){
                $(this).attr("src","http://shaverno.com".src);
            }
        }
    });

</script>
</html>
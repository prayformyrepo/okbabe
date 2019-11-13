<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<form action="/testopen" method="post">
    @csrf
    <input type="checkbox" name="test[]" value="1">
    <input type="checkbox" name="test[]" value="2">
    <input type="checkbox" name="test[]" value="3">
    <input type="checkbox" name="test[]" value="4">
    <input type="checkbox" name="test[]" value="5">
    <input type="checkbox" name="test[]" value="6">
    <input type="submit">



</form>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"    />
    <link rel="stylesheet" href="/assets/fonts/simple-line-icons/css/simple-line-icons.css">
    <link rel="stylesheet" href="/assets/fonts/iconsmind-s/css/iconsminds.css">
    <title>Piaf - Vue 2 Bootstrap 4 Admin Dashboard Template</title>

    <style>
    .loading {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 2px solid rgba(0,0,0,.2 );
        border-radius: 50%;
        border-top-color: rgba(0,0,0,.4 );
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
        left: calc(50%);
        top: calc(50%);
        position: fixed;
        z-index: 1;
        }

        @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
        }
        @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
        }
    </style>
</head>

<body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="app">
        <div class="loading"></div>
    </div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm run dev` or `yarn dev`.
      To create a production bundle, use `npm run prod` or `yarn prod`.
    -->

    <script src="/js/index.js"></script>
</body>
</html>

const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//
mix.js(['resources/js/app.js','resources/assets/panel/js/vendor.min.js','resources/assets/panel/js/app.min.js'],'public/js/panel/auth.js');

mix.styles(['resources/assets/panel/css/bootstrap.min.css','resources/assets/panel/css/icons.min.css','assets/panel/css/app.min.css'],'public/css/panel/auth.css');


// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

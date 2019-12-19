<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLatLongVideoToAdvisers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('advisers', function (Blueprint $table) {
            $table->double('lat')->default(35.753064)->after('status');
            $table->double('long')->default(51.431706)->after('status');
            $table->text('video')->default('/themes/custom-5176/userfiles/video/video.mp4')->after('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('advisers', function (Blueprint $table) {
            //
        });
    }
}

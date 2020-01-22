<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddItemsToAdvisersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('advisers', function (Blueprint $table) {
            $table->unsignedBigInteger('national_card_file_id')->nullable()->after('video')->index();
            $table->unsignedBigInteger('birth_certificate_file_id')->nullable()->after('video')->index();
            $table->unsignedBigInteger('education_certificate_file_id')->nullable()->after('video')->index();
            $table->unsignedBigInteger('work_certificate_file_id')->nullable()->after('video')->index();


            $table->foreign('national_card_file_id')->references('id')->on('files')->onDelete('cascade');
            $table->foreign('birth_certificate_file_id')->references('id')->on('files')->onDelete('cascade');
            $table->foreign('education_certificate_file_id')->references('id')->on('files')->onDelete('cascade');
            $table->foreign('work_certificate_file_id')->references('id')->on('files')->onDelete('cascade');

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

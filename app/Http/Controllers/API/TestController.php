<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public $successStatus = 200;

    public function show_tests()
    {
        $tests=Test::all();

        return response()->json(['success' => $tests], $this->successStatus);

    }
}

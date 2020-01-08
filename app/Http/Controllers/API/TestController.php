<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestResourceCollection;
use App\Test;
use App\TestQuestion;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public $successStatus = 200;

    public function show_tests(Request $request)
    {
        if (isset($request->test_id)){
            $test=TestQuestion::where('test_id',$request->test_id)->where('question_number',$request->question_number)->get();
            return response()->json(['success' => new TestResourceCollection($test)], $this->successStatus);

        }

        $tests=Test::all();


        return response()->json(['success' => $tests], $this->successStatus);

    }
}

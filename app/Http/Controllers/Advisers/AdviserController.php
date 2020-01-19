<?php

namespace App\Http\Controllers\Advisers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdviserController extends Controller
{
    public function create()
    {
        return view('adviser.add-adviser');
    }
}

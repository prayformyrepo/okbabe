<?php

namespace App\Http\Controllers\API\DrugStore;

use App\Drug_request;
use App\Http\Controllers\Controller;
use App\Http\Resources\DrogRequestResource;
use App\Image;
use Carbon\Carbon;
use Facade\FlareClient\Time\Time;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class RequestController extends Controller
{
    public $successStatus = 200;

    public function request_drug(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpeg,jpg,png|max:5120|image',
            'description' => 'required',
            'address' => 'required',
            'lat' => 'required',
            'long' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $req = Drug_request::create([
            'user_id' => $this->user()->id,
            'description' => $request->description,
            'address' => $request->address,
            'lat' => $request->lat,
            'long' => $request->long
        ]);

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = Auth::user()->id . '_' . $req->id . '_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/drugs/'), $filename);


            $image = Image::create([
                'image_path' => '/images/drugs/' . $filename,
                'image_original' => $file->getClientOriginalName(),
                'image_type' => $file->getClientMimeType(),
                'thumbnail_path' => $file->getClientMimeType()
            ]);

             $req= Drug_request::updateOrCreate(
                [
                    'id' => $req->id
                ],
                [
                    'image_id' => $image->id
                ]);


        }

        return response()->json(['success' =>new DrogRequestResource($req)], $this->successStatus);

    }

    public function user()
    {
        return Auth::user();
    }
}

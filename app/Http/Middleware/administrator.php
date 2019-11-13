<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class administrator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user=Auth::user();
        $token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDkwM2ExNzUxOWU5ZTk0NmYwNTQwMzI0Y2U5ZjliMTE1N2M4NzNlYmI5N2ZlZTJlNzIyODc0ZDEyNTJmNzI5N2Q5NjgwNzZiNDIzNTdiY2YiLCJpYXQiOjE1NzMxOTQ5MDAsIm5iZiI6MTU3MzE5NDkwMCwiZXhwIjoxNjA0ODE3MzAwLCJzdWIiOiIyOCIsInNjb3BlcyI6W119.sbLWUVIV7Sj3kDM6rkqmvXeXGaWnBvdeKcUDhtD26QZWoVxshOsFZ2dSISN1lzpwxgKThbxvG19Gu8t0ew8LNfDDtlrZY9hS6LNwe8z8fJfdFrXixEXbNny7L8e8b9zIvMaxSN-ZOPtXx2V5zQ-rL0r_QOW3jkVmxwWoeUVIio0zIvx-O5O9kYoe3Q-7_Xh2joXm80VxteyXSk4CExgHJloqrzHfSQVxdUwgjjdXmgdtEF00HaFhJgBVh3Uj38OAUkJ1gpd8mWO25N2YxpkxMcWor5asUJEA034NKB70C07KDZcC0E39Rl1V9IYVQ2pusOYpvnM_9dVnsbyR5_y7iDAkDRBKQ4D6sQD29MXlSw0D3X2n0PR7Ii1z-C6ai4_rmR1o1KOlU5mqyxdAjaLPGgIa9SyCl5qhSRImfLylvDwa_OmAVyTOz9my104AXrVAHYHNOFgfNQqSbQjS510ZkjyfArNdjDJELEaiA3Z6sNCS-IyCG2r3zQdovzH_nxdUd0fSwpIC-1JG5E2x_Ttoqc4_kAdkUxyfCtpxTPwX4BL6fGjHdpy0kHmIk2WRfq4LYTzg_iyw9GEyEZJdALn8NjdmxT2RPAxPbZ1ELbtbOBj6K83hRKQyXh1J6frsueLsRonjS9SdN5J65sdS7JOk3yBo8DAD2MMifCW2kgjf2v8';
        if ($user->api_token!=$token){
            $error['message']='unauthorized';
            return response()->json(['error'=>$error],401);
        }

        return $next($request);
    }
}

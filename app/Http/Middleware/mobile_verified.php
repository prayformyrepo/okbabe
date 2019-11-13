<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class mobile_verified
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
        if ($user->mobile_verified_at==null) {
            $error['message']='mobile not verified';
            return response()->json(['error'=>$error],401);

        }
        return $next($request);
    }
}

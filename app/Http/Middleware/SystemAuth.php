<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Facade\FlareClient\Time\Time;

class SystemAuth
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
        $token = $request->header('Token');
        $verifyToken=Carbon::now()->format('dmyHi');;
        if($token!=$verifyToken)
            return response()->json(['error' => 'please resend your request'], 500);
        return $next($request);
    }
}

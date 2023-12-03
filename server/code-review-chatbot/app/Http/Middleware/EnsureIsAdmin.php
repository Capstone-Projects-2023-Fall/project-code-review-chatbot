<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class EnsureIsAdmin
{
    public function handle($request, Closure $next)
    {
        if (!Auth::check() || !Auth::user()->is_admin) {
            // Redirect to a 'not authorized' page or login if the user is not an admin
            return redirect('/');
        }

        return $next($request);
    }
}
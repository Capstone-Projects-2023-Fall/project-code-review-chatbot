<?php

namespace App\Http\Middleware;

use Closure;

class AfterResponseMiddleware
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }

    public function terminate($request, $response)
    {
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();


        $out->writeln(print_r($request));
    }
}
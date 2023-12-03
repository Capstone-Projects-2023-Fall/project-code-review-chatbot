<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;

use App\Http\Controllers\AdminController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

});

Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin-dashboard', [AdminController::class, 'dashboard'])->name('admin-dashboard');
});

Route::get('/authorize', function(Request $request) {
    $redirect_uri = $request->query('redirect_uri') ?? '';
    $response_type = $request->query('response_type') ?? '';
    $prompt = $request->query('prompt') ?? '';
    $state = $request->query('state') ?? '';


    $out = new \Symfony\Component\Console\Output\ConsoleOutput();
    $out->writeln('new request');
    $out->writeln($redirect_uri);
    $out->writeln($response_type);
    $out->writeln($prompt);

    if (Auth::user()) {
        $user = Auth::user(); 
        $token = $user->createToken('MyApp')-> plainTextToken;
        

        $returnquery = array(
            'access_token' => $token,
            'state' => $state,
        );



        return redirect()->away($redirect_uri .'#' . http_build_query($returnquery));
    } else {
        return view('auth/login', ['auth' => $request->fullUrl()]);
    }

    
});




<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;

use App\Http\Controllers\AdminController;

use App\Http\Controllers\UserController;

use Illuminate\Foundation\Auth\EmailVerificationRequest;



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

Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin-dashboard', [AdminController::class, 'dashboard'])->name('admin-dashboard');
    Route::get('/admin-dashboard/users', [AdminController::class, 'index'])->name('user-list');
    Route::get('/admin-dashboard/live-sessions', [AdminController::class, 'liveSessions'])->name('live-sessions');
});

Route::delete('/users/{user}', [AdminController::class, 'destroy'])->name('users.destroy');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

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

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::get('/dashboard', function () {
    // Only verified users may access this route...
})->middleware(['auth', 'verified']);


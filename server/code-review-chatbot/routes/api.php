<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;
use App\Http\Middleware\AfterResponseMiddleware;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', 'API\UserController@details');
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum', AfterResponseMiddleware::class])->post('/review', function (Request $request) {
    
    $out = new \Symfony\Component\Console\Output\ConsoleOutput();


    $out->writeln($request->input('prompt'));
    $out->writeln($request->input('model'));

    $finaltext = "";


    /*$mods = OpenAI::models()->list();


    foreach ($mods->data as $result) {
        $out->writeln($result->id); // 'gpt-3.5-turbo-instruct'
        // ...
    }*/


    /*
    $response = OpenAI::chat()->create([
        'model' => $request->input('model'),
        'messages' => [
            ['role' => 'user', 'content' => $request->input('prompt')],
        ],
    ]);


    foreach ($response->choices as $result) {
        $out->writeln($result->message->content);
        $finaltext .= $result->message->content;
       
    }*/
    $user = Auth::user();
    
    if (!$user->thread_id) {
        $threadres = OpenAI::threads()->create([]);
        DB::table('users')
              ->where('id', $user->id)
              ->update(['thread_id' => $threadres->id]);
    }

    $usermsg = OpenAI::threads()->messages()->create($user->thread_id, [
        'role' => 'user',
        'content' => ($request->input('prompt')),
    ]); 

    return 0;
});

Route::middleware('auth:sanctum')->get('/userinfo', function(Request $request) {
    if (Auth::user()) {
        $user = Auth::user(); 

        return response()->json([
            'name' => [$user->name],
            'email' => [$user->email],
        ]);
    } else {
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln('not authenticated');
        return response();
    }

});


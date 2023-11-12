<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;

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


Route::middleware('auth:sanctum')->post('/review', function (Request $request) {
    
    $out = new \Symfony\Component\Console\Output\ConsoleOutput();


    $out->writeln($request->input('prompt'));
    $out->writeln($request->input('model'));

    $finaltext = "";


    /*$mods = OpenAI::models()->list();


    foreach ($mods->data as $result) {
        $out->writeln($result->id); // 'gpt-3.5-turbo-instruct'
        // ...
    }*/



    $response = OpenAI::chat()->create([
        'model' => $request->input('model'),
        'messages' => [
            ['role' => 'user', 'content' => $request->input('prompt')],
        ],
    ]);


    foreach ($response->choices as $result) {
        $out->writeln($result->message->content);
        $finaltext .= $result->message->content;
       
    }

    
    $out->writeln($finaltext);



    return response()->json([
        'text' => $finaltext,
        'id' => $response['id'],
        'usage' => $response['usage']
    ]);
});

Route::middleware('auth:sanctum')->get('/userinfo', function(Request $request) {
    if (Auth::user()) {
        $user = Auth::user(); 

        return response()->json([
            'name' => [$user->name],
            'email' => [$user->email],
        ]);
    } else {
        return response(0);
    }

});


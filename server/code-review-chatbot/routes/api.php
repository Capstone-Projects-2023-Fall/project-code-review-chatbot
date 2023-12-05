<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;
use App\Http\Controllers\DBLogging;
use App\Http\Controllers\API\UserController;

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

Route::post('/log', [DBLogging::class, 'logData']);
Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', [UserController::class, 'details']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->post('/review', function (Request $request) {
    $out = new \Symfony\Component\Console\Output\ConsoleOutput();
    $userInput = $request->input('prompt');
    $model = $request->input('model');

    $conversationId = $request->input('conversation_id');
    $history = Cache::get('conversation_' . $conversationId, []);

    $historyLimit = 10;  
    $limitedHistory = array_slice($history, -1 * $historyLimit);

    $limitedHistory[] = ['role' => 'user', 'content' => $userInput];

    $response = OpenAI::chat()->create([
        'model' => $model,
        'messages' => $limitedHistory,
    ]);

    $finaltext = "";

    foreach ($response->choices as $result) {
        $out->writeln($result->message->content);
        $finaltext .= $result->message->content;
        $limitedHistory[] = ['role' => 'assistant', 'content' => $result->message->content];
    }

    Cache::put('conversation_' . $conversationId, $limitedHistory);

    $out->writeln($finaltext);

    return response()->json([
        'text' => $finaltext,
        'id' => $response['id'],
        'usage' => $response['usage'],
        'conversation_id' => $conversationId 
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
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln('not authenticated');
        return response();
    }

});


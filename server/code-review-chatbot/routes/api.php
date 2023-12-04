<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;
use App\Http\Controllers\DBLogging;
use App\Http\Controllers\API\UserController;
use App\Http\Middleware\AfterResponseMiddleware;
use App\Http\Controllers\AssistantController;

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

Route::middleware(['auth:sanctum', AfterResponseMiddleware::class])->post('/review', function (Request $request) {
    
    $out = new \Symfony\Component\Console\Output\ConsoleOutput();
    $userInput = $request->input('prompt');
    $model = $request->input('model');

    $conversationId = $request->input('conversation_id');
    //$history = Cache::get('conversation_' . $conversationId, []);

    //$history[] = ['role' => 'user', 'content' => $userInput];

    $finalText = "";



    /*
    $response = OpenAI::chat()->create([
        'model' => $model,
        'messages' => $history,
    ]);

    $finaltext = "";

    foreach ($response->choices as $result) {
        $out->writeln($result->message->content);
        $finaltext .= $result->message->content;
        $history[] = ['role' => 'assistant', 'content' => $result->message->content]; 
    }*/
    $user = Auth::user();

    //Cache::put('conversation_' . $conversationId, $history);

    $userThread = $user->thread_id;
    
    if (!$userThread) {
        $threadres = OpenAI::threads()->create([]);

        DB::table('users')
              ->where('id', $user->id)
              ->update(['thread_id' => $threadres->id]);

        $userThread = $threadres->id;
    }

    

    $userMsg = OpenAI::threads()->messages()->create($userThread, [
        'role' => 'user',
        'content' => ($request->input('prompt')),
    ]); 

    $assistId = AssistantController::get_assist_id();

    $threadRunResponse = OpenAI::threads()->runs()->create(
        threadId: $userThread, 
        parameters: [
            'assistant_id' => $assistId,
        ],
    );



    $lastMsg;
    do {
        sleep(1);

        $msgList = OpenAI::threads()->messages()->list($userThread, [
            'limit' => 1,
        ]);

        $lastMsg = $msgList->lastId;
        $out->writeln('lastmsg ' . $lastMsg);
        $out->writeln('usermsg ' . $userMsg->id);
    }
    while ($lastMsg == $userMsg->id);



    $response = OpenAI::threads()->messages()->retrieve(
        threadId: $userThread,
        messageId: $lastMsg,
    );

    foreach ($response->content as $result) {
        $out->writeln($result->text->value);
        $finalText .= $result->text->value;
       
    }
    
    $out->writeln($finalText);

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
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln('not authenticated');
        return response();
    }

});


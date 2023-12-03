<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;
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

    $finalText = "";


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


    $out->writeln('lets go ' . $lastMsg);
    $out->writeln('lets go thread' . $userThread);
    

    


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
        'text' => $finalText,
        'id' => $response->id,
        'usage' => ''//$response['usage']
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


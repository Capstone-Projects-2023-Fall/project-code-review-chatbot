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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/review', function (Request $request) {
    $out = new \Symfony\Component\Console\Output\ConsoleOutput();
    $promptCommand = $request->input('prompt'); // This is the command ("learnMore") from the user
    $model = $request->input('model');
    
    // The full prompt to send to OpenAI if the command is "learnMore"
    $learnMorePrompt = "Would like to learn more about the previous suggestion. In the same format, but more specific.";
    
    // Check if the incoming command is "learnMore"
    $isLearnMoreCommand = strcasecmp(trim($promptCommand), 'learnMore') === 0;
    
    // Retrieve the session ID if the incoming command is "learnMore"
    $sessionId = $isLearnMoreCommand ? $request->session()->get('openai_session_id', null) : null;

    // Make the API call
    $response = OpenAI::chat()->create([
        'model' => $model,
        'session_id' => $sessionId,
        'messages' => [
            ['role' => 'user', 'content' => $isLearnMoreCommand ? $learnMorePrompt : $promptCommand],
        ],
    ]);

    // Save the session ID for the next call if this is a continuing conversation
    if ($sessionId) {
        $request->session()->put('openai_session_id', $response['session_id']);
    }

    // Process the response and log it
    $finaltext = collect($response->choices)->map(function ($choice) {
        return $choice->message->content;
    })->join('');

    $out->writeln($finaltext);

    // Return the response
    return response()->json([
        'text' => $finaltext,
        'id' => $response['id'],
        'session_id' => $sessionId,
        'usage' => $response['usage']
    ]);
});

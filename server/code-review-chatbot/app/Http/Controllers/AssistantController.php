<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class AssistantController extends Controller
{
    static $assist_id;
    

    public static function get_assist_id(): string 
    {
        if (!self::$assist_id) {
            $assistresponse = OpenAI::assistants()->create([
                'instructions' => 'You are a code reviewer. When asked a question, please answer to help improve their code.',
                'name' => 'Code Reviewer',
                'tools' => [
                    [
                        'type' => 'code_interpreter',
                    ],
                ],
                'model' => 'gpt-4',
            ]);
            
            self::$assist_id = $assistresponse->id;
        }

        return self::$assist_id;
    }
}

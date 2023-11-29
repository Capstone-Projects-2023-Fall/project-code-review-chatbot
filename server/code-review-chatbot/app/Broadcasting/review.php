<?php

namespace App\Broadcasting;

use App\Models\User;
use App\Models\Chat;
use App\Models\ChatMessage;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class review implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public function __construct(
        private readonly User $user,
        private readonly string $token
    ) {
        //
    }

    public function broadcastAs(): string
    {
        return 'review.received';
    }

    public function broadcastWith(): array
    {
        $msglist = OpenAI::threads()->messages()->list($user->thread_id, [
            'limit' => 1,
        ]);
    
    
        $response = OpenAI::threads()->messages()->retrieve(
            threadId: $user->thread_id,
            messageId: $msglist->lastId,
        );
    
        foreach ($response->content as $result) {
            $out->writeln($result->text->value);
            $finaltext .= $result->text->value;
           
        }
        
        $out->writeln($finaltext);
    
    
    
        return response()->json([
            'text' => $finaltext,
            'id' => $response->id,
            'usage' => ''//$response['usage']
        ]);
    }

    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('chats.'.$this->user->id),
        ];
    }

}

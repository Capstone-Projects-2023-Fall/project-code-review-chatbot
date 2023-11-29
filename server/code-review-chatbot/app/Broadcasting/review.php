<?php

namespace App\Broadcasting;

use App\Models\User;

class review
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public function __construct(
        private readonly Chat $chat,
        private readonly ChatMessage $chatMessage
    ) {
        //
    }

    public function broadcastAs(): string
    {
        return 'message.sent';
    }

    public function broadcastWith(): array
    {
        return [
            'message' => $this->chatMessage->message,
            'sentBy' => [
                'id' => $this->chatMessage->sentBy->id,
                'name' => $this->chatMessage->sentBy->name,
            ]
        ];
    }

}

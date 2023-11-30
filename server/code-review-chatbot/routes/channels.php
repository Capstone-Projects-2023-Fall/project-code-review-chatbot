<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Broadcasting\PrivateChannel;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('review.{id}', function ($user, $id) {
    $out = new \Symfony\Component\Console\Output\ConsoleOutput();


    $out->writeln($request->input('prompt123'));

    return (int) $user->id === (int) $id;
});



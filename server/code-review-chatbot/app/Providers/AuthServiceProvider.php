<?php

namespace App\Providers;

use Laravel\Passport\Passport; 
use Illuminate\Support\Facades\Gate; 
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy', 
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies(); 

        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->subject('Verify Email Address CRC Laravel')
                ->line('Thanks for registering for the CodeReviewChatbot laravel page! Please use the button below to verify your email.')
                ->action('Verify Email', $url);
                ->line('If you have not requested verification no action is needed.')
        });
    }
}

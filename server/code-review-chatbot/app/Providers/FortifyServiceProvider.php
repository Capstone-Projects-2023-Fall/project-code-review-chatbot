<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\Contracts\LoginViewResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

    


    public function register(): void
    {
    
        $this->app->instance(LoginResponse::class, new class implements LoginResponse {
            public function toResponse($request)
            {
                $out = new \Symfony\Component\Console\Output\ConsoleOutput();
                $out->writeln($request);

                if (str_starts_with(request()->headers->get('referer'), request()->headers->get('origin') . '/authorize')) {
                    $out->writeln('redirect');
                    return redirect()->intended(request()->headers->get('referer'));
                } else {
                    return redirect(RouteServiceProvider::HOME);
                }
               
            }
        });

    
        $this->app->instance(RegisterResponse::class, new class implements RegisterResponse {
            //not working yet
            public function toResponse($request)
            {
                $out = new \Symfony\Component\Console\Output\ConsoleOutput();
                $out->writeln($request);

                if ($request->alias) {
                    return redirect()->intended($request->alias);
                } else {
                    return redirect(RouteServiceProvider::HOME);
                }
            }
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}

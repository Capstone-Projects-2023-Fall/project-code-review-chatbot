<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('log_data', function (Blueprint $table) {
            $table->text('timestamp');
            $table->text('platform')->nullable();
            $table->text('user')->nullable();
            $table->text('email')->nullable();
            $table->text('logs')->nullable();
            $table->text('hash')->nullable();
            $table->text('gitdiff')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('log_data');
    }
};

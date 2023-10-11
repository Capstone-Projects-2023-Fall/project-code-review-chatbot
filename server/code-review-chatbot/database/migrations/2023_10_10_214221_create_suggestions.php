<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Suggestions', function (Blueprint $table) {
            $table->id('ID');
            $table->string('FilePath');
            $table->integer('LineNumber');
            $table->string('SuggestionDescription');
            $table->foreignId('RepositoryID');
            $table->foreignId('UserID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Suggestions');
    }
};

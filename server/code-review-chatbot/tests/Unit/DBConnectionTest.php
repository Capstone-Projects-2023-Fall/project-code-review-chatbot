<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DBConnectionTest extends TestCase
{

    use RefreshDatabase;

    /**
     * Testing if Suggestions table is empty
     */
    public function test_suggestions_table_count_is_0(): void
    {
        $this->assertDatabaseCount('Suggestions', 0);
    }

    /**
     * Testing if database can confirm a specified user is missing
     */
    public function test_is_user_missing(): void
    {
        $this->assertDatabaseMissing('users', ['email' => 'randomEmail@notreal.com']);
    }

}

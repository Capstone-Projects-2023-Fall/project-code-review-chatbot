<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class YourController extends Controller
{
    public function logData(Request $request)
    {
        $request->validate([
            'log' => 'required|string',
            // other validation rules for gitdiff, token, hash
        ]);

        $formattedTimestamp = Carbon::now('America/New_York')->format('Y-m-d H:i:s');

        $checkboxData = [
            'timestamp' => $formattedTimestamp,
            'logs' => $request->log,
            'hash' => $request->hash,
            'gitdiff' => $request->gitdiff,
            'num_tokens' => $request->token
        ];

        try {
            DB::table('test')->insert($checkboxData);
            return response()->json(['message' => 'Successfully inserted data'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error inserting data'], 500);
        }
    }
}

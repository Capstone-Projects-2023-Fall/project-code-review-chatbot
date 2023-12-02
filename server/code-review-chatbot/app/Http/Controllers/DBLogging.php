<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DBLogging extends Controller
{
    public function logData(Request $request)
    {
        $request->validate([
            'log' => 'required|string',
            'platform' => 'required|string',
            'user' => 'nullable|string',
            'email' => 'nullable|string',
            'gitdiff' => 'nullable|string',
            'hash' => 'nullable|string'
        ]);

        $formattedTimestamp = Carbon::now('America/New_York')->format('Y-m-d H:i:s');

        $checkboxData = [
            'timestamp' => $formattedTimestamp,
            'platform' =>$request->platform,
            'user' => $request->user,
            'email' => $request->email,
            'logs' => $request->log,
            'hash' => $request->hash,
            'gitdiff' => $request->gitdiff
        ];

        try {
            DB::table('log_data')->insert($checkboxData);
            return response()->json(['message' => 'Successfully inserted data'], 200);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json(['error' => 'Error inserting data', 'details' => $e->getMessage()], 500);
        }
    }
}

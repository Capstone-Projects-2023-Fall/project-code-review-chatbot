<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class AdminController extends Controller
{
    public function dashboard()
    {
        $users = User::all(); // Fetch all users
        return view('admin-dashboard', compact('users'));
    }

    //function to verify a certian user
    public function verifyAUser(Request $request) {
        $validator = Validator::make($request->all(), [ 
            'email' => 'required|email', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $emailForValidation = $request;
    }

}

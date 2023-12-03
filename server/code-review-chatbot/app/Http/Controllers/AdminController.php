<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;


class AdminController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    //function to verify a certian user
    public function verifyAUser(Request $request) {
        $validator = Validator::make($request->all(), [ 
            'email' => 'required|email', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $emailForValidation = $request;
        $userToBeValidated = User::where('email', $emailForValidation);
    }

}
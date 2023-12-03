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
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function dashboard()
    {
        $users = User::all(); // Fetch all users
        $livesessionsCount = DB::table('sessions')->count();

        return view('admin-dashboard', compact('users', 'livesessionsCount'));
    }

    public function index()
    {
        $users = User::all();
        return view('index', compact('users'));
    }

    public function liveSessions()
    {
        $sessions = DB::table('sessions')->get(); 
        return view('liveSessions', compact('sessions'));
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    
        session()->flash('success', 'User deleted successfully.');
        return back();
    }

}

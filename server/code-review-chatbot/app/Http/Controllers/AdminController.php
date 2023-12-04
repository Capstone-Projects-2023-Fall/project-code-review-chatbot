<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

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

    public function logs(Request $request)
    {
        $search = $request->input('search');
    
        $logs = DB::table('log_data')
            ->when($search, function ($query) use ($search) {
                return $query->where('logs', 'like', "%{$search}%")
                             ->orWhere('user', 'like', "%{$search}%");
            })
            ->orderBy('timestamp', 'desc')
            ->get();
    
        return view('log', compact('logs'));
    }
    

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    
        session()->flash('success', 'User deleted successfully.');
        return back();
    }

}

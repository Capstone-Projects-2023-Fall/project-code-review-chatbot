<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Logs') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
                <!-- User Data Table -->
                <div class="overflow-x-auto">
                <div class="p-8">
                    <form action="{{ route('logs') }}" method="GET">
                        <input type="text" name="search" placeholder="Search logs..." class="px-4 py-2 border rounded-md">
                        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md">Search</button>
                    </form>
                </div>
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                <th class="px-4 py-3">Timestamp</th>
                                <th class="px-4 py-3">Platform</th>
                                <th class="px-4 py-3">User</th>
                                <th class="px-4 py-3">Email</th>
                                <th class="px-4 py-3">Log</th>
                                <th class="px-4 py-3">Hash</th>
                                <th class="px-4 py-3">Gitdiff</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            @foreach ($logs as $log)
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->timestamp }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->platform }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->user }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->email }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->logs }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->hash }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $log->gitdiff }}
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

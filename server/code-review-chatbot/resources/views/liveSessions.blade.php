<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Live Session List') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
                <!-- User Data Table -->
                <div class="overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                <th class="px-4 py-3">id</th>
                                <th class="px-4 py-3">user id</th>
                                <th class="px-4 py-3">ip address</th>
                                <th class="px-4 py-3">last activity</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            @foreach ($sessions as $session)
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 text-sm">
                                        {{ $session->id }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $session->user_id }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $session->ip_address }}
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        {{ $session->last_activity }}
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

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-6">
                <!-- Title and Total Number of Users -->
                <div class="mb-4">
                    <h3 class="text-lg font-semibold">Current User Database</h3>
                    <p>Total Users: {{ $users->count() }}</p>
                </div>

                <!-- User Data Table -->
                <table class="min-w-full border-collapse block md:table">
                    <thead class="block md:table-header-group">
                        <tr class="border border-gray-300 md:border-none block md:table-row absolute -top-full md:static">
                            <th class="bg-gray-100 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">Name</th>
                            <th class="bg-gray-100 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">Email</th>
                        </tr>
                    </thead>
                    <tbody class="block md:table-row-group">
                        @foreach ($users as $user)
                            <tr class="bg-white border border-gray-300 md:border-none block md:table-row">
                                <td class="p-2 md:border md:border-gray-300 block md:table-cell">{{ $user->name }}</td>
                                <td class="p-2 md:border md:border-gray-300 block md:table-cell">{{ $user->email }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <x-admin />
            </div>
        </div>
    </div>
</x-app-layout>

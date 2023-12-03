<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center space-x-4"> <!-- Flex container with horizontal spacing -->
                    <!-- User Count Box -->
                    <a href="{{ route('user-list') }}" class="w-1/4 max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Total Users</h5>
                        <p class="font-normal text-gray-700">{{ $users->count() }}</p>
                    </a>

                    <!-- Live Sessions Box -->
                    <a href="{{ route('live-sessions') }}" class="w-1/4 max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Current Live Sessions</h5>
                        <p class="font-normal text-gray-700">{{ $livesessionsCount }}</p>
                    </a>
                <x-admin />
            </div>
        </div>
    </div>
</x-app-layout>

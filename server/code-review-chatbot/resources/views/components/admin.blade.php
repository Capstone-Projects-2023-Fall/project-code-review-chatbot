<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
    <title>Fancy Page</title>
</head>
<body class="bg-gray-100 dark:bg-gray-900">
    
    <div class="bg-gray-200 dark:bg-gray-800 bg-opacity-25 p-6 lg:p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <!-- Option 1 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    <a href="https://status.openai.com/" class="text-indigo-600 dark:text-indigo-400 hover:underline">OpenAI Status</a>
                </h2>
                <!-- No additional text -->
            </div>

            <!-- Option 2 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    <a href="https://laracasts.com" class="text-indigo-600 dark:text-indigo-400 hover:underline">OPTION2</a>
                </h2>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Dive into an interactive demo showcasing our capabilities.
                </p>
                <a href="https://laracasts.com" class="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline">
                    Watch Demo
                </a>
            </div>

            <!-- Option 3 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    <a href="https://tailwindcss.com/" class="text-indigo-600 dark:text-indigo-400 hover:underline">OPTION3</a>
                </h2>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Explore the documentation and customize your experience.
                </p>
                <!-- Add additional content as needed for Option 3 -->
            </div>

            <!-- Verification Button -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Verification
                </h2>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Click the button below for verification.
                </p>
                <button class="mt-4 inline-block bg-indigo-600 dark:bg-indigo-400 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Verify Now <!-- Interactable Button So place any link for verifcation instead of "Verify Now" -->
                </button>
            </div>
        </div>
    </div>
</body>
</html>

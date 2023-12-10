---
title: Front End Class Documentation
description: Front End Class Documentation
hide_table_of_contents: true
sidebar_position: 2
---

# Frontend Class Documentation


## function handleResponse(message)

<details open="True"> 
<summary>Takes any non-code-review response from ChatGPT, and converts it into formatted HTML with unique formatting for code blocks, and displays it in the extension webview. </summary>

### Parameters
- #### String message
    - The response from chatGPT.


</details>

## function handleCodeReviewResponse(message)

<details open="True"> 
<summary>Takes a code review response from ChatGPT, converts it into HTML, and displays it in the extension webview.</summary>

### Parameters
- #### String message
    - The response from chatGPT.


</details>

## function parseSuggestions(response)

<details open="True"> 
<summary>Processes the input response and extracts individual suggestions, each consisting of a title and a description. The response string is expected to have a specific format delineated by specific delimiters for titles and descriptions. </summary>

### Parameters
- #### String response
    - The input string containing a collection of suggestions separated by delimiters.

### Returns
- #### Object[ ] suggestions
    - An array containing structured suggestion objects, each consisting of a title and description.


</details>

## function renderSuggestions(response)

<details open="True"> 
<summary>Generates HTML elements to display a list of suggestions derived from a parsed response. It takes an array of structured suggestion objects and creates a visual representation of these suggestions, including titles and descriptions, to be rendered within the extension webview.</summary>

### Parameters
- #### String response
    - The input string containing a collection of suggestions separated by delimiters.

</details>


## function renderImageResponse(imageSrc)

<details open="True"> 
<summary> generates HTML to display an image as a response within the extension webview. It receives an image source URL and dynamically creates HTML elements to showcase the image within a specified container.</summary>

### Parameters
- #### String response
    - The URL source of the image to be displayed as a response.

</details>
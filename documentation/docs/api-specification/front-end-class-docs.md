---
title: Front End Class Documentation
description:  Front End Class Documentation
hide_table_of_contents: true
sidebar_position: 2
---

# Frontend Class Documentation

## ExtensionContainer

<details open="True"> 
<summary>The ExtensionContainer component encapsulates the entire extension interface.</summary>

### Data fields
- #### object SuggestionList
    - Displays component with ChatGPT suggestions for the specific file and commit

### Methods 
- #### setCodePrompt(string Prompt)
  - Reset the code prompt used to initialize the SuggestionList



</details>

## SuggestionList

<details open="True">
<summary>The SuggestionList component is responsible for displaying an array of ListItems corresponding to suggestions from ChatGPT.</summary>

### Data fields
- #### array ListItem
    - List of code improvement suggestions for the specific file and commit

### Methods
- No methods

</details>

## ListItem

<details open="True">
<summary>The ListItem component shows a ChatGPT suggestion. It consists of the title of the suggestion and a dropdown icon to display the DropDownContainer component for the corresponding suggestion.</summary>

### Data fields
- #### string Title
  - The highlighted title of the suggestion from GPT
- #### object DropDownContainer
  - Dropdown description of the suggestion

### Methods
- No methods


</details>

## DropDownContainer
<details open="True">
<summary>The DropDownContainer component contains information about a suggestion and is hidden until the dropdown button in the ListItem component is triggered.</summary>

### Data fields
- #### string Description
  - The unhighlighted details of hte suggestion from GPT
- #### boolean isOpen
  - Determines if the dropdown container is displayed or not; False is default

### Methods

- #### closeContainer()
  - Sets the display status of the container to be not displayed
- #### openContainer ()
  - Sets the display status of the container to be displayed


</details>

## InputBar

<details open="True">
<summary>The InputBar component is a box in which a user can input a prompt to ask ChatGPT directly.</summary>

### Data fields

- No data fields

### Methods
- #### getInput()
    - returns the user input

</details>

## IconButton

<details open="True">
<summary>The IconButton component creates and formats a clickable icon that acts as a button. This button will perform a certain action.</summary>

### Data fields
- #### object Icon
    - The icon to be displayed as a button
- #### integer Size
    - The width and height of the button

### Methods
- No methods

</details>



## ExplainButton
<details open="True">
<summary>The ExplainButton component belongs to a ListItem component and prompts ChatGPT to explain how to implement the corresponding suggestion and why it is important to implement it.</summary>

### Data fields

- #### No data fields

### Methods
- #### setPrompt(string Prompt)
  - Set the prompt that the explain button should trigger
- #### sendPrompt()
  - Send the prompt to GPT API

</details>

## LocateButton

<details open="True">
<summary>The LocateButton component belongs to a ListItem component and prompts ChatGPT to provide the code sections within the analyzed file that are related to the suggestion.</summary>

### Data fields

- #### No data fields

### Methods
- #### setPrompt(string Prompt)
  - Set the prompt that the locate button should trigger
- #### sendPrompt()
  - Send the prompt to GPT API


</details>

## CheckButton

<details open="True">
<summary>The CheckButton component belongs to a ListItem component and displays a checkmark if clicked, denoting that the corresponding suggestion has been implemented</summary>

### Data fields
- No data fields

### Methods
- #### setCheck(boolean isCheck)
  - Set the button to checked or unchecked

</details>


## ResponseContainer

<details open="True">
<summary>The ResponseContainer component displays a list of Response components and appends the most recent one to the end of the container.</summary>

### Data fields
- #### array ResponseList
  - list of Response objects for the corresponding message thread


### Methods
- #### appendResponse(object Response)
  - Appends the most recent GPT response to the list

</details>

## Response 

<details open="True">
<summary>The Response component contains ChatGPT's response to an InputBar prompt or a LocateButton/ExplainButton trigger.</summary>

### Data fields
- #### string Response
  - The text response received from ChatGPT
  
### Methods
- No methods

</details>
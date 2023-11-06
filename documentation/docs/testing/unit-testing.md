---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.

## Front End

### Setting Authentication Info
* Test setting of API key
  * Input / User Action
    * API Key is set by user or server
  * Expected Result
    * setAuthenticationInfo() is called once with a parameter representing API key

### Resetting Conversation
* Reset conversation between user and ChatGPT
  * Input / User Action
    * User requests that previous interactions with ChatGPT are forgotten
  * Expected Result
    * resetConversation() is called once, causing the conversation to be reset

### gets settings
* Retreival of user settings
  * Input / User Action
    * Extension is able to find user settings to adjust to user's preferences
  * Expected Result
    * getSettings() is called once and retreives the user's settings

### Search Functionality
* Input user's code with parameters to elicit a certain kind of response out of ChatGPT
  * Input / User Action
    * Code is sent to ChatGPT with a prompt to provoke a specific response
  * Expected Result
    * search() is called once

### set settings
* Save cahnges user has made to settings within the extension
  * Input / User Action
    * User's settings are saved to the extension
  * Expected Result
    * setSettings() is called once with a parameter that contains info on changes made to settings

## Back End

### function test_suggestions_table_count_is_0()
  * Test: Checks if the suggestions table has a count of 0
  * Returns: True if there are no entries in the suggestions table

### function test_is_user_missing()()
  * Test: If a specific user is missing from the suggestions table
  * Returns: True if the specified user_id is not found as an entry within the suggestions table

# Class Diagram

![image](/documentation/static/img/ClassDiagram.png)

## ChatGPTExtension
**Represents the main class for the ChatGPT extension. It interacts with the chat interface, backened server, and the ChatGPT API.**

## ChatInterface
**Represents the user interface for chat interactions. It communicates with the extension to send and reciec messages.**

## Backend Server
**Represents the backened server responsivble for storing and managing convesations and communicates with the extensions to store and retrieve data.**

## Backend Storage
**Holds the API key and recieves/sends the requests the the Backened Server.**

## ChatGPT API
**Represents the external API used to interacts with the ChatGPT model, which handles sending requests to and receiving responses from the external API.**
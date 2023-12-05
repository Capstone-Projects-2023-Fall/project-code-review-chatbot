//Message area
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat_input_form');
const chatInput = document.querySelector('.user_input');

//getting the Vscode API
const vscode = acquireVsCodeApi();

const createChatMessageElement = (message) => 
`
    <div class="message message_${message.sender === 'User' ? 'user' : 'ChatGPT'}">
        <div class="message-sender">${message.sender}</div>
	    <div class="message-text">${message.text}</div>
    </div>
`;

//from user to ChatGPT
const sendMessage = (e) =>{
    e.preventDefault();



    //from the message
    const messageUser = {
        sender : 'User',
        text:chatInput.value,
    };

    //update the html when the user enters
    chatMessages.innerHTML += createChatMessageElement(messageUser);
    
    
    //send a message to the extension
    vscode.postMessage({
        command: 'message',
        text: chatInput.value
    });


    //wait for it to come back
    response = waitForMessage();

    //from the message
    const messageGPT= {
        sender : 'ChatGPT',
        text: chatInput.value,
    };

    //update the html when the ChatGPT responce back
    chatMessages.innerHTML += createChatMessageElement(messageGPT);
    
    //auto clear the input box
    chatInputForm.reset();

    //scroll down after the search
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

const sendPromptToExtension = (message) => {
        
};

const waitForMessage = () => {
    window.addEventListener('response', event => {return event.text;});
};

//waiting for the user to click the send button
chatInputForm.addEventListener('submit',sendMessage);
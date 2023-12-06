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
        text: chatInput.value,
    });

    //auto clear the input box
    chatInputForm.reset();
};

window.addEventListener('message', event => {
    const message = event.data;
    receiveMessage(message.text);
});

function receiveMessage(message){
    //get the GPT responce set up
    const messageGPT={
        sender : 'ChatGPT',
        text: message,
    };

    //update the html when the ChatGPT response back
    chatMessages.innerHTML += createChatMessageElement(messageGPT);
}

//waiting for the user to click the send button
chatInputForm.addEventListener('submit',sendMessage);
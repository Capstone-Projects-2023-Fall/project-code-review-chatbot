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

    //check for empty enter
    if(messageUser.text !== undefined && messageUser.text !== ''){
        //update the html when the user enters
        chatMessages.innerHTML += createChatMessageElement(messageUser);
        
        //send a message to the extension
        vscode.postMessage({
            command: 'message',
            text: chatInput.value,
        });
    
        //clear the input box
        chatInputForm.reset();
    }
};

function updateHtmlFromGPT(message){
    //get the GPT responce set up
    const messageGPT={
        sender : 'ChatGPT',
        text: message,
    };

    //update the html when the ChatGPT response back
    chatMessages.innerHTML += createChatMessageElement(messageGPT);
}

function askUserToSignIn(){
    const response = "We have detected that you have not sign in yet, in order to use our service you must sign in.<br> A sign-in window prompt will appear shortly";

    const messageGPT={
        sender : 'ChatGPT',
        text: response,
    };

    chatMessages.innerHTML += createChatMessageElement(messageGPT);
}

function restoreHmtl(){

}

window.addEventListener('message', event => {
    const message = event.data;

    switch (message.command) {
        case "message":
            updateHtmlFromGPT(message.text);
            break;
        case "alert":
            askUserToSignIn();
            break;
    }

});



//waiting for the user to click the send button
chatInputForm.addEventListener('submit',sendMessage);
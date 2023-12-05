//Message area
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat_input_form');
const chatInput = document.querySelector('.user_input');

//getting the Vscode API
const vscode = acquireVsCodeApi();

const createChatMessageElement = (message) => 
`
    <div class="message message_${message.sender === 'User' ? 'user' : 'chatGPT'}">
        <div class="message-sender">${message.sender}</div>
	    <div class="message-text">${message.text}</div>
    </div>
`;

//from user to ChatGPT
const sendMessage = (e) =>{
    e.preventDefault();

    const messageUser = {
        sender : 'User',
        text:chatInput.value,
    };

    const messageFromUser = 

    //update the html when the user enters
    chatMessages.innerHTML += createChatMessageElement(messageUser);
    
    //auto clear
    chatInputForm.reset();

    //calling the function in extension
    Response = search(message.text,true,false,false);

    const messagegpt= {
        sender : 'chatGPT',
        text: Response,
    };

    //update the html when the ChatGPT responce back
    chatMessages.innerHTML += createChatMessageElement(messagegpt);

    //scroll down after the search
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

//waiting for the user to click the send button
chatInputForm.addEventListener('submit',sendMessage);
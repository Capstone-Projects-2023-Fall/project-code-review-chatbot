//Message area
const chatMessages = document.querySelector('.chatbox_message');
const chatInputForm = document.querySelector('.chat_input_form');
const chatInput = document.querySelector('.user_input');

const createChatMessageElement = (message) => `
    <div class="message_${message.sender === 'user' ? 'user' : 'chatGPT'}">${message.text}</div>
`;

//from user to ChatGPT
const sendMessage = (e) =>{
    e.preventDefault();

    const message = {
        sender : 'user',
        text:chatInput.value,
    };

    //update the html
    chatMessages.innerHTML += createChatMessageElement(message);

    // TODO: route it to send, do it  here

};

//waiting for the user to click the send button
chatInputForm.addEventListener('submit',sendMessage);

//const receiveMessage()
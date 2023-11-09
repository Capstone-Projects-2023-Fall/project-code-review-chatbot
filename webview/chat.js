//buttons
const enterButton = document.querySelector('enter_button');
const clearButton = document.querySelector('clear_button');

//Message area
const chatMessages = document.querySelector('chatbox_message_area');
const chatInput = document.querySelector('user_input');

const createChatMessageElement = (message) => 
`
    <div class="message ${message.sender === 'user' ? 'user-messages_item' : 'chatGPT-messages_item'}>
        <div class="message">${message.text}</div>
        <div class="message_time">${message.timestamp}</div>
    </div>
`;

const sendMessage = (e) =>{
    e.preventDefault()

    const timestamp = new Date().toLocaleTimeString('en-US' , {hour:"numeric",minute:"numeric", hour12:true})
    const message = {
        sender : 'user',
        text:chatInput.value,
        timestamp,
    };

    //update the html
    chatMessages.innerHTML += createChatMessageElement(message);

    //reset the inputbox
};

chatInput.addEventListener('submit',sendMessage);

//r const receiveMessage()


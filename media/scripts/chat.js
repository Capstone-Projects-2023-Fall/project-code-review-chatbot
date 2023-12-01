//buttons
const enterButton = document.querySelector('.enter_button');

//Message area
const chatMessages = document.querySelector('.chatbox_message');
const chatInputForm = document.querySelector('.chat_input_form');
const chatInput = document.querySelector('.user_input');

const createChatMessageElement = (message) => `
    <div class="message message_${message.sender === 'user' ? 'user' : 'chatGPT'}">${message.text}</div>
`;

const sendMessage = (e) =>{
    e.preventDefault();

    const message = {
        sender : 'user',
        text:chatInput.value,
    };

    //update the html
    chatMessages.innerHTML += createChatMessageElement(message);

    //reset the inputbox
    chatInputForm.reset();
};

//waiting for the user to click the send button
chatInputForm.addEventListener('submit',sendMessage);

// @ts-ignore 

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
  const vscode = acquireVsCodeApi();

  let response = '';

  // Handle messages sent from the extension to the webview
  window.addEventListener("message", (event) => {
    const message = event.data;
    
    switch (message.type) {
      case "addResponse": {
        response = message.value;
        setResponse();
        break;
      }
      case "loadResponse": {
        document.getElementById("response").innerHTML = `
        <br>
        <div id="spin-animation">
          <img src="${message.value}" class="center" style="opacity:0.5">
        </div>`;
        break;
      }
    }
  });

  function fixCodeBlocks(response) {
  // Use a regular expression to find all occurrences of the substring in the string
  const REGEX_CODEBLOCK = new RegExp('\`\`\`', 'g');
  const matches = response.match(REGEX_CODEBLOCK);

  // Return the number of occurrences of the substring in the response, check if even
  const count = matches ? matches.length : 0;
  if (count % 2 === 0) {
    return response;
  } else {
    // else append ``` to the end to make the last code block complete
    return response.concat('\n\`\`\`');
  }

  }

  function setResponse() {
        var converter = new showdown.Converter({
          omitExtraWLInCodeBlocks: true, 
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          simpleLineBreaks: true
        });
        response = fixCodeBlocks(response);
        html = converter.makeHtml(response);
        document.getElementById("message_chatGPT").innerHTML += html;

        var preCodeBlocks = document.querySelectorAll("pre code");
        for (var i = 0; i < preCodeBlocks.length; i++) {
            preCodeBlocks[i].classList.add(
              "p-2",
              "my-2",
              "block",
              "overflow-x-scroll"
            );
        }
        
        var codeBlocks = document.querySelectorAll('code');
        for (var i = 0; i < codeBlocks.length; i++) {
            // Check if innertext starts with "Copy code"
            if (codeBlocks[i].innerText.startsWith("Copy code")) {
                codeBlocks[i].innerText = codeBlocks[i].innerText.replace("Copy code", "");
            }

            codeBlocks[i].classList.add("inline-flex", "max-w-full", "overflow-hidden", "rounded-sm", "cursor-pointer");

            codeBlocks[i].addEventListener('click', function (e) {
                e.preventDefault();
                vscode.postMessage({
                    type: 'codeSelected',
                    value: this.innerText
                });
            });

            const d = document.createElement('div');
            d.innerHTML = codeBlocks[i].innerHTML;
            codeBlocks[i].innerHTML = null;
            codeBlocks[i].appendChild(d);
            d.classList.add("code");
        }

        microlight.reset('code');

        //document.getElementById("response").innerHTML = document.getElementById("response").innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  }

  // Listen for keyup events on the prompt input element
  chatInput.addEventListener('keyup', function (e) {
    // If the key that was pressed was the Enter key
    if (e.keyCode === 13) {
      vscode.postMessage({
        type: 'prompt',
        value: this.value
      });
    }
  });
})();

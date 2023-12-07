// @ts-ignore

//const { title } = require("process");

(function () {
  const vscode = acquireVsCodeApi();
  let response = '';

  /*
  document.getElementById('clear-button').addEventListener('click', () => {
    vscode.postMessage({
      type: 'clearConversation'
    });
  });*/

  document.getElementById('learn-more-button').addEventListener('click', () => {
    event.stopPropagation(); 
    vscode.postMessage({
      type: 'learnMore'
    });
  });

  document.getElementById('askButton').addEventListener('click', () => {
    vscode.postMessage({
      type: 'askGPT'
    });
  });


  document.getElementById('quickFixButton').addEventListener('click', () => {
    console.log("button clicked in view");
    vscode.postMessage({
      type: 'quickFix'
    });
  });

  document.getElementById('conversationWithChatGPT').addEventListener('click', () => {
    console.log("button clicked in view");
    vscode.postMessage({
      type: 'conversationWithChatGPT'
    });
  });

  window.addEventListener("message", (event) => {
    const message = event.data;
    switch (message.type) {
      case "prompt":
        handlePrompt(message);
        break;
      case "addResponse":
        //handleResponse(message);
        break;
      case "codeReviewCommandExecuted":
        handleCodeReviewResponse(message);
        break;
      case "clearResponse":
        response = '';
        break;
      case "setPrompt":
        if (message.value !== undefined) {
          document.getElementById("prompt-input").value = message.value;
        }
        break;
      case "loadResponse":
        renderImageResponse(message.value);
        break;
      case 'responseDone':
        if (Array.isArray(message.data)) {
          message.data.forEach(item => {
            if (item.isCodeReview) {
              handleCodeReviewResponse(item.userPrompt, item.gptResponse);
            } else {
              handleResponse(item.userPrompt, item.gptResponse);
            }
          });

          // Scroll to the bottom of the response div
          const responseDiv = document.getElementById('response');
          const lastResponseElement = responseDiv.lastElementChild;
          if (lastResponseElement) {
            lastResponseElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        }
        break;
      case 'clearResponse':
        document.getElementById('response').innerHTML = '';
        break;
    }
  });


  function handleResponse(prompt, response) {
    console.log("message type received by handleResponse:");
    console.log(response);

    // Create elements for displaying the prompt and response
    const promptElement = document.createElement("div");
    promptElement.classList.add("chat-prompt");
    promptElement.textContent = prompt;


    const output = document.createElement("div");
    output.classList.add("chat-response");
    const converter = new showdown.Converter({
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      simpleLineBreaks: true
    });
    //response = fixCodeBlocks(response);
    const html = converter.makeHtml(response);
    output.innerHTML = html;

    // Append the new content to the response div without clearing existing content
    document.getElementById("response").appendChild(promptElement);
    document.getElementById("response").appendChild(output);
    //document.getElementById("response").innerHTML = html;


    const preCodeBlocks = document.querySelectorAll("pre code");
    for (let i = 0; i < preCodeBlocks.length; i++) {
      preCodeBlocks[i].classList.add("p-2", "my-2", "block", "overflow-x-scroll");
    }

    const codeBlocks = document.querySelectorAll('code');
    for (let i = 0; i < codeBlocks.length; i++) {
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

      const divElement = document.createElement('div');
      divElement.innerHTML = codeBlocks[i].innerHTML;
      codeBlocks[i].innerHTML = null;
      codeBlocks[i].appendChild(divElement);
      divElement.classList.add("code");
    }


    microlight.reset('code');
  }

  function handleCodeReviewResponse(prompt, response) {

    const promptElement = document.createElement("div");
    promptElement.classList.add("chat-prompt");
    promptElement.textContent = prompt;

    const output = document.createElement("div");
    output.classList.add("chat-response");
    const converter = new showdown.Converter({
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      simpleLineBreaks: true
    });

    //response = fixCodeBlocks(response);

    const html = converter.makeHtml(response);
    output.innerHTML = html;

    // Append the prompt and response elements to the response div
    document.getElementById("response").appendChild(promptElement);
    document.getElementById("response").appendChild(output);

    const preCodeBlocks = document.querySelectorAll("pre code");
    for (let i = 0; i < preCodeBlocks.length; i++) {
      preCodeBlocks[i].classList.add("p-2", "my-2", "block", "overflow-x-scroll");
    }

    const codeBlocks = document.querySelectorAll('code');
    for (let i = 0; i < codeBlocks.length; i++) {
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

      const divElement = document.createElement('div');
      divElement.innerHTML = codeBlocks[i].innerHTML;
      codeBlocks[i].innerHTML = null;
      codeBlocks[i].appendChild(divElement);
      divElement.classList.add("code");
    }

    console.log(response);
    console.log("^ before renderSuggestions is called");
    document.getElementById("response").innerHTML = '';
    renderSuggestions(response);


    microlight.reset('code');
  }

  function renderImageResponse(imageSrc) {
    document.getElementById("response").innerHTML = `
      <br>
      <div id="spin-animation">
        <img src="${imageSrc}" class="center" style="opacity:0.5">
      </div>`;
  }


  function renderSuggestions(response) {
    console.log("start renderSuggestions");
    const suggestions = parseSuggestions(response);
    const suggestionsContainer = document.getElementById("response");

    if (!suggestionsContainer || suggestions.length === 0) {
      return;
    }

    const form = document.createElement('form');
    const list = document.createElement('ol');

    const userChanges = new Array(suggestions.length).fill(""); // Initialize with empty strings for each suggestion

    // For each suggestion, create the suggestion UI
    suggestions.forEach((suggestion, index) => {
      const listItem = document.createElement("li");
      const titleContainer = document.createElement("div");
      const titleElement = document.createElement("h3");
      const caretButton = document.createElement("button");
      const descriptionElement = document.createElement("div");
      const checkbox = document.createElement("input");
      const checkboxContainer = document.createElement("div");
      const findIssueButton = document.createElement("button");

      listItem.classList.add("my-3");
      titleContainer.classList.add("title");

      titleElement.textContent = suggestion.title;
      titleElement.classList.add("title-element", "title-left");
      checkboxContainer.classList.add("checkboxContainer", "title-element", "title-left");

      checkbox.type = "checkbox";
      checkbox.id = `checkbox-${index}`;
      checkbox.name = "checkbox-group";
      checkboxContainer.appendChild(checkbox);

      caretButton.type = "button";
      caretButton.textContent = "﹀";
      descriptionElement.classList.add("hidden", "description");
      caretButton.classList.add("title-element", "title-right");

      function setMaxHeight() {
        descriptionElement.style.maxHeight = descriptionElement.scrollHeight + 'px';
      }

      setMaxHeight();

      caretButton.addEventListener("click", () => {
        descriptionElement.classList.toggle("hidden");
        caretButton.textContent = descriptionElement.classList.contains("hidden") ? "﹀" : "︿";
        descriptionElement.style.display = descriptionElement.classList.contains("hidden") ? "none" : "block";
        descriptionElement.classList.toggle('visible');
        if (descriptionElement.classList.contains('visible')) {
          setMaxHeight();
        } else {
          descriptionElement.style.maxHeight = '0';
        }
      });

      // Handle checkbox change
      checkbox.addEventListener("change", () => {
        const checkboxState = checkbox.checked ? "was checked" : "was NOT checked";
        userChanges[index] = `The box for ${suggestion.title} with checkboxID of: ${checkbox.id} ${checkboxState}`;

        // Optionally, post this data back to your extension
        vscode.postMessage({
          type: 'checkboxChange',
          userChanges: userChanges
        });
      });

      findIssueButton.type = "button";
      findIssueButton.textContent = "⌕";
      findIssueButton.classList.add("title-element", "title-right");

      findIssueButton.addEventListener('click', (function (title) {
        return function () {
          const issueTitle = title.textContent;
          console.log("issueTitle:", issueTitle);

          vscode.postMessage({
            type: 'findIssue',
            issueTitle: issueTitle
          });
        };
      })(titleElement)); // Pass titleElement to the closure


      descriptionElement.textContent = suggestion.description;
      descriptionElement.classList.add("hidden");

      checkboxContainer.appendChild(checkbox);
      titleContainer.appendChild(checkboxContainer);
      titleContainer.appendChild(titleElement);
      titleContainer.appendChild(caretButton);
      titleContainer.appendChild(findIssueButton);
      listItem.appendChild(titleContainer);
      listItem.appendChild(descriptionElement);
      list.appendChild(listItem);
    });

    form.appendChild(list);
    suggestionsContainer.appendChild(form);
    console.log("done rendering suggestions");
  }


  function parseSuggestions(response) {
    console.log("start parsing suggestions");
    console.log(response);
    console.log("^ this is response right before parsing");
    const suggestionDelimiter = '**********';
    const lines = response.split('\n');
    const suggestions = [];

    let currentTitle = '';
    let currentDescription = '';

    for (const line of lines) {
      if (line.startsWith('~~~')) {
        // A new suggestion title
        if (currentTitle) {
          // Save the previous suggestion
          suggestions.push({ title: currentTitle, description: currentDescription });
        }
        // Remove the leading "~~~" and trailing "~~~"
        currentTitle = line.slice(3, -3);
        currentDescription = '';
      } else if (line === suggestionDelimiter) {
        // Save the description when a delimiter is encountered
        if (currentTitle) {
          suggestions.push({ title: currentTitle, description: currentDescription });
          currentTitle = '';
          currentDescription = '';
        }
      } else {
        // A description line
        currentDescription += line + '\n';
      }
    }

    // Handle the last suggestion
    if (currentTitle) {
      suggestions.push({ title: currentTitle, description: currentDescription });
    }

    console.log("end parsing suggestions");
    return suggestions;
  }

  // Listen for keyup events on the prompt input element
  document.getElementById('prompt-input').addEventListener('keyup', function (e) {
    // If the key that was pressed was the Enter key
    if (e.keyCode === 13) {
      vscode.postMessage({
        type: 'prompt',
        value: this.value
      });
    }
  });
})();
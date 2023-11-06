// @ts-ignore 

import { log } from "console";

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
  const vscode = acquireVsCodeApi();

  let response = '';

  document.getElementById('learn-more-button').addEventListener('click', () => {
    // Send a message to your extension to execute the command
    vscode.postMessage({
      type: 'learnMore'
    });

  });

  // Handle messages sent from the extension to the webview
  window.addEventListener("message", (event) => {
    const message = event.data;
    switch (message.type) {
      case "addResponse": {
        response = message.value;
        setResponse();
        break;
      }
      case "clearResponse": {
        response = '';
        break;
      }
      case "setPrompt": {
        if (message.value !== undefined) {
          document.getElementById("prompt-input").value = message.value;
        }
        break;
      }

      case "codeReviewCommandExecuted": {
        document.getElementById("test-p").innerHTML = `codeReview selected`;
        response = message.value;
        setResponse();
        //renderSuggestions(response);
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

  function renderSuggestions(response) {
    console.log("started rendering suggestions");
    const suggestions = parseSuggestions(response);
    //const precodeSuggestions = fixCodeBlocks(suggestions);
    const suggestionsContainer = document.getElementById("response");

    if (!suggestionsContainer || suggestions.length === 0) {
      return;
    }

    const header = document.createElement('h3');
    header.innerHTML = `Before you commit your code, here are some suggestions on how your code can be improved:`;

    // Create the list
    const list = document.createElement('ol');

    // Add each suggestion as a list item
    suggestions.forEach((suggestion) => {
      const listItem = document.createElement("li");
      const titleElement = document.createElement("strong");
      const caretButton = document.createElement("button");
      const descriptionElement = document.createElement("div");

      listItem.classList.add("my-3");

      titleElement.textContent = suggestion.title;
      caretButton.textContent = "▼"; // Down arrow for dropdown

      // Add click event to toggle description visibility
      caretButton.addEventListener("click", () => {
        descriptionElement.classList.toggle("hidden");
        if (descriptionElement.classList.contains("hidden")) {
          caretButton.textContent = "▼";
        } else {
          caretButton.textContent = "▲"; // Up arrow when description is visible
        }
      });


      // Set up description element
      descriptionElement.textContent = suggestion.description;
      descriptionElement.classList.add("hidden"); // Hide by defaul

      listItem.appendChild(titleElement);
      listItem.appendChild(caretButton);
      listItem.appendChild(descriptionElement);
      //listItem.appendChild(document.createTextNode(suggestion.description));
      list.appendChild(listItem);
    });
    suggestionsContainer.appendChild(list);
    console.log("done rendering suggestions");
  }

  function parseSuggestions(response) {
    console.log("start parsing suggestions");
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
    document.getElementById("response").innerHTML = html;

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

  function setCodeReviewResponse() {
    var converter = new showdown.Converter({
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      simpleLineBreaks: true
    });
    response = fixCodeBlocks(response);
    html = converter.makeHtml(response);
    document.getElementById("response").innerHTML = html;

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

    renderSuggestions(response);

    microlight.reset('code');

    //document.getElementById("response").innerHTML = document.getElementById("response").innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
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

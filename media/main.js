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
      case "clearResponse": {
        response = '';
        break;
      }
      case "setPrompt": {
        document.getElementById("prompt-input").value = message.value;
        break;
      }
    }
  });

  /*
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

  }*/

  function setResponse() {
    var converter = new showdown.Converter({
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      simpleLineBreaks: true
    });
    // response = fixCodeBlocks(response);
    //html = converter.makeHtml(response);
  
    // Render the main content in "main-content"
    //document.getElementById("main-content").innerHTML = html;
  
    // Clear the existing suggestions before rendering new ones
    const suggestionsContainer = document.getElementById("suggestions-container");
    if (suggestionsContainer) {
      suggestionsContainer.innerHTML = '';
  
      // Render the suggestions as an HTML list
      renderSuggestions(response);
    }

    /*
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
            }*/

    microlight.reset('code');

    //document.getElementById("response").innerHTML = document.getElementById("response").innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  }

  function renderSuggestions(response) {
    const suggestions = parseSuggestions(response);
    const suggestionsContainer = document.getElementById("suggestions-container");

    if (!suggestionsContainer || suggestions.length === 0) {
      return;
    }

    // Create an ordered (or unordered) list for the suggestions
    const listType = suggestions[0].title.toLowerCase().includes('do not number') ? 'ul' : 'ol';

    // Create the list
    const list = document.createElement(listType);

    // Add each suggestion as a list item
    suggestions.forEach((suggestion) => {
      const listItem = document.createElement("li");
      const titleElement = document.createElement("strong");
      titleElement.textContent = suggestion.title;
      listItem.appendChild(titleElement);
      listItem.appendChild(document.createTextNode(suggestion.description));
      list.appendChild(listItem);
    });

    // Clear the existing suggestions and add the new list
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.appendChild(list);
  }

  function parseSuggestions(response) {
    const suggestionDelimiter = '----------';
    const lines = response.split('\n');
    const suggestions = [];

    let currentTitle = '';
    let currentDescription = '';

    for (const line of lines) {
      if (line.startsWith('**')) {
        // A new suggestion title
        if (currentTitle) {
          // Save the previous suggestion
          suggestions.push({ title: currentTitle, description: currentDescription });
        }
        // Remove the leading "**" and trailing ":"
        currentTitle = line.slice(2, -1);
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

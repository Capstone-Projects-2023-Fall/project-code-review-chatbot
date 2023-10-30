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



    microlight.reset('code');

    //document.getElementById("response").innerHTML = document.getElementById("response").innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  }

  function renderSuggestions(response) {
    const suggestions = parseSuggestions(response);
    const suggestionsContainer = document.getElementById("suggestions-container");

    if (!suggestionsContainer || suggestions.length === 0) {
      return;
    }


    // Create the list
    const list = document.createElement('ol');

    // Add each suggestion as a list item
    suggestions.forEach((suggestion) => {
      const listItem = document.createElement("li");
      const titleElement = document.createElement("strong");
      const caretButton = document.createElement("button");
      const descriptionElement = document.createElement("div");

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
        // Remove the leading "**" and trailing "**"
        currentTitle = line.slice(2, -2);
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

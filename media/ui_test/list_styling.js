// @ts-ignore

(function () {
    let response = `
~~~Suggestion 1 Title~~~
Suggestion 1 description.
**********
~~~Suggestion 2 Title~~~
Suggestion 2 description.
**********
~~~Suggestion 3 Title~~~
Suggestion 3 description.
**********
`;

    document.getElementById('learn-more-button').addEventListener('click', () => {
        vscode.postMessage({
            type: 'learnMore'
        });
    });

    document.getElementById("testbutton").addEventListener('click', () => {
        handleCodeReviewResponse(response);
    });



    /*window.addEventListener("message", (event) => {
        const message = event.data;
        switch (message.type) {
            case "addResponse":
                handleResponse(message);
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
        }
    });

    /*function fixCodeBlocks(response) {
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

    function handleResponse(message) {
        console.log("message type received by handleResponse:");
        console.log(message.type);
        response = message.value;
        const converter = new showdown.Converter({
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            simpleLineBreaks: true
        });
        //response = fixCodeBlocks(response);
        const html = converter.makeHtml(response);
        document.getElementById("response").innerHTML = html;

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

    function handleCodeReviewResponse(message) {
        response = message;

        //response = fixCodeBlocks(response);
        //const html = converter.makeHtml(response);
        document.getElementById("response").innerHTML = response;

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


        //microlight.reset('code');
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

        const header = document.createElement('h3');
        header.innerHTML = `Before you commit your code, here are some suggestions on how your code can be improved:`;

        const list = document.createElement('ol');

        suggestions.forEach((suggestion) => {
            const listItem = document.createElement("li");
            const titleElement = document.createElement("strong");
            const caretButton = document.createElement("button");
            const descriptionElement = document.createElement("div");

            listItem.classList.add("my-3");

            titleElement.textContent = suggestion.title;
            caretButton.textContent = "▼";
            descriptionElement.classList.add("hidden");

            caretButton.addEventListener("click", () => {
                descriptionElement.classList.toggle("hidden");
                caretButton.textContent = descriptionElement.classList.contains("hidden") ? "▼" : "▲";
                descriptionElement.style.display = descriptionElement.classList.contains("hidden") ? "none" : "block";
            });

            descriptionElement.textContent = suggestion.description;


            listItem.appendChild(titleElement);
            listItem.appendChild(caretButton);
            listItem.appendChild(descriptionElement);
            list.appendChild(listItem);
        });

        suggestionsContainer.appendChild(list);
        console.log(suggestions);
        console.log(" ^ suggestions after rendering");
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

        console.log(suggestions);
        console.log(" ^ suggestions after parsing");
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

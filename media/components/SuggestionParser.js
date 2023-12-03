import React from 'react';

class SuggestionParser extends React.Component {
    parseSuggestions(response) {
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

        return suggestions;
    }

    render() {
        return null;
    }
}

export default SuggestionParser;

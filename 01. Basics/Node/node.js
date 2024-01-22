const fs = require('fs');

// Function to remove specific words from the story
function removeWordsFromFile(inputFile, outputFile, wordsToRemove) {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading the input file: ${err}`);
      return;
    }

    // Replace the specified words with an empty string
    for (const word of wordsToRemove) {
      const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Case-insensitive, whole word match
      data = data.replace(regex, '');
    }

    // Write the modified story to the output file
    fs.writeFile(outputFile, data, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing the output file: ${err}`);
        return;
      }
      console.log('Words removed and story saved successfully.');
    });
  });
}

const inputFile = 'input.txt'; // Replace with your input file name
const outputFile = 'output.txt'; // Replace with your output file name
const wordsToRemove = ['word1', 'word2', 'word3']; // Replace with the words you want to remove

removeWordsFromFile(inputFile, outputFile, wordsToRemove);

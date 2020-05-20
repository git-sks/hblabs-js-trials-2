"use strict";

//
// Return an array of unique words that appear in words1 and words2.
//
function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
        result.add(word);
    }
  }

  return Array.from(result);
}

//
// Play a kids' word chain game.
//
function kidsGame(names) {
  const output  = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    if (!firstLetterToWords.hasOwnProperty(name.slice(0))) {
        firstLetterToWords[name[0]] = [name];
    }
    else {
        firstLetterToWords[name[0]].add(name);
    }
  }

  while (true) {
    let lastWordInOutput = output[output.length - 1];
    let startLetter = lastWordInOutput[lastWordInOutput.length - 1];

    if (firstLetterToWords[startLetter] === undefined ||
        firstLetterToWords[startLetter].length === 0) {
        break;
    }

    let word = firstLetterToWords[startLetter].shift();
    output.push(word);
  }

  return output;
}

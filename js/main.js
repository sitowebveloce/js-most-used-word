// SELECT text content, when space split, split return an array of words
let p = document.querySelector('textarea');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

function findWord(textString) {
    console.log(textString)
        // Empty array init
    let nwp = [];
    // Loop through the words array and REPLACE/REMOVE special chars/numbers and then push words inside the new array
    textString.forEach(p => {
        if (p.replace(/[^a-zA-Z]+/gi, "").length > 3) {
            // Push
            nwp.push(p.replace(/[^a-zA-Z]+/gi, ""));
        }
    });
    // console.log(nwp);
    // New object init
    let wordCount = {};
    // Foor loop count, populate the object with words and numbers
    for (let w of nwp) {
        if (wordCount[w] !== undefined) {
            // Increment the number
            wordCount[w]++;
        } else {
            // Add word and relative number
            wordCount[w] = 1;
        }
    };
    // console.log(wordCount);
    // All words, empty array init
    let allWords = [];
    // Loop and push values inside the array
    for (let word of nwp) {
        // Create new object
        let y = {
            value: wordCount[word],
            word: word
        };
        // Push the object inside the array
        allWords.push(y);
    };
    // console.log(allWords);
    // Filter and sort
    let final = allWords.filter((currentValue, index, array) => array.findIndex(val => (val.word === currentValue.word)) === index);
    // console.log(final);
    // Sort
    final.sort((a, b) => b.value - a.value);
    // console.log(final);
    console.log(final[0]);
    console.log(final[1]);
    console.log(final[2]);
    // Show inside the page
    // Select elements
    first.innerHTML = `
🏆 ${final[0].word} <em>${final[0].value}</em>
`;
    second.innerHTML = `
 ${final[1].word} <em>${final[1].value}</em>
`;
    third.innerHTML = `
 ${final[2].word} <em>${final[2].value}</em>
`;
};
// Add textarea event listener
p.onkeyup = e => {
    // console.log(e.target.value);
    // Clear show results content
    // Select elements
    first.innerHTML = ``;
    second.innerHTML = ``;
    third.innerHTML = ``;
};
// Button on click event
let btnFind = document.querySelector('.find');
btnFind.onclick = () => {
    let textToPass = p.value.split(' ');
    // console.log(textToPass.length);
    if (textToPass.length === 1) {
        return p.value = "Write something inside the text area please.";
    };
    // Run function
    findWord(textToPass);
}
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is David') === 'hello'
// ex. longestWord('Hello there, my name is David') === ['hello', 'there']

function longestWord (sen) {
// create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
// regex: anything from a-z, 0-9, global match so this does not stop with first match

// sort by length
const sorted = wordArr.sort((a, b) => b.length - a.length);

// If multiple words then put into array
const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

// Check if more than one array value
    if(longestWordArr.length === 1) {
    // return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

console.log(longestWord('Hello, my name is David'))
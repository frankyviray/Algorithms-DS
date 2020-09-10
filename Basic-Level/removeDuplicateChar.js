function removeDuplicateChar(str) {
    const len = str.length; // len represents number of characters inside word
    let char; // empty variable
    let charCount = {}; // charCount represents empty object
    let newStr = []; // newStr represents empty array

    for(let i = 0; i<len; i++) { // for loop which runs through the number of characters within the word
        char = str[i]; // char equals the current index of string (word)
        if (charCount[char]) { // checks if the word's current index exists
            charCount[char]++; // then adds count to the current index
        } else // otherwise
            charCount[char] = 1; // this index represents the first instance of the character inside word
        }
    for (let j in charCount) { // runs a second loop checking the indexes of the words inside the object
        if (charCount[j] == 1) // if index exists to one
            newStr.push(j); // then add existing index into the array
    }
    return newStr.join(''); // then join array into a string format and return the values
}

console.log(removeDuplicateChar('Learn more javascript dude'));
// Return the character that is the most common in a string
function maxCharacter(str) {
// creates an empty object
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

// splits each characters of the string into an array and runs a forEach fn
    str.split('').forEach(function(char) {
// checks if character exists then adds 1
        if(charMap[char]) {
            charMap[char]++;
// else mark 1 for the character
        } else {
            charMap[char] = 1;
        }
    });
// for in loop used for objects rather than an array
    for(let char in charMap) {
// checks if charMap char is greater than maxNum if true then replaces prev maxNum
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
// maxChar equals the current character
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxCharacter('javascriptttttt'))

// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
// string use global and case insensitive regex, take in fn using char for each iteration
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
// checks if char equals to z or capital Z then return lowercase a
        if (char === 'z' || char === 'Z') {
            return 'a';
// fromCharCode returns a converted Unicode number into a character
// charCodeAt returns the Unicode of the character at the specified index in a string
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
// matches all vowels to uppercase format
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}

console.log(letterChanges('Hello Worldz'))
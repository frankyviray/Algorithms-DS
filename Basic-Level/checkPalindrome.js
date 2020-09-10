function isPalindrome(str) {
    const len = str.length; // counts the indexes of the passed in word (str)

    for(let i = 0; i < len / 2; i++){ // for loop with a conditional of i being less than half the length of the word
        if (str[i] !== str[len - 1 -i]) // checks if the index of the word does not equal to the length of the word subtracted by 1 and the current index of i
            return false; // if does not equal then return 'false'
    }
    return true; // otherwise return 'true'
}

console.log(isPalindrome('madam'))
// true
console.log(isPalindrome('toyota'))
// false

// const checkPalindrom = (str) => str == str.split('').reverse().join('');
// checks if the string equals the string's index after being reversed in order
// split turns string into an array of words
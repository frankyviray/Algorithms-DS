// Find the missing letter in the passed letter range and return it.  If all letters are present return undefined.
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnoprstuvwxyz") == undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    // The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    let missing;
    // missing represents empty variable

    str.split('').map((char, i) => {
    // separate string and return each character in array and map each index
        if(str.charCodeAt(i) == compare) {
        // check if string charCode equals the initial first index (charCodeAt(0))
            ++compare;
        // if so then increment to the next iteration
        } else {
            missing = String.fromCharCode(compare);
        // otherwise set 'missing' to a String obj. using 'fromCharCode(compare)' which converts unicode values into characters from compare's current index.
        }
    });
    return missing;
    // return missing to stop fn
}

console.log(missingLetters("abce")); // d
// first character code 'a' represents 97, 'b' represents 98

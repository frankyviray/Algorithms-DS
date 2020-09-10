function subStringFinder(str, subStr) {
    let idx = 0; // idx equals 0
    let i = 0; // i equals 0
    let j = 0; // j equals 0
    const len = str.length; // length of characters in string (word)
    let subLen = subStr.length; // length of characters in the subStr (2nd word)

    for (; i<len; i++){ // for loop running through len's characters
        if(str[i] == subStr[j]) // checks if current index of string equals the current index of subStr
            j++; // then adds 1 to index of subStr
        else // otherwise
            j = 0; // index of subStr = 0

    // check starting point or a match
    if(j == 0) // checks if index of subStr is 0
        idx = i; // then idx equals value of 'i'
    else if (j == subLen) // else if index of subStr equals length of subStr (2nd word)
        return idx; // then return value of 'idx'
    }
    return -1;  // returns false if no match
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'))
// 0
console.log(subStringFinder('abbcdabbbbbck', 'bck'))
// 9
console.log(subStringFinder('eezzbbzzbb', 'zz'))
// 1 -> starts after index of 0, 1
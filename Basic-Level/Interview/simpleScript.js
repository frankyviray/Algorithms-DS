// Write a simple script that will accept a String as a param.
//   The string would represend a sequence of digits (e.g. `12345561`).
//   The script should calculate sum of digits that match the next digit in the sequence.
//   The script should consider the sequence "looped" which means the last digit should be compared with the first one.
//   For example, given `312113` sequence the script should return `4` because it has matching digits `1` (in positions 3, 4) and `3` (in positions 5, 0).

function SimpleScript(str) {
    const charMap = {};
    let maxNum = 0;
    let duplicateChar = '';

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
                duplicateChar = char;
                }
            }
            return duplicateChar;
        }

console.log(SimpleScript('312113'))
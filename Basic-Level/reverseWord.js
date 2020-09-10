// function reverseWord(str) {
//     let reverseW = []; // empty array
//         wordLen = 0; // count starting at '0'
//     for (let i=str.length - 1; i>=0; i--) { // reverse for loop
//         if(str[i]==' ' || i==0){ // checks for any white space or does not exist
//             reverseW.push(str.substr(i, wordLen + 1)); // add string's current character into the array starting with current index of 'i' onwards (0 + 1 = 1)
//             wordLen = 0;
//         }
//         else
//             wordLen++; // add 1 to 'wordLen' count
//     }
//     return reverseW.join(' '); // returns array back into string format with space
// }

// console.log(reverseWord('hello'))

// function reverseWords(str){
//     return str.split(' ').reverse();
//   }

// console.log(reverseWords('hello'))

function reverseWords(str){
    var rev = [],
        wordLen = 0;
    for(var i = str.length-1; i>=0; i--){
      if(str[i]==' ' || i==0){
        rev.push(str.substr(i,wordLen+1));
        wordLen = 0;
      }
      else
        wordLen++;
    }
    return rev.join(' ');
   }

console.log(reverseWords('hello'))
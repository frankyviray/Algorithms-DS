function reverse(str) {
    if (str === "") { // checks if string is empty
        return ""; // if so then return ""
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
// 'substr' will extract characters from string starting with '1' onwards + while 'charAt' grabs character based on position ('0' in this case)
    }
}
console.log(reverse('cat'))

// function reverse(str) {
//     let reverseWord = ''; // create empty string var
//     for (i = str.length - 1; i >= 0; i--) { // reversed for loop
//         reverseWord += str[i] // concat into empty string variable (reverseWord)
//     }
//     return reverseWord; // return the reverseWord variable
// }

// console.log(reverse('cat'))

// function reverse(str) {
//     let rtnStr = []; // creates an empty array object
//     if(!str || typeof str != 'string' || str.length < 2 ) return str; // checks if string exists or is greater than 2 characters

//     for (let i = str.length - 1; i >= 0; i--){ // reversed for loop which starts at str.length - 1 to match correct position
//         rtnStr.push(str[i]); // adds each char of string in reverse order
//     }
//     return rtnStr.join(''); // creates and returns a new string
// }

// console.log(reverse('cat'))

// function reverse(str){
//     if(!str || str.length <2) return str;

//     return str.split('').reverse().join('');
//   }
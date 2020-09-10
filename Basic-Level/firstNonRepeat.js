function firstNonRepeatChar(str){
    const len = str.length; // len equals total number of the string characters
    let charCount = {}; // empty object

    for(let i =0; i<len; i++){ // for loop running through string
        let char = str[i]; // char represents each index of the string characters
      if(charCount[char]){ // checks if object contains char
        charCount[char]++; // then increase index of charCount by 1
      }
      else // otherwise
        charCount[char] = 1; // charCount's index equals 1
    }
    for (let j in charCount){ // run a 2nd for loop for each index in charCount
      if (charCount[j]==1) // if the index in charCount equals 1 then return this character
         return j; // represents first non repeating character inside the string (sentence or word in this fn argument)
    }
  }

  console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));
  // "f"
  console.log(firstNonRepeatChar('we are going to the pumpkin patch'));
  // "w"
  console.log(firstNonRepeatChar('hello there'));
  // "o"
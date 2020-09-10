function greatestCommonDivisor(a, b){
    var divisor = 2, // divisor = 2
        greatestDivisor = 1; // greatestDivisor = 1

        if (a < 2 || b < 2) // if a is less than 2 or b is less 2
       return 1; // return 1 meaning there will be no other number other than 1 which is GCD

    while(a >= divisor && b >= divisor){ // while a is greater than or equal to divisor and b is greater than or equal to divisor
     if(a %divisor == 0 && b% divisor ==0){ // if a modular divisor equals 0 and b does the same
        greatestDivisor = divisor; // the greatestDivisor equals the divisor
      }
     divisor++; // add +1 to the divisor
    }
    return greatestDivisor; // return the greatestDivisor
  }

  greatestCommonDivisor(14, 21);
  // 7

// FANCY WAY
// function greatestCommonDivisor(a, b){
//     if(b == 0)
//       return a;
//     else
//       return greatestCommonDivisor(b, a%b);
//  }

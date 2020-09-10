function rand5(){
// Math.random() will return a random number between 0 and 4 (adding 1 will increase range between 1 and 5 instead)
    return 1 + Math.random() * 4;
 }

function rand7(){
   return 5 + rand5() / 5 * 2; // rand5() divided by 10 which decreases range and adding 5 will target specifically between 5 and 7
 }

console.log(rand7())
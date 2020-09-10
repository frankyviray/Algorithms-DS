function fibonacci(n){
    if(n<=1) // if number is less than or equal to '1'
        return n; // return this number
    else // otherwise
        return fibonacci(n-1) + fibonacci (n-2); // perform and return recursive fn while adding up all the numbers together
    }

fibonacci(12);
// 144
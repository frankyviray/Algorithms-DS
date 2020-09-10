function mergeSortedArray(a, b) {
    var merged = [], // empty array
    aElm = a[0], // index 0 of 'a' (1st index)
    bElm = b[0], // index 0 of 'b' (1st index)
    i = 1,
    j = 1;

    if(a.length == 0) // if length of a equals '0' return b
        return b;  // (b represents 2nd array since we're passing in two arrays as arguments into fn)
    if(b.length == 0) // if length of b equals '0' return a
        return a; // (a represents 1st array since we're passing in two arrays as arguments into fn)

    while(aElm || bElm) { // while loops for aElm or bElm
        if((aElm && !bElm) || aElm < bElm){ // if aElm and bElm does not exist or aElm is less than bElm
            merged.push(aElm); // push aElm into empty array of 'merged'
            aElm = a[i++]; // then aElm equals index + 1 of 'a' array
        }
        else { // otherwise
            merged.push(bElm); // push bElm into merged (empty array setup)
            bElm = b[j++]; // then bElem equals index + 1 of 'b' array
        }
    }
    return merged; // returns 'merged' array
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));
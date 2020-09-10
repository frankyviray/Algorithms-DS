function removeDuplicate(arr){
    var exists = {}, // empty obj.
    outArr = [], // empty arr
    elm; // empty variable
    // run a for loop
    for (var i=0; i<arr.length; i++){
        elm = arr[i]; // 'elm' represents index of arr
        if(!exists[elm]){ // if object does not contain an 'elm' or index of arr
            outArr.push(elm); // then push elm into outArr's empty arr
            exists[elm] = true; // empty object contains elm which equals true (meaning there is a duplicate)
        }
    }
    return outArr; // return the dupliates inside the array
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))
// [ 1, 3, 5, 6, 7, 8 ]
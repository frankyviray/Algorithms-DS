function mergeSortedArrays(array1, array2) {
    // Check input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    const mergedArray = [];
    let arr1Item = array1[0];
    let arr2Item = array2[0];
    let i = 1;
    let j = 1;

    // while we have items inside either arrays
    while (arr1Item || arr2Item) {
        // checks if arr2Item is undefined or arr1Item is less than arr2Item
        if (arr2Item === undefined  || arr1Item < arr2Item) {
            // if true then push 1st item into empty 'mergedArray'
            mergedArray.push(arr1Item)
            arr1Item = array1[i]
            i++ // moves onto next index
        } else {
            mergedArray.push(arr2Item);
            arr2Item = array2[j];
            j++; // moves onto next index needs 'j' in this case since its separate array
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [ 0, 3, 4, 4, 6, 30, 31 ]
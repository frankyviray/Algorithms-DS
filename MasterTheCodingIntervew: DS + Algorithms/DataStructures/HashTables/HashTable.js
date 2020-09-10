class HashTable {
    constructor (size){
    // this array will hold info
        this.data = new Array(size);
    }
// generate a hash
_hash(key) {
    let hash = 0;
    // looping over the key so it's not considered o(n) instead o(1)
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
    }
    // o(1)
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // always going to be pushing key, value that we set
        this.data[address].push([key, value])
        return this.data
    }
    // if there is no collision then it's o(1) and most of the time it is
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
            // checks if the 1st array's key is equal to the key passed into get fn
                if (currentBucket[i][0] === key) {
                // if true then return the value inside the array
                    return currentBucket[i][1]
                }
            }
        } // o(1) and o(i) with collision or lack of space
        return undefined
    }

    keys() {
    // create empty array
        const keysArray = [];
        // run through data using for loop
        for (let i = 0; i < this.data.length; i++){
            // if data exists in array
            if (this.data[i]) {
                // push the key into empty array
                // removes outer array with '[0]'
                keysArray.push(this.data[i][0][0])
            }
        }
        // return keys
        return keysArray
    }
}

// only want 50 shelfs of memory
const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
console.log(myHashTable.set('apples', 54));
console.log(myHashTable.set('oranges', 2));
console.log(myHashTable.keys());
// console.log(myHashTable._hash('hello_world'))
// 35

/*
Downside of Hashtables - looping through the entire memory space but with arrays it would have been easier since in this example we looped 50x instead of just 3.
Inside thought process: Objects might not be a good idea for this method 'key'.
Understand how things work under the hood.


In JS we can use for in to loop over items in an object but is very slow and also there is no guaranteed order.
When we retrieve items they are unordered.

Hash Tables vs Arrays:

- Searching through an array for an item takes a long time.  With hash tables searching is faster.
- Databases generally use hashtables and gives data back right away.
- Arrays let you quickly look up value for a given key.
- Hash tables are somewhat of an hack to layer on top of an array to use flexible keys instead of 0,1,2,3...
- Hashtables have no concept of order whereas arrays have each item placed next to each other.
*/

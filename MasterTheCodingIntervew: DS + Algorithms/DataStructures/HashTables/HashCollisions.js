/*
Hash Tables:
1. Insert O(1)
2. Lookup O(1)
3. Delete O(1)
4. Search O(1)

With Hash Tables we can't avoid collisions with enough data with limited memory hence Hash Collisions.
Theoretically, when you have a collision it slows down reading and writing with a hash table with O(n/k) where k is the size of your hash table similar to O(n).

Common ways to deal with Collisions:

-Separate Chaining
-Open Addressing
-Robinhood Hashing

Hash tables are implemented differently in different languages.

In JS ES6, Map and Sets:

// allows to save any data type as the key whereas in an object only save the key as a string
// Map also maintains insertion order
const a = new Map()

// Sets is similar to Maps but only stores keys no values
const b = new Set()

*/

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhhhhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1) -> access memory fast thru Hash tables


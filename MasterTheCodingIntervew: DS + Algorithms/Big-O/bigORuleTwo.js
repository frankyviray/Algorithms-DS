function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2); // O(n / 2) since we're dividing only half of all items
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { // O(100)
        console.log('hi');
    }
}

// O(1 + n / 2 + 100) -> O(n + 1) -> O(n)

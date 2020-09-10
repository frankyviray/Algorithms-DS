// Queue DS is a way to hold data similar to a stack. Queue is first in and first out instead of first in last out (stack).

function Queue() {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
    // shift removes first item of arr and returns it
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print(); // prints a, b, c inside arr
q.dequeue(); // removes first char a
console.log(q.front()); // checks whats at the front of the array
q.print();

// [ 'a', 'b', 'c' ]
// b
// [ 'b', 'c' ]


// PriorityQueue not only do you pass element into queue you also pass the priority of the element (note: if all priorities are same number then it functions as regular queue)
function PriorityQueue (){
    var collection = [];
    this.printCollection = function() {
        (console.log(collection));
    };
    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for(var i = 0; i<collection.length; i++) {
                if(element[1] < collection[i][1]){ // checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['Kobe Bryant', 2]);
pq.enqueue(['LeBron James', 3]);
pq.enqueue(['Jesus Christ', 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

// [ [ 'Jesus Christ', 1 ],
//   [ 'Kobe Bryant', 2 ],
//   [ 'LeBron James', 3 ] ]

// [ [ 'Kobe Bryant', 2 ], [ 'LeBron James', 3 ] ]
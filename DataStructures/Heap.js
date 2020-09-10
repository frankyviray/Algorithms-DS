/* Binary Heap is a partially ordered binary tree which satifies the heap property
Has some similarities to a binary search tree except the order is a little different
Each node has at most two child nodes. The heap property indicates a specific relationship between the parent and child nodes

Max Heap: biggest number at the top, Min Heap: Child nodes have largest numbers (bottom)

Heaps are more often implemented as arrays possibly because of the partial ordering according to the heap property
*/

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let MinHeap = function() {
    let heap = [null];

    this.insert = function(num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] < heap[Math.floor(idx/2)]) {
                if (idx >= 1) {
                // switch parent node with node just inserted (es6 destructuring)
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
                if (Math.floor(idx/2) > 1) {
                    idx = Math.floor(idx/2);
                } else {
                    break;
                };
            };
        };
    };
};

this.remove = function() {
    let smallest = heap[1];
    if (heap.length > 2) {
        heap[1] = heap[heap.length - 1];
        heap.splice(heap.length - 1);
        if(heap.length == 3) {
            if (heap[1] > heap[2]) {
                // destructuring syntax
                [heap[1], heap[2]] = [heap[2], heap[1]];
            };
            return smallest;
        };
        // 1 is the root node
        let i = 1;
        let left = 2 * i;
        let right = 2 * i + 1;
        while (heap[i] >= heap[left] || heap[i] >= heap[right] ) {
            if (heap[left] < heap[right]) {
                [heap[i], heap[left]] = [heap[left], heap[i]];
                i = 2 * i
            } else {
                [heap[i], heap[right]] = [heap[right], heap[i]];
                i = 2 * i + 1;
            };
            left = 2 * 1;
            right = 2 * i + 1;
            // if undefined then at the bottom of the tree
            if (heap[left] == undefined || heap[right] == undefined) {
                break;
            };
        };
    } else if (heap.length == 2) {
        heap.splice(1, 1);
    } else {
        return null;
    };
    return smallest;
};
// heap sort works by taking an unsorted array
// adding each item in the array into a min heap and then extracting every item out of the min heap into an array
this.sort = function() {
    let result = new Array();
    while(heap.length > 1) {
// remove elements on top of tree and push into result placing elements in order
    result.push(this.remove());
    };
    return result;
    };
};


let MaxHeap = function() {

	let heap = [null];

	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};

	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

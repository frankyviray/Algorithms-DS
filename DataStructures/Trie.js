/* Trie sometimes called a prefix tree is a special type of tree used to store associative data structures
stores data in steps such as words */

let Node = function() {
    // Map is similar to an object holding key/value pairs
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    };
    this.isEnd = function() {
        return this.end;
    };
};

let Trie = function() {

    this.root = new Node();

    this.add = function(input, node = this.root) {
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    };
// checks if the given word exists by breaking down each letter inside the tree store
    this.isWord = function(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
    // if the last letter of the word exists and it is the end of the word then return true
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };
    // helper function to print out words
    this.print = function() {
        let words = new Array();
        let search = function(node, string) {
            if (node.keys.size!= 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    };
};

myTrie = new Trie()
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())


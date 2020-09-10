/* Graphs: Breadth-first Search

Finding distances between two nodes - Graph Traversal (visit nodes in a graph using Breadth-First Search, Depth-First Search)
*/

// will output an object of key value pairs where key is the node, value is its distance from the root
function bfs(graph, root) {
    // store distances to the root node
    var nodesLen = {};
    // start all distances at Infinity
    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    // distance to the root node from the root node is set to 0 instead of infinity
    nodesLen[root] = 0;
    // track queue
    var queue = [root];
    // keep track of current node we are traversing
    var current;
    // keep traversing nodes until there are no more nodes
    while (queue.length !=0) {
        // start by popping off a node to traverse
        current = queue.shift();
        // here we get all the nodes connected to the current node. Each index of the graph is an array that shows what nodes are connected to the root node associated with that index.
        var curConnected = graph[current];
        // set neighborIdx to empty array and will keep track of the list of nodes connected to the current node
        var neighborIdx = [];
        // finds first connected node because 1 in our array means that the node is connected to another node at that index
        var idx = curConnected.indexOf(1);
        // if there is no node then the index will be set to -1
        while (idx != -1) {
            neighborIdx.push(idx);
        // searches for next connected node starting after the previous one we found (idx + 1)
            idx = curConnected.indexOf(1, idx + 1);
        }
    // loop through connected nodes and find the distance
    for (var j = 0; j < neighborIdx.length; j++) {
    // if we haven't set the distance yet then will set it now
        if (nodesLen[neighborIdx[j]] == Infinity) {
        // set it to the value of the nodes length array for the current node + 1
            nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        // next time we go through the while loop we'll chec the neighbors of that node too
            queue.push(neighborIdx[j]);
        }
    }
}
// return nodes length array
    return nodesLen;
};
// adjacency matrix
// each nested array in the matrix shows which nodes in the graph are connected to the node at that index
var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));
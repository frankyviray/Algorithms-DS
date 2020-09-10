Searching/Traversal Notes:

- Linear Search:
 - We have items or nodes and go one by one in the list to find the item or node.
 - Best Case: O(1), Worst Case: O(n)
 - 'indexOf', 'findIndex', 'find', 'includes' (Javascript)
 - Generally have for loops in a Linear search (arrays, linked lists, hash tables, queues, stacks).
 - O(n)

- Binary Search:
 - If it's sorted then we can do better than O(n). We can discard half the items instead of going through one-by-one.
 - Storing data in a tree instead of a linear data structure like an array is more efficient.
 - Split a list, decide left or right and since list is sorted it's easier to find where to discard.
 - Merge Sort, Quick Sort do something similar with splitting lists in divide and conquer.
 - Generally use while loops checking half (left vs right).
 - O(log N)

- Depth First Search/Traversal:
 - Graph Traversals -> DFS (peer2peer networks, Google Maps, Amazon's recommendations)
 - Time complexity is O(n) (visit every single node)
 - Hash Tables aren't ordered which is why Trees/Graphs are used often when we want to search nodes or visit every node.
 - Represents a lot of data that models the real world.
 - Search follows one branch of the tree down as many levels as possible until the target notice is found or the end is reached.  It continues at the nearest ancestor with an unexplored child.
 - Has a lower memory requirement than BFS since it's not necessary to store all the child pointers at each level.
 - We want to go as deep as possible with DFS starting from left then to the right hence depth first.
 - If you have an idea or know target node is closer to bottom of tree than DFS is better than BFS since it'll search with the deep depths.

 - Pros: Uses less memory, Does Path exist? (Determining whether a path exists between nodes).
 - Cons: Can get slow depending the deeper the graph (more recursive calls).


- Breadth First Search/Traversal:
 - Graph Traversals -> BFS (peer2peer networks, Google Maps, Amazon's recommendations)
 - Time complexity is O(n) (visit every single node)
 - Hash Tables aren't ordered which is why Trees/Graphs are used often when we want to search nodes or visit every node.
 - Represents a lot of data that models the real world.
 - Start with the root node, move left to right across the second level then move to left to right across the third and so forth until you find the node or tree ends.
 - Uses additional memory since it's necessary to track child nodes of all the nodes on a given level while searching that level.
 - If you have an idea or know target node is closer to top of tree than BFS is better than DFS since it'll search with closest nodes first.
 - BFS allows us to convert a graph essentially into a tree (we know who the children of the parent nodes and the grandchildren nodes).

 - Pros: Very good at finding shortest path between two nodes in a graph, closer nodes.
 - Cons: Uses more memory to keep track of parent nodes/grandchildren nodes.

- Dijkstra + Bellman-Ford Algorithms:
 - In DFS, BFS we do not consider the weight each edge has but with distances the weight is actually higher vs lower so we use Dijkstra or the Bellman-Ford to figure out shortest path algorithms (special case).
 - Bellman-Ford Algorithms are particularly good at finding shortest path since they can also accomodate negative weights (Dijkstra's connect use negative).
 - Bellman-Ford can take a long time to run in terms of complexity and not the most efficient.
 - Worst Case: O(n^2)
 - Dijkstra's is a bit more efficient.

USEFUL LINKS:

- https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr
- https://leetcode.com/problems/validate-binary-search-tree/ (Common Interview Question for BST)
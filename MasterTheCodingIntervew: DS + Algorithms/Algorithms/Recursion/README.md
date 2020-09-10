Recursion Notes:

- One of the most popular interview topics.
- A function which refers to itself inside of the function.
- Good for tasks that have repeated subtasks to do (similar to when a folder needs to look inside other folders to find a file, particularly while traversing a tree since we are not always sure with the amount of loops needed).
- Downside to Recursion: hold onto each call, remember them one by one which can get really expensive (computer needs to allocate memory to remember things).
- Every recursive function needs to have something called a base case or a stop point.
- Anything you do with a recursion CAN be done iteratively (loop).
- Recursion can keep your code DRY (simpler, readable, less loops) but also creates an extra memory footprint(large stack).
- Recursion tends to be more useful with Sorting, Tree Traversals (i.e. Merge Sort, Quick Sort, Tree Traversal, Graph Traversal).
- Tail Call Optimization: allows recursion to be called without increasing the call stack.

Example of Recursion:

// Stackoverflow since the calls are endless and memory is limited

    function inception(){
        debugger;
        inception();
    }

USEFUL LINKS:
- https://2ality.com/2015/06/tail-call-optimization.html (Tail Call Optimization)
-  Real World Application example of when to use Recursion: https://stackoverflow.com/questions/105838/real-world-examples-of-recursion
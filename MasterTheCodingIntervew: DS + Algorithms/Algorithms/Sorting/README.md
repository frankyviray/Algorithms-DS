Sorting Notes:

- Companies such as Netflix, Microsoft, Google, Amazon, Apple, Facebook need custom sorted methods based on the data so that they can lower their costs and lower the operations that their computers need to do.
- Most places sort their data or preprocess it and all these companies including small ones usually sort data to make sure its meaningful.


    "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    The time and space complexity of the sort cannot be guaranteed as it depends on the implementation."


Bubble Sort:

- Loop through each item and bubble up based on the higher value until the list is completely sorted.
- Lots of comparisons and goes one by one (one of the least efficient).
- Time Complexity: O(n^2), Space Complexity: O(n)
- Rarely used but educational purposes (not very efficient).

Selection Sort:

- Works by scanning list of items for smallest element and then swapping that element for the one in the first position (repeat until the list is completely sorted).
- Time Complexity: O(n^2), Space Complexity: O(n) (doesn't really add any extra additional data besides input).
- Rarely used but educational purposes (not very efficient).

Insertion Sort:

- Not the most efficient but there's cases when it is extremely fast (particularly in small data sets).
- Useful for times when the list is almost sorted or already sorted.
- Best case scenario: O(n)
- Should be used with only a few items: if input is small, items are sorted. Uses very little space, fast, easy to implement in code.

Merge Sort:

- Use Divide & Conquer method which usually gives a O(n log n).
- Do not have nested for loops which saves time.
- Efficient but also uses recursion.
- Really useful and one of the most used sorting algorithms.
- Space Complexity: O(n) can be expensive.
- A process outside of memory suitable for external sorting then ideal since worst case is O(n log n).

Quick Sort:

- Use Divide & Conquer method which usually gives a O(n log n).
- Do not have nested for loops which saves time.
- Uses a pivoting technique to break main list into smaller lists which is repeated until sorting is completed.
- Worst case is O(n^2) when the pivot is the smallest or largest item in the list then you're not really splitting the list in half which makes merge sort better in this case.
- Really useful and one of the most used sorting algorithms but if you can't guarantee that there's no bad data or pivot then should be avoided.
- If pivot is not picked properly then sorting can be really slow.
- Space Complexity: O(log(n))

Heap Sort:

- Can sort in place and doesn't have the worst case quadratic behavior that quicksort has or memory usage that merge sort has but on average is slower than quicksort in most cases.
- Unless worried about worst case and memory then heap sort can be an option.
- "The secret of Quicksort is: It almost doesn't do unnecessary element swaps. Swap is time consuming and with Heapsort, even if all of your data is already ordered, you are going to swap 100% of elements to order the array." (Source: https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort)

Radix Sort:

- With comparison sort we decided the order of the numbers based on asking whether if the element value is bigger than the other one but non-comparison is different.
- Non-Comparison sort uses the way numbers are stored in computers based on 0's and 1's to sort things.
- Only works with numbers specifically integers in a restricted range (small range: 0 - 100).
- Useful for fixed length of integers.
- Time Complexity: O(nk), Space Complexity: O(n+k)
- Some arguments that this can be slow.

Counting Sort:

- With comparison sort we decided the order of the numbers based on asking whether if the element value is bigger than the other one but non-comparison is different.
- Non-Comparison sort uses the way numbers are stored in computers based on 0's and 1's to sort things.
- Only works with numbers specifically integers in a restricted range (small range: 0 - 100).
- Useful for fixed length of integers.
- Time Complexity: O(n+k), Space Complexity: O(k)
- Some arguments that this can be slow.

INTERVIEW TIP:

- We can assume Merge Sort is something we can implement with a library, documentation. We can use divide and conquer the code to make it more efficient.


USEFUL Links:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
- https://www.toptal.com/developers/sorting-algorithms (Sorting Animations)
- https://www.bigocheatsheet.com/ (Big O CheatSheet)
- https://www.youtube.com/user/AlgoRythmics/videos (Dancing Algorithms Playlist)
- https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important (Stability in Sorting Algorithms)
- https://brilliant.org/wiki/heap-sort/ (Heap Sort)
- https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort (Quicksort vs HeapSort)
- https://brilliant.org/wiki/radix-sort/ (Radix Sort)
- https://www.cs.usfca.edu/~galles/visualization/RadixSort.html (Radix Sort Animation)
- https://brilliant.org/wiki/counting-sort/ (Counting Sort)
- https://www.cs.usfca.edu/~galles/visualization/CountingSort.html (Counting Sort Animation)
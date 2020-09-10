//#1 - Sort 10 schools around your house by distance:
// Insertion: Really fast on small data sorts, easy to code, space complexity: O(1)

//#2 - eBay sorts listings by the current Bid amount:
// Radix or Counting Sort: Since we're dealing with numbers which generally range from 1-50000.
// Fixed length of integers and usually the numbers are not in the millions this way we can beat the O(n log n) knowing certainty within the range.

//#3 - Sport scores on ESPN
// Quick Sort: Most efficient, worried about in-memory setting such as merge sort (increased space complexity).

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort: Since data is so big we do not want to worry about performance worst case.

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort: Although data might be huge, most of the previous data is already sorted and only adding 2 new reviews. Insertion for pre-ordered lists will work best.

//#6 - Temperature Records for the past 50 years in Canada
// Radix or Counting Sort if there were no decimal ranges but if very accurate then probably go with Quick Sort just for in-memory sorting and save on the space-complexity.

//#7 - Large user name database needs to be sorted. Data is very random.
// Merge Sort if we have enough memory and memory isn't too expensive or Quick sort if not worried about worst case and username database isn't too large just to save on memory space.

//#8 - You want to teach sorting for the first time
// Bubble Sort, Selection Sort
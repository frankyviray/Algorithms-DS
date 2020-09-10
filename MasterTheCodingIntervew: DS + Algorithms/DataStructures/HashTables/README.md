HASH Tables:

Pros
- Fast Lookups (Need good collision resolution); fast access but more memory
- Fast Inserts
- Flexible Keys

Cons
- Unordered
- Slow Key Iteration

Useful Information for Interviews:

1. By using HashTables we can optimize nested loops which use O(n^2) to O(n) linear time.
2. Usually under the hood collision resolution is taken care of.
3. Maps (Javascript) create flexible keys instead of array's index of 0,1,2..
4. Major set backs are unordered information and slow key iteration meaning if we want to grab all keys then we have to go through entire memory space.
5. Hash Tables are usually the answer to improve Time Complexity.
6. Hash Tables and precomputed information (i.e. sorted) are some of the best ways to optimize code.
7. Time vs Space tradeoff. Sometimes storing extra state in memory can help the time (Runtime).
8. Space Time tradeoffs: Hash Tables usually solve this a lot of the times.  You use more space, but you can get a time optimization to the process.
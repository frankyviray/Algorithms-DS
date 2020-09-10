function addTo80(n){
    console.log('long time')
    return n + 80;
}

function memoizedAddTo80() {
    // best practice not to pollute global scope using closures
    let cache = {};
    return function(n) {
        // checks if a property exists in an object similar to 'cache.n'
        if(n in cache){
            return cache[n];
        } else {
            console.log('long time')
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
// remembers that the parameters has not changed and will check the cache inside the 'memoizedAddTo80 fn'
const memoized = memoizedAddTo80();

// memoization is a specific form of caching that involves caching the return value of a function based on its parameters.
// if parameter isn't changed then it is memoized (return a cached version of the function since it does the same calculation).
console.log('1', memoized(5))
console.log('2', memoized(5))
console.log('3', memoized(6))

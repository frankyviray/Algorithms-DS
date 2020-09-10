function permutations(str){
    let arr = str.split(''); // arr represents string split into each character inside array
    let len = arr.length; // counts the values located inside the 'arr' array
    let perms = []; // empty array
    let rest; // empty variable
    let picked; // empty variable
    let restPerms; // empty variable
    let next; // empty variable

    if(len == 0) // checks if len equals 0
        return [str]; // then return array of 'string'

    for (let i = 0; i < len; i++){ // for loop runs until length of array is complete
        rest = Object.create(arr); // creates a new obj of arr for 'rest'
        picked = rest.splice(i, 1); // replaces a value inside array at 'i's index

        restPerms = permutations(rest.join('')); // restPerms equals permutations (recursive method) with rest converted as a string object passed in as an argument of the fn

        for (let j=0; j < restPerms.length; j++) { // for loop which runs through restPerms' length
            next = picked.concat(restPerms[j]); // 'next' equals the spliced rest object added with value from restPerms subindex of j
            perms.push(next.join('')); // perms is pushed into next object
        }
    }
    return perms; // returns the value of perms
}
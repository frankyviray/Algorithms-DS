// Not the cleanest way in Javascript

function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
        for (let i = totalItems; i >= 0; i--) {
            backwards.push(str[i]);
        }
        console.log(backwards);

    return backwards.join('');
}

// ES6
const rev2 = str => str.split('').reverse().join('');

// Destructuring
const rev3 = str => [...str].reverse().join('');

// reverse('David')
console.log(rev2('David')) // divaD
console.log(rev3('David')) // divaD


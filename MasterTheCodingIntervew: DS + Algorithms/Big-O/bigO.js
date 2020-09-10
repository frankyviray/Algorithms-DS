function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n) - runs based on loop count
        a++; // O(n) - depends on input count
    }
    return a; // O(1)
}

// Big O(3 + 4n) -> simplified to O(n)
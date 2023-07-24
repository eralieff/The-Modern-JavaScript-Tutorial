'use strict';

function* pseudoRandom(seed) {
    while (true) {
        yield seed = seed * 16807 % 2147483647;
    }
}

let generator = pseudoRandom(1);

// for (const value of generator) {
//     console.log(value);
// }

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
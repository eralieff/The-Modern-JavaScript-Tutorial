'use strict';

function isInteger(number) {
    let intNumber = ~~number;
    
    if (intNumber === number) {
        return true;
    } else {
        return false;
    }
}

console.log( isInteger(1) ); // true
console.log( isInteger(1.5) ); // false
console.log( isInteger(-0.5) ); // false
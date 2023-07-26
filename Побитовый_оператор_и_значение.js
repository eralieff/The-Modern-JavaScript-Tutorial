'use strict';

console.log(Number(123).toString(2));
console.log(Number(0).toString(2));
// 1111011
// 1111011
// 0000100
// 1111011

console.log( 123 ^ 0 ); // 123
console.log( 0 ^ 123 ); // 123
console.log( ~~123 ); // 123
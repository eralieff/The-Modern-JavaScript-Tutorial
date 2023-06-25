'use strict';

/* Рекурсия (медленно)
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

console.log(fib(3)); // 2
console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757 Не запускай это! Процессор не выдержит
*/

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77) ); // 5527939700884757
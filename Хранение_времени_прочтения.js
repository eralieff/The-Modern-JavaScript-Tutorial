'use strict';

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let dateWeakMap = new WeakMap();

console.log(dateWeakMap.has(messages[0]));
console.log(dateWeakMap.has(messages[1]));
console.log(dateWeakMap.has(messages[2]));

dateWeakMap.set(messages[0], "01:03 23.06.2023");
dateWeakMap.set(messages[1], "01:03 23.06.2023");
dateWeakMap.set(messages[2], "01:06 23.06.2023");

console.log(dateWeakMap.has(messages[0]));
console.log(dateWeakMap.has(messages[1]));
console.log(dateWeakMap.has(messages[2]));

messages.pop();
messages.pop();
messages.pop();

console.log(dateWeakMap.has(messages[0]));
console.log(dateWeakMap.has(messages[1]));
console.log(dateWeakMap.has(messages[2]));
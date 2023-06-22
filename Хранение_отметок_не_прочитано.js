'use strict';

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readWeakSet = new WeakSet();

readWeakSet.add(messages[0]);
readWeakSet.add(messages[1]);
readWeakSet.add(messages[2]);

console.log(readWeakSet.has(messages[0]));
console.log(readWeakSet.has(messages[1]));
console.log(readWeakSet.has(messages[2]));

messages.pop();
messages.pop();
messages.pop();

console.log(readWeakSet.has(messages[0]));
console.log(readWeakSet.has(messages[1]));
console.log(readWeakSet.has(messages[2]));
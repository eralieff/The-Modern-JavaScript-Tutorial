'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let JSON_Format = JSON.stringify(user);

console.log(JSON_Format);

let JSON_Parse = JSON.parse(JSON_Format);

console.log(JSON_Parse);
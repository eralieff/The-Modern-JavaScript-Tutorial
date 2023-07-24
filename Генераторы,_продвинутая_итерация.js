'use strict';

// Генераторы:

// 1. Создайте функцию-генератор, которая выдает квадрат каждого числа во входном массиве.

/*
function* generateSquare(array) {
    for (const i of array) {
        yield i ** 2;
    }
}

let generator = generateSquare([1, 2, 3, 4, 5]);

for (const value of generator) {
    console.log(value);
}
*/

// 2. Напишите функцию-генератор, которая генерирует случайное число в заданном диапазоне (включительно).

/*
function* generateRandomNumber(a, b) {
    while (true) yield Math.floor(Math.random() * (Math.floor(b) - Math.ceil(a) + 1)) + Math.ceil(a);
}

let generator = generateRandomNumber(5, 20);
console.log(generator.next().value);
*/

// 3. Реализовать генератор, генерирующий бесконечную последовательность чисел Фибоначчи.

/*
function* generateInfiniteFibonacci() {
    let a = 0, b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let generator = generateInfiniteFibonacci();

for (const value of generator) {
    console.log(value);
}
*/

// 4. Создать функцию-генератор, которая выдает символы заданной строки по одному.

/*
function* generateByCharacter(string) {
    for (const character of string) {
        yield character;
    }
}

let generator = generateByCharacter('Berik');

for (const character of generator) {
    console.log(character);
}
*/

// 5. Напишите функцию-генератор, которая выдает значения свойств объекта по очереди.

/*
function* generateObjProp(object) {
    for (const prop in object) {
        if (object.hasOwnProperty(prop)) {
            yield object[prop];
        }
    }
}

let person = {
    name: 'Berik',
    surname: 'Yeraliyev',
    age: 21
};

let generate = generateObjProp(person);

for (const prop of generate) {
    console.log(prop);
}
*/

// Асинхронные итераторы и генераторы:

// 1. Преобразуйте обычный синхронный генератор в асинхронный, используя `async` и `await`.

/*
async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

let generator = generateSequence(1, 5);

(async () => {
    for await (let value of generator) {
        console.log(value);
    }
})();
*/

//2. Создать асинхронный генератор, который асинхронно считывает строки из текстового файла и выдает их по одной.

/*
const fs = require('fs');

async function* generateReadFile(src) {
    const fileStream = fs.createReadStream(src);
    const rl = require('readline').createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
  
    for await (const line of rl) {
      yield line;
    }
}

let generator = generateReadFile('Название_JavaScript.html');

(async () => {
    for await (let value of generator) {
        console.log(value);
    }
})();
*/

// 3. Постройте асинхронный генератор, который генерирует случайное число после случайной задержки (от 1 до 5 секунд) для каждой итерации.

/*
async function* generateRandomNumber() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1) * 1000));
        yield Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1);;
    }
}

let generator = generateRandomNumber();

(async () => {
    for await (const number of generator) {
        console.log(number);
    }
})();
*/
'use strict';

// Задание 1: Обратные вызовы

// 1. Напишите функцию, которая принимает два числа в качестве параметров и использует функцию обратного вызова для возврата их суммы.

/*
function sumTwoNumbers(a, b) {
    return a + b;
}

function inputTwoNumbers(a, b, callback) {
    return callback(a, b);
}

let firstNumber = +prompt('Enter the first number');
let secondNumber = +prompt('Enter the second number');

let result = inputTwoNumbers(firstNumber, secondNumber, sumTwoNumbers)
alert(result);
*/

// Задание 2: Обещания и .then(), .catch(), .finally()

// 1. Напишите функцию, которая возвращает обещание. Обещание должно разрешиться через случайный промежуток времени (от 1 до 5 секунд) случайным числом. Используйте метод `.then()` для записи разрешенного значения в консоль.

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    const timeout = getRandomIntInclusive(1, 5) * 1000;
    const randomNumber = getRandomIntInclusive(0, 1000);

    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(randomNumber), timeout);
    });

    return promise;
}

let promiseWithRandomNumber = getRandomNumberWithDelay();

promiseWithRandomNumber.then(
    resolve => console.log(resolve)
);
*/

// 2. Модифицируйте предыдущую функцию так, чтобы она отклоняла обещание через случайное время (от 1 до 5 секунд) с сообщением об ошибке. Используйте метод `.catch()` для записи ошибки в консоль.

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    const timeout = getRandomIntInclusive(1, 5) * 1000;
    const randomNumber = getRandomIntInclusive(0, 1000);

    const promise = new Promise(function(resolve, reject) {
        // setTimeout(() => resolve(randomNumber), timeout);
        setTimeout(() => reject(new Error('Error message!')), timeout);
    });

    return promise;
}

let promiseWithRandomNumber = getRandomNumberWithDelay();

promiseWithRandomNumber
    .then(console.log)
    .catch(console.error);
*/

// 3. Добавьте к предыдущей функции блок `.finally()`, в котором будет записано сообщение о завершении выполнения обещания, независимо от того, было ли оно разрешено или отклонено.

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    const timeout = getRandomIntInclusive(1, 5) * 1000;
    const randomNumber = getRandomIntInclusive(0, 1000);

    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(randomNumber), timeout);
        setTimeout(() => reject(new Error('Error message!')), timeout);
    });

    return promise;
}

let promiseWithRandomNumber = getRandomNumberWithDelay();

promiseWithRandomNumber
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log('Completion of the execution!'));
*/

// Задание 3: Promise.all()

// 1. Создайте три функции, возвращающие обещания. Каждое обещание должно разрешаться с различным значением через случайное время (от 1 до 5 секунд).

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 1000);

        setTimeout(() => resolve(randomNumber), timeout);
        setTimeout(() => reject(new Error('Error message!')), timeout);
    });
}

getRandomNumberWithDelay().then(console.log);
getRandomNumberWithDelay().then(console.log);
getRandomNumberWithDelay().then(console.log);
*/

// 2. Используйте `Promise.all()` для одновременного выполнения всех трех обещаний. С помощью метода `.then()` выведите на консоль массив разрешенных значений.

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 1000);

        setTimeout(() => resolve(randomNumber), timeout);
        setTimeout(() => reject(new Error('Error message!')), timeout);
    });
}

Promise.all([getRandomNumberWithDelay(), getRandomNumberWithDelay(), getRandomNumberWithDelay()])
    .then((numbers) => {
        numbers.forEach(number => {
            console.log(number);
        });
    });
*/

// Задание 4: Promise.allSettled()

// 1. Модифицируйте предыдущее задание, включив в него одно обещание, которое отклоняется с ошибкой через случайный промежуток времени (от 1 до 5 секунд).

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 100);
        if (randomNumber < 50) {
            setTimeout(() => resolve(randomNumber), timeout);
        } else {
            setTimeout(() => reject(new Error('Error message!')), timeout);
        }
    });
}

getRandomNumberWithDelay().then(console.log);
getRandomNumberWithDelay().then(console.log);
getRandomNumberWithDelay().then(console.log);
*/

// 2. Используйте `Promise.allSettled()` для одновременного выполнения всех четырех обещаний. С помощью метода `.then()` выведите на консоль массив объектов, представляющих состояния выполнения (выполнено или отклонено).

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 100);
        if (randomNumber < 50) {
            setTimeout(() => resolve(randomNumber), timeout);
        } else {
            setTimeout(() => reject(new Error('Error message!')), timeout);
        }
    });
}

Promise.allSettled([getRandomNumberWithDelay(),
                    getRandomNumberWithDelay(),
                    getRandomNumberWithDelay(),
                    getRandomNumberWithDelay()])
    .then((numbers) => {
        numbers.forEach(number => {
            console.log(number.status);
        })
    });
*/

// Задание 5: Promise.any()

// 1. Создайте три функции, возвращающие обещания. Два обещания должны отклоняться с различными сообщениями об ошибках, а одно обещание должно разрешаться со значением через случайный промежуток времени (от 1 до 5 секунд).

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 100);

        setTimeout(() => resolve(randomNumber), timeout);
    });
}

function getRejectedWithDifferentMessages() {
    return new Promise((resolve, reject) => {
        const errorNumber = getRandomIntInclusive(200, 600);
        reject(new Error(`Error: ${errorNumber}`));
    });
}

getRejectedWithDifferentMessages().then(console.log);
getRejectedWithDifferentMessages().then(console.log);
getRandomNumberWithDelay().then(console.log);
*/

// 2. Используйте `Promise.any()` для одновременного выполнения всех трех обещаний. С помощью метода `.then()` выведите на консоль значение первого выполненного обещания.

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 100);

        setTimeout(() => resolve(randomNumber), timeout);
    });
}

function getRejectedWithDifferentMessages() {
    return new Promise((resolve, reject) => {
        const errorNumber = getRandomIntInclusive(200, 600);
        reject(new Error(`Error: ${errorNumber}`));
    });
}

Promise.any([getRejectedWithDifferentMessages(),
            getRejectedWithDifferentMessages(),
            getRandomNumberWithDelay()])
    .then(console.log);
*/

// Задание 6: Promise.race()

// 1. Создайте три функции, возвращающие обещания. Каждое обещание должно разрешаться с разным значением через случайный промежуток времени (от 1 до 5 секунд).

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 1000);

        setTimeout(() => resolve(randomNumber), timeout);
    });
}

getRandomNumberWithDelay().then(console.log);
getRandomNumberWithDelay().then(console.log);
getRandomNumberWithDelay().then(console.log);
*/

// 2. Используйте `Promise.race()` для одновременного выполнения всех трех обещаний. С помощью метода `.then()` выведите на консоль значение первого разрешенного обещания.

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const timeout = getRandomIntInclusive(1, 5) * 1000;
        const randomNumber = getRandomIntInclusive(0, 1000);

        setTimeout(() => resolve(randomNumber), timeout);
    });
}

Promise.race([getRandomNumberWithDelay(),
            getRandomNumberWithDelay(),
            getRandomNumberWithDelay()])
    .then(console.log);
*/

// Задание 7: Promisify

// 1. Напишите функцию, основанную на обратном вызове, которая считывает файл и вызывает функцию обратного вызова с содержимым этого файла.

/*
const fs = require('fs');

function readFileWithCallback(src, callback) {
    fs.readFile(src, 'utf-8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

readFileWithCallback('file.txt', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
*/

// 2. Используйте метод `util.promisify()` для преобразования функции, основанной на обратном вызове, в функцию, основанную на обещаниях.

/*
const fs = require('fs');
const util = require('util');

function readFileWithCallback(src, callback) {
    fs.readFile(src, 'utf-8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

const readFileWithCallbackPromisify = util.promisify(readFileWithCallback);

readFileWithCallbackPromisify('file.txt')
    .then(console.log)
    .catch(console.error);
*/

// Задание 8: async/await

// 1. Создайте функцию, которая возвращает обещание через произвольный промежуток времени (от 1 до 5 секунд). Обещание должно разрешаться с сообщением.

/*
function getRandomMessage() {
    return new Promise((resolve) => {
        const messages = ['Hello', 'Goodbye', 'Welcome', 'Farewell'];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const randomTime = Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {
            resolve(randomMessage);
        }, randomTime);
    });
}

getRandomMessage().then(console.log);
*/

// 2. С помощью ключевого слова `async` определите асинхронную функцию, которая вызывает предыдущую функцию и регистрирует разрешенное сообщение с помощью `await`.

/*
function getRandomMessage() {
    return new Promise((resolve) => {
        const messages = ['Hello', 'Goodbye', 'Welcome', 'Farewell'];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const randomTime = Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {
            resolve(randomMessage);
        }, randomTime);
    });
}

async function logRandomMessage() {
    const message = await getRandomMessage();
    console.log('Resolved message:', message);
}

logRandomMessage();
*/

// 3. Заверните вызов асинхронной функции в блок try-catch и запишите в журнал все возникающие ошибки.

/*
function getRandomMessage() {
    return new Promise((resolve, reject) => {
        const messages = ['Hello', 'Goodbye', 'Welcome', 'Farewell'];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const randomTime = Math.floor(Math.random() * 5000) + 1000;

        // setTimeout(() => {
        //     reject(randomMessage);
        // }, randomTime);

        setTimeout(() => {
            resolve(randomMessage);
        }, randomTime);
    });
}

async function logRandomMessage() {
    try {
        const message = await getRandomMessage();
        console.log('Resolved message:', message);
    } catch (error) {
        console.error('Error:', error);
    }
}

logRandomMessage();
*/
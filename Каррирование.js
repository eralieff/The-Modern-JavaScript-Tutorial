'use strict';

// A. Функция умножения:
// Создайте функцию multiply, которая принимает два аргумента и возвращает их произведение.

function multiply(a, b) {
    return a * b;
}

// B. Каррированная функция умножения:
// Преобразуйте функцию multiply в каррированную функцию curriedMultiply, которая принимает один аргумент и возвращает функцию, ожидающую второй аргумент, после чего возвращает их произведение.

function curriedMultiply(a) {
    return function(b) {
        return a * b;
    }
}

// C. Функция сложения:
// Создайте функцию add, которая принимает три аргумента и возвращает их сумму.

function add(a, b, c) {
    return a + b + c;
}

// D. Каррированная функция сложения:
// Преобразуйте функцию add в каррированную функцию curriedAdd, которая принимает один аргумент и возвращает функцию, ожидающую второй аргумент, и затем возвращает функцию, ожидающую третий аргумент, после чего возвращает их сумму.

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// Проверка результатов
const result1 = multiply(3, 5);
console.log("Результат умножения:", result1); // Ожидаемый вывод: 15

const curriedMultiplyBy3 = curriedMultiply(3);
const result2 = curriedMultiplyBy3(5);
console.log("Результат каррированного умножения:", result2); // Ожидаемый вывод: 15

const result3 = add(1, 2, 3);
console.log("Результат сложения:", result3); // Ожидаемый вывод: 6

const curriedAdd1 = curriedAdd(1);
const curriedAdd1And2 = curriedAdd1(2);
const result4 = curriedAdd1And2(3);
console.log("Результат каррированного сложения:", result4); // Ожидаемый вывод: 6
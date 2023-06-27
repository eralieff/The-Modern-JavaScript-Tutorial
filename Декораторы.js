'use strict';

let fac = function factorial(number) {
    return number > 1 ? factorial(number - 1) * number : number;
}

let fib = function fibonacci(number) {
    return number > 2 ? fibonacci(number - 1) + fibonacci(number - 2) : 1;
}

function logResultDecorator(func, name) {
    return function() {
        let result = func.apply(this, arguments);
        
        console.log(`Результат функции - ${name}: ${result}`);
        
        return result;
    }
}

function cacheDecorator(func) {
    let cache = new Map();

    return function(key) {
        if (cache.has(key)) {
            return cache.get(key);
        }

        return cache.set(key, func.apply(this, arguments));
    }
}

function callCountDecorator(func, name) {
    let count = 0;

    return function() {
        let result = func.apply(this, arguments);
        count++;
        console.log(`Функция "${name}" была вызвана ${count} раз`);
        return result;
    }
}

function timeDecorator(func, name) {
    return function() {
        let start = Date.now();
        let result = func.apply(this, arguments);
        let finish = Date.now() - start;

        console.log(`Функция "${name}" выполнилось за ${finish} мс`);
        return result;
    }
}

function argumentsCountDecorator(func, number) {
    return function() {
        if (arguments.length > number) {
            console.warn(`Функция может принимать в себе не больше чем ${number} аргумент`);
        }
        return func.apply(this, arguments);
    }
}

fac = logResultDecorator(fac, 'Факториал');
fac = cacheDecorator(fac);
fac = callCountDecorator(fac, 'Факториал');
fac = timeDecorator(fac, 'Факториал');
fac = argumentsCountDecorator(fac, 1);

fac(4);
fac(4);
fac(5);
fac(5);

fib = logResultDecorator(fib, 'Фибоначчи');
fib = cacheDecorator(fib);
fib = callCountDecorator(fib, 'Фибоначчи');
fib = timeDecorator(fib, 'Фибоначчи');
fib = argumentsCountDecorator(fib, 1);

fib(4);
fib(4);
fib(5);
fib(5);
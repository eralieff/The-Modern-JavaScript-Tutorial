/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/
'use strict';

function isEmpty(obj) {
    let k = 0;

    for (let prop in obj) {
        return false;
        k++;
    }

    return true;
    
    // if (k === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
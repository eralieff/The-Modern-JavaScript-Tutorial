'use strict';

/* Решение с использованием цикла
function printList(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
*/

/* Решение через рекурсию
function printList(list) {
    if (list !== null) {
        console.log(list.value);
        printList(list.next);
    }
}
*/

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list);
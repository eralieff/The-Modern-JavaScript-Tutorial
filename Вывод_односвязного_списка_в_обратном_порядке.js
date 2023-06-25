'use strict';

function printReverseList(list) {
    if (list !== null) {
        printReverseList(list.next);
        console.log(list.value);
    }
}

/* С использованием цикла
function printReverseList(list) {
    let tmpList = list;
    let tmpArr = [];

    while (tmpList) {
        tmpArr.push(tmpList.value);
        tmpList = tmpList.next;
    }

    tmpArr.reverse().map(value => console.log(value));
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

printReverseList(list);
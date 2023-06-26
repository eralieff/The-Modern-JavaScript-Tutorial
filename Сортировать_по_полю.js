'use strict';

function byField(property) {
    /* Мое решение
    if (property == 'name') {
        return (a, b) => a.name > b.name ? 1 : -1;
    }
    else if (property == 'age') {
        return (a, b) => a.age > b.age ? 1 : -1;
    }
    */

    return (a, b) => a[property] > b[property] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.forEach(user => console.log(user.name));

users.sort(byField('age'));
users.forEach(user => console.log(user.name));
'use strict';

function f() {
    console.log("Hello!");
}

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

f.defer(1000); // выведет "Hello!" через 1 секунду

/* Повторение декораторов и объектов
function User(_name, _surname) {
    this.name = _name;
    this.surname = _surname;
    
    this.getFullName = function() {
        return `${this.name} ${this.surname}`;
    }
}

function outputFullNameDecorator(func, user) {
    return function() {
        let result = func.apply(user, arguments);
        console.log(result);
    }
}

let user1 = new User('Berik', 'Yeraliyev');

user1 = outputFullNameDecorator(user1.getFullName, user1);

user1.defer(5000);
*/
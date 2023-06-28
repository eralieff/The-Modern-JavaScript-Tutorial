'use strict';

function Obj(_name, _age) {
    this.name = _name;
    this.age = _age;
}

/* Конструктор не сработает
Obj.prototype = {
    gender: 'idk'
}
*/

let obj = new Obj('Berik', 20);
let obj2 = new obj.constructor('Aruzhan', 22);

console.log(obj.name);
console.log(obj2.name);
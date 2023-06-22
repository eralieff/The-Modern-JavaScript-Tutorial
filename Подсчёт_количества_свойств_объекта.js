'use strict';

function count(user) {
    return Object.keys(user).reduce( (totalNumberProp) => totalNumberProp += 1, 0);

    // return Object.keys(user).length;
}

let user = {
    name: 'John',
    age: 30
};
  
console.log( count(user) ); // 2
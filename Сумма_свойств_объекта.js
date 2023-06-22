'use strict';

function sumSalaries(salaries) {
    let sumSalaries = Number(0);

    for (let value of Object.values(salaries)) {
        sumSalaries += value;
    }

    return sumSalaries;

    // return Object.values(salaries).reduce( (sumSalaries, value) => sumSalaries += value, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log( sumSalaries(salaries) ); // 650
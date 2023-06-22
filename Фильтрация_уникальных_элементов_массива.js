'use strict';

function unique(arr) {
    // let uniqueValuesSet = new Set();

    // arr.map(value => uniqueValuesSet.add(value));
    
    // return uniqueValuesSet;

    return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O
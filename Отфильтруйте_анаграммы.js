'use strict';

/*
function aclean(arr) {
    let spellWordsMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let tmpArray = [];

        for (let j = 0; j < arr[i].length; j++) {
            tmpArray.push(arr[i][j].toLowerCase());
        }

        tmpArray.sort( (a, b) => a.localeCompare(b) );
        spellWordsMap.set(tmpArray.join(''), arr[i]);
    }

    return Array.from(spellWordsMap.values());
}
*/

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
  
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
'use strict';
let numbers = process.argv.slice(2);
let result = Math.min(...numbers); 

console.log(`The minimum of [${numbers}] is ${result}`);

/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var numbers = process.argv.slice(2);
    var min = Math.min(...numbers);
    
    console.log(`The minimum of [${numbers}] is ${min}`);

*/
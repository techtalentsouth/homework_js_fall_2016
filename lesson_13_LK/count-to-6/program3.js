'use strict';

var inputs = process.argv.slice(2);
    var result = inputs.map(word => word.charAt(0))
                        .reduce((firstLetter, secondLetter) => firstLetter + secondLetter);
    console.log(`[${inputs}] becomes "${result}"`);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var inputs = process.argv.slice(2);
    var result = inputs.map(s => s[0])
                       .reduce((soFar, s) => soFar + s);
    
    console.log(`[${inputs}] becomes "${result}"`);

*/
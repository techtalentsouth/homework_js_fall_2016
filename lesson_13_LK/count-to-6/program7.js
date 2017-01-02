'use strict';
module.exports = function average(...numbers) {
    var sum = 0;
    numbers.forEach((num)=>sum+=num);
        return sum/numbers.length;
    };

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };
*/ 
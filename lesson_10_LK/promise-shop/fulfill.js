/**
 * Created by lkittogsuedu on 10/30/16.
 */
require('es6-promise');

'use strict';

var promise = new Promise(function (fulfill, reject) {
    var currentTime = Date.now();
    // Your solution here

    var execute = function () {
        if ((currentTime + 300) <= Date.now()) {
            return fulfill('FULFILLED!');
        }

        else {
            return reject('REJECTED');

        }
    };


    setTimeout(
        execute
        , 300
    );

});

// Your solution here
promise.then(function (fulfill) {
    console.log(fulfill);
}).catch(function (reject) {
    console.log(reject);
});

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict';

 // Create a promise

 var promise = new Promise(function (fulfill, reject) {
 // After the timeout reaches 300ms, fulfill the promise with value
 // 'FULFILLED!'.

 setTimeout(function () {
 fulfill('FULFILLED!');
 }, 300);
 });

 // Add a handler to the promise’s fulfillment. `console.log` will be called
 // with the value passed to `fulfill`, which is `'FULFILLED!'`.
 // Note that this statement will ALWAYS be executed before `fulfill` is
 // called (we'll talk about this in depth in the lessons to come).

 promise.then(console.log);


 */



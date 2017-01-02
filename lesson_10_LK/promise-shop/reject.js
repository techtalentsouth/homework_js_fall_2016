/**
 * Created by lkittogsuedu on 10/30/16.
 */
require = ('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    var currentTime = Date.now();
    var execute = function () {
        if (currentTime >= Date.now() - 300) {
            fulfill('FULFILLED!')
        } else {
            reject(new Error('REJECTED!'));
        }
    }
    setTimeout(execute, 300);
});

function onReject(error) {
    // Your solution here
    console.log(error.message);
}

// Your solution here
promise.then(function (success) {
    console.log(success)
}, onReject);


/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict';

 // Create a promise

 var promise = new Promise(function (fulfill, reject) {
 // After the timeout reaches 300ms, reject the promise with an `Error` object
 // with parameter `"REJECTED!"`.

 setTimeout(function () {
 reject(new Error('REJECTED!'));
 }, 300);
 });

 // Create a function to print `error.message` using `console.log`.

 function onReject(error) {
 console.log(error.message);
 }

 // Pass this function as a rejection handler to the `then` method of the
 // promise (the second parameter).

 promise.then(null, onReject);
 */
/**
 * Created by lkittogsuedu on 10/30/16.
 */
require('es6-promise');

var promise = new Promise(function(fulfill, reject){
    fulfill('PROMISE VALUE');

});
promise.then(console.log);
console.log('MAIN PROGRAM');

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict';

 var promise = new Promise(function (fulfill, reject) {
 fulfill('PROMISE VALUE');
 });

 // At this point, the value of promise is already known.

 // If promise is not always asynchronous, console.log would be called with
 // 'PROMISE VALUE' here. This is not the case.

 promise.then(console.log);

 console.log('MAIN PROGRAM');

 */
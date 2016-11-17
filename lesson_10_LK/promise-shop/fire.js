/**
 * Created by lkittogsuedu on 10/30/16.
 */
require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));

});
onRejected = function (err) {
    console.log(err.message);
};

promise.then(console.log, onRejected);

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict';

 var promise = new Promise(function (fulfill, reject) {
 fulfill('I FIRED');
 reject(new Error('I DID NOT FIRE'));
 });

 function onReject(error) {
 console.log(error.message);
 }

 promise.then(console.log, onReject);

 */
/**
 * Created by lkittogsuedu on 11/2/16.
 */

require('es6-promise');


function parsePromised() {
    if (process.argv.length >= 2) {
        var json = process.argv[2];
        try {
            var res = JSON.parse(json);
            return Promise.resolve(res);
        } catch (err) {
            return Promise.reject(err);
        }
    }

}

parsePromised().then(null, console.log);

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict'

 function parsePromised (json) {
 return new Promise(function (fulfill, reject) {
 try {
 fulfill(JSON.parse(json));
 } catch (e) {
 reject(e);
 }
 });
 };

 parsePromised(process.argv[2])
 .then(null, console.log)


 */
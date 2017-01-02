/**
 * Created by lkittogsuedu on 11/2/16.
 */

require('es6-promise');


function attachTitle(arg1) {
    return 'DR. ' + arg1;
}

var manhattan = Promise.resolve('MANHATTAN');


manhattan.then(attachTitle).then(console.log);
/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict';

 function attachTitle(name) {
 return 'DR. ' + name;
 }

 Promise.resolve('MANHATTAN')
 .then(attachTitle)
 .then(console.log);

 */
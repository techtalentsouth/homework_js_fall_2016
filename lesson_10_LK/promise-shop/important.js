/**
 * Created by lkittogsuedu on 11/2/16.
 */

var Q = require('q');

function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(arg1) {
    console.log(arg1++);
    return arg1;
}

Q.fcall(iterate, 1).then(iterate).then(iterate)
    .then(iterate).then(iterate).then(alwaysThrows)
    .then(iterate).catch(console.log)
    .done();
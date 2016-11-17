/**
 * Created by lkittogsuedu on 10/30/16.
 */
require('es6-promise');

var first = function (mystery) {
    return new Promise(function (resolve, reject) {
        resolve(mystery);
    });
}
var second = function (value) {
    return Promise.resolve(value + ' second value');
}


first('first value').then(function (result) {
    return second(result);
}).then(console.log);


/**
 * Created by lkittogsuedu on 11/1/16.
 */

/**
 * Created by lkittogsuedu on 11/1/16.
 */
var rp = require('request-promise');
var Data = {
    getData: function (id) {
        return rp.get(' http://jsonplaceholder.typicode.com/posts/' + id).then(function (data) {
            console.log(data);
        });
    }
};

//Stuff into set interval
module.exports = Data;

/**
 * Created by lkittogsuedu on 11/1/16.
 */
var rp = require('request-promise');
var moment = require('moment');


function getData() {
    rp.get(' http://jsonplaceholder.typicode.com/posts/1').then(function (data) {
        console.log(moment().format('h:mm:ss a'));
        console.log(data);
    });
}
//Stuff into set interval
getData();
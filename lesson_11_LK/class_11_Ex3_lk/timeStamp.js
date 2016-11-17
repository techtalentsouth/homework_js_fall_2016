/**
 * Created by lkittogsuedu on 11/1/16.
 */
var moment = require('moment');

var Timestamp = {
    getTimes: function () {
        console.log(
            moment().format('h:m:ss a')
        );
    }
};

module.exports = Timestamp;

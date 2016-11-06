/**
 * Created by lkittogsuedu on 11/1/16.
 */
var Data = require('./restData');
var Timestamp = require('./timeStamp');


//Stuff into set interval
Data.getData(1).then(Timestamp.getTimes());
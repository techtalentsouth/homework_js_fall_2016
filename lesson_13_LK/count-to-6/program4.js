'use strict';

 var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(() => console.log(this.yelp));
        }
    };
    foot.kick();
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(() => console.log(this.yelp));
        }
    };
    foot.kick();
*/
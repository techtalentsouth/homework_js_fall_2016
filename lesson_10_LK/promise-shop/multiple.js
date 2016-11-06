/**
 * Created by lkittogsuedu on 11/5/16.
 */

function all(p1, p2) {
    var counter = 0;

    return new Promise(function (resolve, reject) {
        var res1;
        var res2;

        p2.then(function (f2) {
            if (f2) {
                res2 = f2;
            }
            ++counter;
        });

        p1.then(function (f) {
            if (f) {
                res1 = f;
            }
            ++counter;
        });


        if (counter != 2) {
            setTimeout(result, 700);
        }
        else {
            result();
        }

        function result() {
            return resolve([res1, res2]);
        }
    });
    // return pAll;
}

all(getPromise1(), getPromise2()).then(console.log);

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 'use strict';

 // global getPromise1, getPromise2

function all(a, b) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var out = [];

        a.then(function (val) {
            out[0] = val;
            counter++;

            if (counter >= 2) {
                fulfill(out);
            }
        });

        b.then(function (val) {
            out[1] = val;
            counter++;

            if (counter >= 2) {
                fulfill(out);
            }
        });
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);
*/


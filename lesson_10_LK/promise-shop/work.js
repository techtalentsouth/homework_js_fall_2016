/**
 * Created by lkittogsuedu on 11/5/16.
 */

var qhttp = require('q-io/http');


qhttp.read("http://localhost:7000")
    .then(function (userid) {
        return qhttp.read("http://localhost:7001/" + userid)
    })
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 var qhttp = require('q-io/http');

 qhttp.read("http://localhost:7000/")
 .then(function (id) {
 return qhttp.read("http://localhost:7001/" + id);
 })
 .then(function (json) {
 console.log(JSON.parse(json));
 })
 .then(null, console.error)
 .done();


 */
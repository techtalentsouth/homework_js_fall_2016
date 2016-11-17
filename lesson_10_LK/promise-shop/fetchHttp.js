/**
 * Created by lkittogsuedu on 11/5/16.
 */


// fetch url and update charset to utf-8
var fetchUrl = require('fetch').fetchUrl;


fetchUrl('http://localhost:1337', function(error, meta, body){
    if(error){
        return console.log('ERROR', error.message || error);
    }

    console.log(JSON.parse(body.toString('utf-8')));
});

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 var qhttp = require('q-io/http');

 qhttp.read("http://localhost:1337")
 .then(function (json) {
 console.log(JSON.parse(json));
 })
 .then(null, console.error)
 .done()


 */
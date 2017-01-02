'use strict';
let userArray = process.argv.slice(2);
let [, username, email] = userArray;
let newUser = {username: username, email: email}
console.log(newUser); // {username: "jdoe", email: "john@doe.com"}

/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    let args = process.argv.slice(2);
    let result = {};
    
    [, result.username, result.email] = args;
    
    console.log(result);

*/
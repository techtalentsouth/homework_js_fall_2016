'use strict';

module.exports = (word, times = word.length) => word.concat("!".repeat(times));

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);



*/
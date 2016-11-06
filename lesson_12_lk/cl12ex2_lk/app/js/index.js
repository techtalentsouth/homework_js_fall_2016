/**
 * Created by lkittogsuedu on 11/3/16.
 */
'use strict';
var _ = require('lodash');
var $ = require('jquery');


function rollDice() {
    var roll = _.random(0, 6);
    var result = $('#result').html('<strong>' + roll + '</strong>');
}
$(document).ready(function () {
    var button = $('#dice').click(function () {
        rollDice();
    });
});





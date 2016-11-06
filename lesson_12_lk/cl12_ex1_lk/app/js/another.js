/**
 * Created by lkittogsuedu on 11/3/16.
 */
var $ = require('jquery');

module.exports = $("#reveal").on('click', function () {
    $("#greeting").html("<h1> hello world!</h1>");
    $(this).hide();
});

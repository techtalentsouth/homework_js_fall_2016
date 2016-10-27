/**
 * Created by lkittogsuedu on 10/25/16.
 */

$(document).ready(function () {


    function check() {
        var submit = true;
        var $name = $("#name");
        var $email = $("#email");
        var $phone = $("#phone");
        var $message = $("#message2");

        var required =
            [$name, $email, $phone, $message];

        required.forEach(function (item) {

            if (item.val() === "") {
                $("#message").text("Please Fill Out Required Fields");
                item.prev().addClass("warning");
                submit = false;
            }
            else {
                item.prev().removeClass("warning");
            }

        });
        if (submit) {
            $("#form").hide();
            $("#pre-form h2").text("Thanks for your feedback");
            $(".form-container").append("<p id='sname'></p>");
            $(".form-container").append("<p id='smessage'></p>");
            $("#sname").text("Name: " + $name[0].value);
            $("#smessage").text("Message: " + $message[0].value);
        }
    }

    var submit = $("#submit").click(function (e) {
        check();
    });

});

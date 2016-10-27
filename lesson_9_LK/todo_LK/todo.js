/**
 * Created by lkittogsuedu on 10/26/16.
 */

$(document).ready(function () {
    var $item;
    var $list = $("ul");
    var count = 1;

    $("#save").click(function (e) {
        $item = $("#item");
        e.preventDefault();
        var newItem = "<li id ='" + count + "'>" + $item[0].value + "</li>";
        $list.append(newItem);
        $item[0].value = '';

        var newTodo = $("#" + count);
        count++;
        removal(newTodo);
    });

    function removal(newTodo) {
        newTodo.on('click', function (ev) {
            newTodo.wrap("<strike>");
            newTodo.remove();
        });
    }
});


// Let's create a simple todo application
//
// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
//     The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
//     When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.



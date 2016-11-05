/**
 * Created by lkittogsuedu on 10/27/16.
 */

$(document).ready(function () {
    var postBttn = $("#getAllBttn").click(getAllPosts);

    var postIdBttn = $("#getPostsByIdBttn").click(getPostById);

    var postCommBttn = $("#getCommByIdBttn").click(getCommentById);

    var postPostBttn = $("#postPostBttn").click(postNewComment);

    var clearBttn = $('#clear').click(function () {
        var nothing = '';
        $("#postResult").text(nothing);
        $("#postIdResult").text(nothing);
        $("#postIdResult").text(nothing);
        $("#commIdResult").text(nothing);
        $("#commPostResult").text(nothing);
    })

    function getAllPosts() {
        $.get('https://jsonplaceholder.typicode.com/posts', function (posts) {
            $("#postResult").text(JSON.stringify(posts));
        });
    };

    function getPostById() {
        var id = $("#post-id-input").val();
        $.get("https://jsonplaceholder.typicode.com/posts", {id: id}, function (post) {
            $("#postIdResult").text(JSON.stringify(post));
        });
    };

    function getCommentById() {
        var id = $("#comm-id-input").val();
        $.get("https://jsonplaceholder.typicode.com/comments", {id: id}, function (comm) {
            $("#commIdResult").text(JSON.stringify(comm));
        });
    };

    function postNewComment() {
        var post = $("#create-post-textField").val();
        $.post("https://jsonplaceholder.typicode.com/comments", {post: post}, function (result) {
            $("#commPostResult").text(JSON.stringify(result));
        });
    };

});


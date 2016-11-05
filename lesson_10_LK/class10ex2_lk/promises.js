/**
 * Created by lkittogsuedu on 10/27/16.
 */

$(document).ready(function () {
        // get name and login user
        var userName;

        var login = $("#loginBttn").on('click', function (e) {
            e.preventDefault();
            getUser();
        });
        //fetch("http://jsonplaceholder.typicode.com/users?username=" + userName).then(loadData)

        // if no user display error

        //if user display posts and albums
        // function loadAlbumData(user) {
        //     console.log(user[0]);
        //
        // }

        function loadData(user) {
            console.log(user[0]);
            fetch('https://jsonplaceholder.typicode.com/albums?userid=' + user[0].id).then(function (response) {
                return response.json();
            }).then(function (albumData) {
                var albums = $("#albums").text(JSON.stringify(albumData));
            });

            fetch('https://jsonplaceholder.typicode.com/posts?userid=' + user[0].id).then(function (response) {
                return response.json();
            }).then(function (postData) {
                var albums = $("#posts").text(JSON.stringify(postData));
            });

        }

        function getUser() {
            userName = $("#userName").val();
            fetch("http://jsonplaceholder.typicode.com/users?username=" + userName).then(function (response) {
                return response.json();
            }).then(function (user) {
                return loadData(user);
            }).catch(function (error) {
                return error.message;
            });
        };


    }
);



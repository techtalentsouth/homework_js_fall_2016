/**
 * Created by lkittogsuedu on 10/27/16.
 */

$(document).ready(function () {
        // get name and login user
        var userName;
        var albumsJSON;
        var postsJSON;

        var login = $("#loginBttn").on('click', function (e) {
            e.preventDefault();
            getUser();
        });


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
                albumsJSON = albumData;
                var albums = $("#albums");
                var aList = $('<ul></ul>').html('<strong> Albums</strong>');
                albumData.forEach(function (album) {
                    var a = $('<li></li>').text(album.title);
                    a.attr({id: album.id});
                    //add details
                    var details = $('<p></p>');
                    details.attr({id: album.id + "_details"});
                    details.hide();
                    details.html('<strong>' + JSON.stringify(album) + '</strong>');
                    a.append(details);
                    //on a click show details
                    a.click(function () {
                        var d = $('#' + this.id + "_details");
                        d.show();
                        var d2 = $('#' + this.id).children()[0];
                        d2.show();
                    });
                    aList.append(a);
                })
                albums.append(aList);
            });


            fetch('https://jsonplaceholder.typicode.com/posts?userid=' + user[0].id).then(function (response) {
                return response.json();
            }).then(function (postData) {
                var albums = $("#posts").text(JSON.stringify(postData));
            });

        }

//fetch("http://jsonplaceholder.typicode.com/users?username=" + userName).then(loadData)
        function getUser() {
            userName = $("#userName").val();
            fetch("http://jsonplaceholder.typicode.com/users?username=" + userName).then(function (response) {
                return response.json();
            }).then(function (user) {
                return loadData(user);
            }).catch(function (error) {
                // if no user display error
                return error.message;
            });
        };


    }
);



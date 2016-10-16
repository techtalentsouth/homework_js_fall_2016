/**
 * Created by lkittogsuedu on 10/11/16.
 */


var superHeros = [["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]];

var secretIdentity = superHeros.map(function (revealArray) {
        return revealArray.join(" is ");
    }
);

console.log(secretIdentity.join("\n"));

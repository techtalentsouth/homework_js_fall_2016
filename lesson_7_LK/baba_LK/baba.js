/**
 * Created by lkittogsuedu on 10/19/16.
 */

var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
        "little boy": 1
    },
    {
        "location": "down the lane"
    }
];

var boy = Object.keys(woolOwners[2]);
//var littleBoy = boy[2];

//var whereHeLives = littleBoy.location;


var haveYouAnyWool = function () {
    for (var i = 0; i < woolOwners.length-1; i++) {
        var totalBags = totalBags;
    }
    return (i);
};


function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    var bags = haveYouAnyWool();
    if (bags > 0) {
        console.log("yes sir, yes sir " + bags + " bags full");
    }
}

function oneForMy() {
    var person;
    for (var i = 0; i <= 2; i++) {

        person = Object.keys(woolOwners[i]);
        console.log("one for my " + person);
    }
    console.log("that lives " + woolOwners[3].location);
}

baabaaBlackSheep();
oneForMy();



/**
 * Created by lkittogsuedu on 10/4/16.
 */

function Person(name) {
    this.name = name;
    this.getHand = function () {
        return (parseInt(Math.random() * 10) % 3);
    };
    this.wins = 0;
}

var player1;
var player2;
const weapons = ['rock', 'paper', 'scissors'];

//playRound('Lisa', 'Dawn', 5);
playTournament('Lisa', 'Sue', 'Betty', 'Dawn', 5);


function playRound(name1, name2, playUntil) {
    player1 = new Person(name1);
    player2 = new Person(name2);
    var hands = 0;
    while (hands < playUntil) {
        getScore(player1.getHand(),
            player2.getHand());
        hands++;
    }

    var name = player1.wins == player2.wins ? "It's a tie! No one" : player1.wins > player2.wins ? player1.name : player2.name;
    console.log(name + " wins the match");
}

function getScore(hand1, hand2) {

    var results = player1.name + ": " + weapons[hand1] + " vs " + player2.name + ": " + weapons[hand2] + ". ";

    if (hand1 === hand2) {
        console.log(results + "It's a tie!");
    }
    else if (hand1 > hand2 || (hand1 == 0 && hand2 == 2)) {
        player1.wins++;
        console.log(results + player1.name + " wins!");

    } else {
        player2.wins++;
        console.log(results + player2.name + " wins!")
    }
}

function playTournament(name1, name2, name3, name4, playUntil) {
    var winner = getWinner(name1, name2, playUntil);
    console.log("\n")
    var winner2 = getWinner(name4, name3, playUntil);
    console.log("\n")
    var finalWinner = getWinner(winner.name, winner2.name, playUntil);
    console.log(finalWinner.name +
    " wins the tournament!!!!!"
)
    ;
}

function getWinner(name1, name2, playUntil) {

    do {
        playRound(name1, name2, playUntil);
        var winner = player1.wins == player2.wins ? null : player1.wins > player2.wins ? player1 : player2;

    }
    while (winner == null);

    return winner;
}


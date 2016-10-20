console.log('hello world');

var player1 = new Player('Jeff');
var player2 = new Player('Tom');

var playH1 = document.getElementsByClassName('player1Name');
var playH2 = document.getElementsByClassName('player2Name');

playH1[0].innerHTML = player1.name;
playH2[0].innerHTML = player2.name;

var hands = ['rock', 'paper', 'scissors'];



playGame(player1, player2, 5);



function getHand() {
    var hand = hands[parseInt(Math.random() * 10) % 3];
    return hand;
}

function Player(name) {
    this.name = name;
    this.hand = getHand;
    this.score = 0;
}

function playRound(play1, play2) {

    var play1Hand = play1.hand();
    var play2Hand = play2.hand();

    var hand1H = document.getElementsByClassName('player1Choice');
    hand1H[0].innerHTML = play1Hand;

    var hand2H = document.getElementsByClassName('player2Choice');
    hand2H[0].innerHTML = play2Hand;

    console.log(play1.name + " played " + play1Hand);
    console.log(play2.name + " played " + play2Hand);

    switch (play1Hand) {
        case 'rock':
            if (play2Hand === 'rock') {
                console.log("It's a tie!");
            } else if (play2Hand === 'paper') {
                console.log(play2.name + " Wins!");
                play2.score++;
            } else {
                console.log(play1.name + " Wins!");
                play1.score++;
            }
            break;
        case 'paper':
            if (play2Hand === 'rock') {
                console.log(play1.name + " Wins!");
                play1.score++
            } else if (play2Hand === 'paper') {
                console.log("It's a tie!");
            } else {
                console.log(play2.name + " Wins!");
                play2.score++;
            }
            break;
        case 'scissors':
            if (play2Hand === 'rock') {
                console.log(play2.name + " Wins!");
                play2.score++;
            } else if (play2Hand === 'paper') {
                console.log(play1.name + " Wins!");
                play1.score++;
            } else {
                console.log("It's a tie!");
            }
            break;
    }
    console.log('')
    console.log('The score is: ')
    console.log(play1.name + ": " + play1.score);
    console.log(play2.name + ": " + play2.score);
    console.log('');
    var score1H = document.getElementsByClassName('player1Score');
    var score2H = document.getElementsByClassName('player2Score');
    score1H[0].innerHTML = play1.score;
    score2H[0].innerHTML = play2.score;
}

function playGame(play1, play2, playUntil) {
    setTimeout(function () {
        playRound(play1, play2);
        if (play1.score + play2.score !== playUntil) {
            playGame(play1, play2, playUntil);
        } else {
            if (play1.score > play2.score) {

                console.log(play1.name + " wins with " + play1.score + " points");
            } else if (play2.score > play1.score) {
                console.log(play2.name + " wins with " + play2.score + " points");
            } else {
                console.log("WOW! It's a tie");
            }
        }
    }, 1500);
}


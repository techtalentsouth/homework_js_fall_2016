/**
 * Created by lkittogsuedu on 10/11/16.
 */

var players = [
    {firstName: 'Matt', lastName: 'Ryan', position: 'QB', touchdowns: 32},
    {firstName: 'Devonta', lastName: 'Freeman', position: 'RB', touchdowns: 10},
    {firstName: 'Julio', lastName: 'Jones', position: 'WR', touchdowns: 12},
    {firstName: 'Mohamed', lastName: 'Sadu', position: 'WR', touchdowns: 8},
    {firstName: 'Tevin', lastName: 'Coleman', position: 'RB', touchdowns: 13},
    {firstName: 'Matt', lastName: 'Schaub', position: 'QB', touchdowns: 9},
    {firstName: 'Justin', lastName: 'Hardy', position: 'WR', touchdowns: 2}
];

//Find a player with the name 'Matt'
var matt = players.find(function (player) {
    return player.firstName === 'Matt';
})

// Get an array of all players with position 'RB'
var rb = players.filter(function (player) {
    return player.position === 'RB';
})

// Get an array of all the players lastNames
var lastName = players.map(function (player) {
    return player.lastName;
})


// Get an array of the full names of all the runningbacks with more than 5 touchdowns
var _5TD = players.filter(function (player) {
    return player.touchdowns > 5 && player.position == "RB";
}).map(function (p) {
    return p.firstName + " " +
        p.lastName;
});

// Get the number of touchdowns scored by Runningbacks
var numTD = players.filter(function (player) {
    return player.position === 'WR';
}).reduce(function (WB, current) {
    return WB + current.touchdowns;

}, 0);


console.log("matt: ", matt, "\nrb: ", rb, "\nlastName: ", lastName, "\n_5TD: ", _5TD, "\nnumTD", numTD);
'use strict';

$(document).ready(() => {

    //Random number between 19 and 120
    var randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);

    //each crystal has a hidden value between 1 and 12
    var amethyst = Math.floor(Math.random() * 12) + 1;
    var emld = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1;
    var wins = 0; 
    var losses = 0;  
    var totScore = 0;
    $('#totScore').text(totScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        reset();
    }

    $('#amethyst').click(() => {
        totScore = totScore + amethyst
        $('#totScore').text(totScore);
        if (totScore === randNumber) {win();} 
        else if (totScore > randNumber) {lose();}
    });

    $('#emld').click(() => {
        totScore = totScore + emld;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {win();} 
        else if (totScore > randNumber) {lose();}
    });

    $('#ruby').click(() => {
        totScore = totScore + ruby;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {win();} 
        else if (totScore > randNumber) {lose();}
    });

    $('#sapphire').click(() => {
        totScore = totScore + sapphire;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {win();} 
        else if (totScore > randNumber) {lose();}
    });

    function reset() {
        totScore = 0;
        $('#totScore').text(totScore);
        randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randNum').html(randNumber);
        amethyst = Math.floor(Math.random() * 12) + 1;
        emld = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
    }
});
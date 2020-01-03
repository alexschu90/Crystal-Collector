let blue = 0; 
let green = 0;
let oj = 0; 
let pink = 0;

let wins = 0; 
let losses = 0; 

let targetScore; 
let currentScore = 0; 

function gemValue() {
    blue = Math.floor(Math.random() * 11);
    green = Math.floor(Math.random() * 11);
    oj = Math.floor(Math.random() * 11);
    pink = Math.floor(Math.random() * 11);
}

function target() {
    targetScore = Math.ceil(Math.random() * 61) + 40;
    $("#target").text("Target Number: " + targetScore); 
    $("#current").text("Current Total: " + currentScore);
}

$(document).ready(function() {

    $("#start").click(function(){
        //once start is clicked, run random generator functions
        gemValue();
        target();
    }); 
});
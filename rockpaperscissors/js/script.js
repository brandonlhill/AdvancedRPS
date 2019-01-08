/* global $ */
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var RPS= ["rock","paper","scissors"];
var userXcomputerScore=[];
var scoreuser=0;
var scorecomp=0;
var counter=0;
// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    Overall();
});
$(document).keypress(function(e){
    if(e.which == 13) {
        console.log("enter had been pushed");
        Overall();
    }
});
console.log(scoreuser);
//this is the logic for the the webpage game!
function Overall(){
    console.log("Shoot had took place");
    var random = Math.floor(Math.random() * RPS.length);

    var userinput= $("#input1").val();
    $("#userChoice").text(userinput);
    $("#computerChoice").text(RPS[random]);
    
    console.log(userinput);
    if(userinput !== "rock"&& userinput !== "scissors" && userinput !== "paper"){
        alert("User you have input something that was not [Rock,Paper,or Scissors]");
        $("#userChoice").text("");
        $("#computerChoice").text("");
        $("#winner").text("");
    }
    else if(userinput === RPS[random]){
        $("#winner").text("There has been a Tie!");
        scoreuser++;
    }
    
     else if(userinput === "paper" && RPS[random]=== "rock"){
        $("#winner").text("User Wins!"); 
        scoreuser++;
     }
     else if(userinput === "scissors" && RPS[random]==="paper"){
        $("#winner").text("User Wins!");
        scoreuser++;
     }
     else if(userinput === "rock" && RPS[random]=== "scissors"){
        $("#winner").text("User Wins!"); 
        scoreuser++;
     }
     else{
        $("#winner").text("Computer Wins!");
        scorecomp++;
        
     }
    $("#score1").text("Score: "+ scoreuser);  
    $("#score3").text("Score: "+ scorecomp);  
}
    console.log("Comp Score= " + scorecomp);
    console.log("User Score= " + scoreuser);
//button 3    
$("#three").click(function(){
    scoreuser=0;
    scorecomp=0;
    counter = 3;
    console.log(counter);
    if($("#input1").val() === ""){
        console.log("this works fine like a cool summer day stuck in this sutpid office");
        $("#userAlert").text("You need to out a command into the input box").fadeOut(4000);
    }    
    else{
    for(var i = 0; i < counter; i++){
        Overall();
        console.log("This should run this many times ");
    }
    }
});
//button 6
$("#six").click(function(){
    scoreuser=0;
    scorecomp=0;
    counter = 6;
    console.log(counter);
    if($("#input1").val() === ""){
        console.log("this works fine like a cool summer day stuck in this sutpid office");
        $("#userAlert").text("You need to out a command into the input box").fadeIn().fadeOut(2200);
    }    
    else{
    for(var i = 0; i < counter; i++){
        Overall();
        console.log("This should run this many times " + counter);
    }
    }
});
//button 9 
$("#nine").click(function(){
    scoreuser=0;
    scorecomp=0;
    counter = 9;
    console.log(counter);
    if($("#input1").val() === ""){
        console.log("this works fine like a cool summer day stuck in this sutpid office");
        $("#userAlert").text("You need to out a command into the input box").fadeIn().fadeOut(2200);
    }    
    else{
    for(var i = 0; i < counter; i++){
        Overall();
        console.log("This should run this many times ");
    }
    }
});
//Reset button "CLR"
$("#reset").click(function(){
    scoreuser=0;
    scorecomp=0;
    counter = 9;
    $("#winner").text("");
    $("#score1").text("");  
    $("#score3").text(""); 
    $("#userChoice").text("");
    $("#computerChoice").text("");
    $('#input1').val('');
});
/* global $ */
//******************** BrandonHill.org **********************
//******* https://github.com/brandonlhill/AdvancedRPS *******
//****** Highschool Class Project Build ~April 12, 2017 *****
//**************** Updated November 01, 2019 ****************

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
        console.log("Enter Pressed");
        Overall();
    }
});
console.log(scoreuser);
//Overall(): Supports game logic
function Overall(){
    console.log("Ran Game");
    var random = Math.floor(Math.random() * RPS.length);

    var userinput = ($("#input1").val()).toLowerCase();;
    $("#userChoice").text(userinput);
    $("#computerChoice").text(RPS[random]);
    
    console.log(userinput);
    if(userinput !== "rock"&& userinput !== "scissors" && userinput !== "paper"){
        alert("Note: Please use one of the following options: Rock,Paper,or Scissors.");
        $("#userChoice").text("");
        $("#computerChoice").text("");
        $("#winner").text("");
    }
    else if(userinput === RPS[random]){
        $("#winner").text("User & Computer Tie!");
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
    console.log("Computer Score= " + scorecomp);
    console.log("User Score= " + scoreuser);
//button 3    
$("#three").click(function(){
    scoreuser=0;
    scorecomp=0;
    counter = 3;
    //console.log(counter);
    if($("#input1").val() === ""){
        $("#userAlert").text("Note: Please type rock, paper, or scissors in the inputbox.").fadeOut(4000);
    }    
    else{
    for(var i = 0; i < counter; i++){
        Overall();
        console.log("The game will run " + counter + "times");
    }
    }
});
//button 6
$("#six").click(function(){
    scoreuser=0;
    scorecomp=0;
    counter = 6;
    //console.log(counter);
    if($("#input1").val() === ""){
        $("#userAlert").text("Note: Please type rock, paper, or scissors in the inputbox.").fadeIn().fadeOut(2200);
    }    
    else{
    for(var i = 0; i < counter; i++){
        Overall();
        console.log("The game will run " + counter + "times");
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
        $("#userAlert").text("Note: Please type rock, paper, or scissors in the inputbox.").fadeIn().fadeOut(2200);
    }    
    else{
    for(var i = 0; i < counter; i++){
        Overall();
        console.log("This game will run " + counter + "times");
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

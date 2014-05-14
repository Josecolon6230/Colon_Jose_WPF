/*
Jose Colon
WPF Section 1
Expressions Personal
 */

//alert("testing");

//Expressions personal


//having a prompt telling me how much Influence Points I will get depending on how many games of League I play

//Amount of IP (Influence Points) earned per game
var pointsPerGame = 120;

//Will ask for the amount of games the player has played
var gamesPlayed = prompt("How many matches did you play of League today?");

//Will find the total amount of points earned
var pointsEarned = Number(gamesPlayed) * 120;

//Will return the result
var result = ("You played " + gamesPlayed + " games which earned you a total of " + pointsEarned +" IP." )

//console.log(pointsEarned);
//alert(pointsEarned);

//Final result
console.log(result);
alert(result);



/*
Jose Colon
WPF Section 1
Loops Worksheet
 */

//alert("Testing");


// For loops


//Some time has passed
//The world is infected by zombies
//There are a small amount of survivors
//One person alone can kill about 6 zombies in a supply run
//Each town is filled with at least 3000 zombies
//how many zombies would be taken down in 12 days?
/*
var days = 12; // amount of days
var numPeoples = 4;// number of people for a supply run
var zombieKills = 6; //number of zombies killed a day
var zombies = 3000;
var zombiesLeft = numPeoples * zombieKills;
for( var i =1; i<=days; i++){

    zombies -= zombiesLeft;

    console.log("After day "+i+" there are "+zombies+" remaining in this town");



}
*/
// while loop

//answer the following Question
//Will give a math problem if solved correctly get a notification that you got the answer correct if not
//Will get a pop up that the answer is incorrect and try again


alert("Solve this Math problem!");
var question = Number(prompt("What is a, if a = 18 divided by 2 + 6?:"));
var correctAnswer = question;
while(isNaN(question)){

    question = Number(prompt("Please answer the question!\na = 18 divided by 2 + 6?:"));



}















//Do While loop

var tacos = 4;

do{
    console.log("I want to eat "+tacos+" Tacos today!");

    tacos++;
}while(tacos<5);

console.log("But I ate "+tacos+" instead");













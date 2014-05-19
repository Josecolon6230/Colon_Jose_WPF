/*
Jose Colon
WPF Section 1
Validating Prompts
 */

//alert("Testing");


//Ask user for a min and max number
//Create random number in between those 2 numbers
alert("Let's find a random number between two numbers!");
var min = Number(prompt("Please type in a minimum number:"));
var max = Number(prompt("Please type in a maximum number:"));

//Validate our users responses
//Empty String
if(min===""){
    console.log("Inside of empty string min if statement");
    min = Number(prompt("Don't leave it blank, Give me a number:"));

}

//Test for not a number for max value

//isNaN()
//if its a number return false
//text string returns true
console.log(isNaN(max));

if(isNaN(max)){
    //will run if its true
    //Max is a string NOT a number
    max=Number(prompt("Please type in a number!!:"));

}



//Generate a random integer
//Math.random()*(max-min) + min;

var randomNumber = Math.round(Math.random()*(max-min) + min);

console.log("Your random number is "+randomNumber);

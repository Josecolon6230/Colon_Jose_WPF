/*
Jose Colon
WPF Section 1
Conditionals Personal
 */

//alert("testing");


//Want to buy a Xbox One
//Going to find out if I have enough for a Xbox One or not
//Price of Xbox One $400
//Price of Xbox One with Kinect $500
//Price of Xbox One with Titanfall bundle $500 but will add 100 dollars to make sure code works




var moneyHave = Number(prompt("How much money do you have? (Ex: 10.87)"));

var amountNeeded = 400 - moneyHave; // will be used if still missing amount for xbox

var xbox = 400;

var forKinect = amountNeeded + 100;

var forTitan = amountNeeded + 200;


(moneyHave >= xbox) ? console.log("Go to the nearest store and get yourself a Xbox One!"): console.log("You are still missing $"+amountNeeded+" better save up for a little longer.");


if(moneyHave<400){
    console.log("You are still missing $"+amountNeeded+" for a Xbox One, and if you want Kinect you will need $"+forKinect+" or $"+forTitan+" for the the Titanfall bundle.");
}else if(moneyHave<500){
    console.log("You can get your Xbox One! what are you waiting for?!");
}else if(moneyHave<600){
    console.log("You can get your Xbox One Kinect bundle! Get to the nearest store!");
}else{
    console.log("You can get your Xbox One TitanFall Bundle, Hurry up and get into the Combat!");
}


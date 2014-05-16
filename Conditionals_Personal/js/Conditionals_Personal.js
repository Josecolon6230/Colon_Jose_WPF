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



var xbox = 400; //dollars

var moneyHave = Number(prompt("How much money do you have? (Ex: 10.87)"));

var amountNeeded = xbox - moneyHave; // will be used if still missing amount for xbox

//(moneyHave >= xbox) ? console.log("Go to the nearest store and get yourself a Xbox One!"): console.log("You are still missing $"+amountNeeded+" better save up for a little longer.");



if(moneyHave>xbox){
    console.log("Go to the nearest store and get yourself a Xbox One!");
}else if(moneyHave>=xboxKinect){
    console.log("Go to the nearest store and get yourself a Xbox One Kinect bundle!");
}else if(moneyHave>=xboxBundle){
    console.log("Go to the nearest store and get yourself a Xbox One Bundle with TitanFall!");
}else{
    console.log("You can't get one yet, but keep on saving");
}


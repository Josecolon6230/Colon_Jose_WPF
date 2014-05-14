/*
Jose Colon
WPF Section 1
Logical Operators
 */
//alert("Testing");


// see if we can afford an iPad


//If the iPad is less than or equal to our budget


var budget = 700;
var iPadPrice = 499.99;
var paycheck = 700

//AND && - both must be true to be true


if(iPadPrice <= budget && paycheck > 600){
    //runs if it is TRUE
    console.log("You can buy the iPad!");
}else{
    console.log("No iPad for you!");
}


// Can we buy a car?
//If the price of car is less than our budget - buy the car!

var carPrice = 35000;
var carBudget = 12000;
var winLottery = true;

// OR || one or more of the pair must be true to be true.

if(carPrice < carBudget || winLottery ){  //winLottery===true
    console.log("Buy a new car!!");
}else{
    console.log("Your broke, no car for you!");
}
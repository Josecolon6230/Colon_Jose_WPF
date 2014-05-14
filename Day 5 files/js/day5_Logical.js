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
/*
Jose Colon
WPF Section 1
Math Class
 */

//alert("Testing");

//round()
//Normal rounding .5 goes up, less goes down

var num1 = 9.444;
console.log(num1);
console.log(Math.round(num1));


//Math.floor()
//floor chops off all decimals and always rounds down.
var num2 = 6.9;
console.log(num2);
console.log(Math.floor(num2));


//Math.ceil()
//Always rounds up


var num3 = 4.8;
console.log(num3);
console.log(Math.ceil(num3));


//Random numbers
//Math.random()
//Gives a random number between 0 -> 1

var num4 = Math.random();
console.log(num4);


//random number between 0 and 10

var num5 = Math.random()*10;
console.log(num5);

//random integer between 0 -> 100
var num6 = Math.round(Math.random()*100);
console.log(num6);


//Get a random integer between two numbers
//Math.random() * (max-min) + min

//integer between 50 -> 80

var num7 = Math.round(Math.random() * (30) + 50);
console.log(num7);


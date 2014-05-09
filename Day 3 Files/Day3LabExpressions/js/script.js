/*
Jose Colon
WPF 1405
Day 3 Lab Expressions
 */


//Slice of Pie 1

// Calculate how many slices of Pizza each person ate

var slices = 10;

var people = 6;

var pizzaBoxes = 4;

//Multiply slices * pizzaBoxes / 6

var pizzaPerPerson = slices * pizzaBoxes / people;

console.log("Each person ate "+pizzaPerPerson+" slices of pizza at the party.");


//Slice of Pie 2

//Calculate how many slices of pizza Sparky got


// Use % to find out the amount of slices Sparky gets using the Variables from Slice of Pie 1


var sparky = slices * pizzaBoxes % people;

console.log("Sparky got "+sparky+" slices of pizza.")



//Average shopping bill

//Find out the total amount of money spent in 5 weeks for grocery and its average



var week1 = 80;
var week2 = 70;
var week3 = 90;
var week4 = 60;
var week5 = 100;

//add each week of grocery to get total

var total = week1 + week2 + week3 + week4 + week5;

//console.log(total);

//Divide the total by he week amount to get average

var average = total / 5;

//console.log(average);

console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is a average of $"+average+" per week.")
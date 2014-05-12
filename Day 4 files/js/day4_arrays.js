/*
Jose Colon
WPF Section 1
Arrays
 */



//alert("Testing 1 2 3");

//Create a basic array

var avengersNames = ["Hulk","Iron Man","Cap America"];

//Print out the WHOLE array
console.log(avengersNames);

//Access a specific item in the array
console.log(avengersNames[2]);


//Set the Value of a specific item
avengersNames[0] = "Black Widow";

console.log(avengersNames[0]);

//Print whole log
console.log(avengersNames);


//Add new variable to the array

avengersNames[3] = "Hawkeye";
avengersNames[4] = "Scarlet Witch";
avengersNames[5] = "Quicksilver";
avengersNames[6] = "Green She-Hulk";

console.log(avengersNames);

//Figure out how long the array is?
//Length property of arrays
//To access a property or attribute of a variable
// Use DOT SYNTAX

console.log(avengersNames.length);


//The index number of the LAST item in an array
// is ONE less than the Length of the array

//Create a variable to find out the last item

var newestRecruit = avengersNames.length - 1;
//Gives us the index # of last item in array

//Print out the newest Avenger
console.log("Welcome "+ avengersNames[newestRecruit] +" you are our newest avenger");

//Pick Oranges

//Create am array to hold the # of oranges we pick each day
var orangesPicked = [9000, 30, 35000];

//average amount of oranges picked in a day

//Add all 3 days then divide by # of days

//Create a variable to hold the total number of oranges

var total = orangesPicked[0] + orangesPicked[1] + orangesPicked[2];
console.log(total);

//Create a variable for total number of days

var totalDays = orangesPicked.length;

console.log(totalDays);


//Create a variable to hold the average per day

var average = total / totalDays;
console.log(average);

console.log("After the "+totalDays+" days picking oranges, I picked a average of "+average+" oranges");

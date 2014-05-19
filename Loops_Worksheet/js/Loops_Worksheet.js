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

var days = 12; // amount of days
var numPeoples = 4;// number of people for a supply run
var zombieKills = 6; //number of zombies killed a day
var zombies = 3000;
var zombiesLeft = numPeoples * zombieKills;
for( var i =1; i<=days; i++){

    zombies -= zombiesLeft;

    console.log("After day "+i+" there are "+zombies+" remaining in this town");


}








/*
Jose Colon
WPF Section 1
Zombies!!!
 */

//alert("Beware of WALKERS!");


//Zombie Madness!!
//We have a zombie at Full Sail
//Zombie can bite 4 people a day and turn them into zombies


//The CDC wants to know how many zombies there will be in 8 days if not contained.

//create givens

var numZombies = 1; //How many zombies do we have
var numBites = 4; //Number of bites per zombie per day
var days = 9; //Number of days


//For loop

for(var i=1; i<=days; i++){

    //How many new zombies get made everyday
    //When do they bite new people

    var newZombies =numZombies + numBites;

    //add the new zombies to the total number of zombies
    numZombies += newZombies; //NumZombies = numZombies + newZombies
    console.log("There are "+numZombies+" zombies at the end of day #"+i);

}
/*
var numDays = 0;



var newZombies =numZombies + numBites;
while(numZombies < 7000000000){



    //add the new zombies to the total number of zombies
    numZombies += newZombies; //NumZombies = numZombies + newZombies
    console.log("There are "+numZombies+" zombies at the end of day #"+numDays);


    numDays++;

}
console.log("It will take "+numDays+" of days to take over the world!");
*/

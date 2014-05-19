/*
Jose Colon
WPF Section 1
While Loops
 */

//alert("Testing");


//Basic While Loop

//While loop. loops through a block of code as long as it is true

//Initialize the counter variable

var counter = 0;

//Setup while loop

while(counter<200){ //loops until false
    console.log("Something just never ends");
    //change the value of the counter variable
    //or it will run forever! not good!
    console.log("The counter is "+counter);
    counter++;
}


console.log("Ending counter "+counter);


//Do while loop

//This loop will run the code once to start, before checking if the condition is true
//Then it will repeat as long as the condition stays true.


//Initialize the variable

var i = 0;

//Setup the Do while loop

do{

    console.log("The number of i is "+i);

    //Change the value of variable to avoid an infinite loop
    i++;

} while(i<10);//condition to test

console.log("The ending value of i is "+i);


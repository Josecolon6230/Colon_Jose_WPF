/*
Jose Colon
WPF May 2014
Section 1
Random Number Generator
 */

//alert("Testing");

//Create a function that will give a random integer



function randomizer(mn, mx){//Use Parameters

    //Generate a random integer and RETURN it back


    //Create a variable to hold our random integer
    var randomNum = Math.round(Math.random()*(mx-mn)+mn);

    //Return the random integer

    return randomNum;

}

//Ask user for min and max values
//Cast user prompts to numbers

var minUser = Number(prompt("Please insert a min value"));

var maxUser = Number(prompt("Please insert a max value"));




//Function Call this randomizer


//NEED a variable to catch the Returned value

var result =randomizer(minUser, maxUser);//Need arguments


//Console log it out

console.log(result);


//Create a loop to give us 15 random integers


for(var i=0; i<15;i++){

    //create a random integer
    //console.log(result); DOES NOT WORK

    //Must function call to start the function
    console.log(randomizer(minUser, maxUser));



}


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

var minUser = prompt("Please insert a min value");

var maxUser = prompt("Please insert a max value");




//Function Call this randomizer


//NEED a variable to catch the Returned value

var result =randomizer(20, 100);//Need arguments


//Console log it out

console.log(result);


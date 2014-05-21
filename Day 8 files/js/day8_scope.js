/*
Jose Colon
WPF Section
Scope
 */
//alert("Testing");


//variable scoop
//variable inside & outside of a function

//try not to use the same variable names...but
//This is going to be impossible in large files


//Create a Variable for width in our MAIN code

var width = 5;


//Create a function that calculate the perimeter of a rectangle

function calcPeri(){

    width =28;


    console.log(width);
}
console.log("before  call "+width);
calcPeri();
console.log("After call "+width);
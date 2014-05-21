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

var width = 5;//Scoped outside of the function - "Main Code"


//Create a function that calculate the perimeter of a rectangle

function calcPeri(){

  var  width =10;//this is scoped to the function calcPeri


    console.log(width);

    var height = 20;
    var perimeter = width *2 + height*2;
    console.log("Inside of function the perimeter is "+perimeter);
    //variables created in a function can not be accessed outside of a function

}
console.log("before  call "+width);
calcPeri();
console.log("After call "+width);

//can not access a variable declared inside of a function!
//console.log("After call the perimeter is "+perimeter);
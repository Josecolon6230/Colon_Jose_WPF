/*
Jose Colon
WPF Section 1
Arguments & parameter
 */

//alert("Testing");


//argument & parameter

//Arguments goes into functions

//Parameters - Catch the arguments in the function

//Function to calculate area of rectangle

function calcArea(w, h){//Parameters go here

    //var width = 10;
    //var height = 20;
   // var area = width * height;
    var area = w *h;
    console.log(area);


}
//Call the function
calcArea(10,20);// Arguments go here

calcArea(20,30);


//Dog yearsage
function dogYears(humanAge){


    //Input a human year spit out a dog year
    //dogYears =humanYears * 7


    //create a variable for dog years
    var dogAge = humanAge * 7;


    //print it out
    console.log("Dog age is "+dogAge);


}


//call the dog function
dogYears(4);

var userInput = prompt("How old is your dog?");
dogYears(userInput);
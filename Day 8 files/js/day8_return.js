/*
Jose Colon
WPF Section 1
Returning Values
 */
//alert("Testing");


//Returning a Value from a function

function calcArea(w, h){//parameters


    //calculate area
var area =w*h;
    console.log(area);

//return the area to the main code
    return area;

}

//Call the function
calcArea(30, 20);


//This will not work
//console.log(area);

//catch the return value from the function
//Create a variable to hold the results

var returnArea =calcArea(10, 20);
console.log("Outside of function "+returnArea);


function circleArea(radius){

    //area of circle 2*pi*radius
    var area = 2*Math.PI*radius;

    //return this value
    return area;
}

//Find the area of the circle and then multiply times 2
var result = circleArea(4);
result *=2;
console.log("The area of  circle multiplied times 2 is "+result);

//find area of a circle multiplied by 3
var result2 = circleArea(5);
result2 *= 3;
console.log("The area of a circle multiplied times 3 is "+result2);
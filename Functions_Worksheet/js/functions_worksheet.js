/*
Jose Colon
WPF Section 1
Functions Worksheet
 */
//alert("Testing");



//Circumference of a circle


function circleCircum(radius){//Parameter

//circumference of circle is 2*PI*radius
    var circumference = 2*Math.PI*radius;

    return circumference;





}

var result = circleCircum(5);

console.log("The circumference of the circle is "+result);

//Stung!

//Takes 8.666666667 bee stings per pound to kill a animal
//Calculate the amount of stings are needed to kill a animal in a function


function beeStings(animalWeight){

    var stings = 8.666666667;//amount of stings per pound
    var stingsNeeded = animalWeight * stings; //the animals weight times the sting amount should give the amount of stings  needed to kill it.


    return stingsNeeded;
}

var result2 = beeStings(11);

console.log("It takes "+result2+" stings to kill this animal");












 /*
Jose Colon
WPF May 2014
Section 1
Anonymous
 */


 //Anonymous functions are super important in object oriented programs
 //Extremely popular in jQuery
 //Both Regular and Anonymous function will both work for you
 //Very quick and easy

//alert("Testing");

 //Basic function Structure

 function functionName(){



 }

 //Basic structure of Anonymous Function

 var functionName2 = function(){

     //Code to run

 }
//This code still needs a function call to run
 functionName2();

 //Normal Function that calculates the area of a triangle

 function triangleArea(b, h){
//area of triangle =.5 * base * height
     var area = .5 * b *h;
     return area;

 }

 //create a variable to catch return area
 var triArea = triangleArea(5, 6);
 console.log(triArea);


 //Make an anonymous version of the same function

 var triangleArea2 = function(b , h){

     var area = .5 * b *h;
     return area;


 }
 //Function call for anonymous

 //Create variable to catch the return

 var triArea2 = triangleArea2(7, 8);
 console.log(triArea2);
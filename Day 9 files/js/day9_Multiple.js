
 /*
Jose Colon
WPF May 2014
Section 1
Multiple Functions
 */

//alert("Testing");


 //Prompt the user for width and height
 var width = Number(prompt("Please type in a Rect width:"));

 //Validate user input for width
 //While loop to check if the user inputted a # and didn't leave it blank
 while(isNaN(width) || width===""){

width = Number(prompt("Please type in a Rect Width:"));

 }

 var height = Number(prompt("Please type in a Rect Height:"));

 while(isNaN(height) || height===""){

     height = Number(prompt("Pleas type in a Rect Height:"));
 }





 //Create a fucntion call to perimeter

var perimeter = perimeterRect(width, height);
 console.log(perimeter);



 //Function Call to find out the area
 var area = areaRectangle(width, height);
 console.log(area);

 //Final console.log

 console.log("A rectangle with a width of "+width+" and a height of "+height+" has a perimeter of "+perimeter+" and a area of "+area+".");
 alert("A rectangle with a width of "+width+" and a height of "+height+" has a perimeter of "+perimeter+" and a area of "+area+".");





 //Create a function to find a perimeter of a rectangle

 function perimeterRect(width, height){


     //Perimeter of rect is
     //2*width + 2*height
     var p =2*width + 2*height;


     //Return the perimeter
     return p;




 }





 function areaRectangle(w, h){


     //Area of a rectangle w*h

     var a = w*h;
     //Return the area
     return a;




 }
/*
Jose Colon
WPF 1405
Day 3 Class Examples
 */


//alert("Your page is linked correctly");


//Find out how old we are
//Create a variable for birth year
var  birthYear = 1991;


//Create a variable to hold the age

var age = 2014 - birthYear - 1;
console.log(age);


//Math
// + - / *



//Find the area of triangle
//Base * height * 1/2

var base = 4;
var height = 5;



var areaTriangle = base * height * .5;

console.log(areaTriangle);


//Modulo %
//Gives the remainder

var remainder =32%10;
console.log(remainder);

//Find out if things are even or odd

var evenOrOdd = 247643%2;
console.log(evenOrOdd);


//Assignment Operators
/*
= Assignment
++ Adds 1 to the variable
-- Subtract 1 from the variable
+= Addition Assignment
-= Subtraction assignment
/= Division assignment
*=Multiplication assignment
 */

var a = 1;
a++; //a = a+1
a--;// a =a-1
a+=4;//a = a+4;
a-=3;//a = a-3;
a/2;// a = a/2
a*=6;// a = a * 6;
console.log(a);


//Strings
//" or ' used to find the beginging and end of string
// Needed to distinguish between variable names and normal text

var kermit ="light green";

var frogName = "kermit";

//Double or single quotes?

var courseName = 'Web Programming Fundamnetals';

var phrase = 'I don\'t know.\n New Line starts here.';
console.log(phrase);


//Escapping character \ backslash

// \n - new line character


//Boolean
// true or a false
//NOT the text value of it!

var yes = true;
//Not boolean just text
var maybe = "true";

var nope = false;



//Order of operations
//PEMDAS
//Please Excuse My Dear Aunt Sally
//Parthenthesis, Exponents, Multiply, Add, Subtract

//Find the average of 4 Quiz Grades
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;
var quiz4 = 80;

//Find the average, add all together and then divide by  the total number of quizes

var average = (quiz1 + quiz2 + quiz3 + quiz4) /4;

//Do not over use Parenthesis

//Find the perimeter of a rectangle
// Length * 2 + Width * 2

//Create variable for GIVENS!!

var length = 7;
var width = 6;

var perimeter = (length * 2) + (width *2);
console.log(perimeter);
console.log("The Perimeter of a rectangle with a length of"+length+" and a width of "+width+" is" +perimeter+".");


//Concatenating - combining strings of text together

var firstName = "Kermit";
var lastName = "The Frog";

//Combine the first and last into a full name

var fullName = firstName + " " + lastName;
console.log(fullName);


var d = "6";

var e = "7";

var combine = d+e;
console.log(combine);


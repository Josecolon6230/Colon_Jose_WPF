/*
Jose Colon
WPF Section 1
Conditional worksheet
 */

//alert("testing");

//Last Chance for Gas!

//Going to drive across the desert and there will be no other gas station for another 200 miles
// should the driver fill up the tank or not?


var gasEff = 8; //8 miles per gallon

var amountInTank = 29; //amount in tank in gallons

var distance = 200; //miles of desert/ next gas station

var drive = gasEff * amountInTank;//driving without stopping
//console.log(drive);



if(drive > distance){
    console.log("Yes, you can make it without stopping for gas!")
}else{
    console.log("You only have " +amountInTank+" gallons of gas in your tank,better stop and get gas for now while you can!")
}




//Grade letter calculator
//Student gets their work graded lets find out they letter grade earned for all the work done

var studentGrade = 80; // percent grade

var a=  90;

var b = 80;

var c = 70;

var d = 60;

var f = 50;


if(studentGrade >= a){
    console.log("You have a " +studentGrade+" which means you have earned a A in the class!")
}else if(studentGrade >= b){
    console.log("You have a " +studentGrade+" which means you have earned a B in the class!")
}else if(studentGrade >= c){
    console.log("You have a " +studentGrade+" which means you have earned a C in the class!")
}else if(studentGrade >= d){
    console.log("You have a " +studentGrade+" which means you have earned a D in the class!")
}else console.log("You have a " +studentGrade+" which means you have earned a F in the class!")


























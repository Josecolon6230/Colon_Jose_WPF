/*
Jose Colon
WPF Section 1
Expressions Industry
 */

//alert("testing");

//Going to make a array that will give the average number of hours work with a average amount of hours worked on the website



var hoursWorked = [80, 65, 120, 70];

// get the total hours worked
var totalHours = hoursWorked[0] + hoursWorked[1] + hoursWorked[2] + hoursWorked[3];

//Testing
console.log(totalHours); // working

//Finding the average hours worked

var averageHours = totalHours / hoursWorked.length;

//testing
console.log(averageHours); //works


//Result
var result = ("The completed website took a total of " + totalHours + " hours, so the website was worked on for a average of " + averageHours + " hours.");

console.log(result); //working and completed


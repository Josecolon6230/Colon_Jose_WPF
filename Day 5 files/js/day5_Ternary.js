/*
Jose Colon
WPF Section 1
Ternary Conditionals
 */
//alert("Testing");


//Check our GPA and see if we can graduate
//Higher 2.0 GPA to graduate

var gpa = 1.7;

if(gpa > 2.0){
    console.log("congrats! You can graduate!");
}else{
    console.log("Sorry your GPA is too low");
}

//(condition) ? True code : false code ;
(gpa > 2.0) ? console.log("Congrats! you can Graduate"): console.log("Sorry you cant graduate");

//Pick a book based on kids age
//Under 10 - green eggs and ham - 10 and over gets Time Machine

var age = 6;

(age < 10) ? console.log("Green Eggs & Ham") : console.log("Time Machine");

(age >= 10) ? console.log("Time Machine") : console.log("Green Eggs & Ham");


//save the book name to a variable
var book;

book = (age < 10) ? "Green Eggs & Ham" : "Time Machine";

console.log("Your kid gets the book " + book);

if(age <10){
    book = "Green Eggs & Ham";
}else{
    book = "Time Machine";
}
console.log("This is the if statement book " +book);


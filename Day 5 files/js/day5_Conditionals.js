/*
Jose Colon
WPF Section 1
Conditionals Exercise
 */

//alert("Testing");


//Relational Expression


//If the child is 48 or taller he can ride the coaster
//If the child is riding with a parent, then he can be 45" tall. Anything smaller than that, no riding

var kidHeight = 45;

var minHeight = 48;

var wParentHeight = 45;




/*
if(thing to evaluate){
    code to run if it is true!
}
 */

if(kidHeight >= minHeight){
    //code will run if the kid is tall enough
    console.log("You can ride the roller coaster");
} else if(kidHeight >= wParentHeight){
    console.log("You can ride with a parent!");

} else {
    //Code will run if the kid is not tall enough
    console.log("Sorry kid you are not tall enough");
}

console.log("What comes after");
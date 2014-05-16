/*
Jose Colon
WPF Section 1
Conditionals Wacky
 */


//alert("Just a test");


// something wacky?



// Cake or Death?
alert("Cake or Death?\n Hit okay to try your luck!");
var cake =Math.round(Math.random()* (10-5)+ 5);// numbers 1 -> 10 give cake or death


var death =Math.round(Math.random()* (10-5) +5);

if(cake>=death){
    console.log("You get a cake!");
    alert("You get some cake!");
}else{
    console.log("We are all out of cake");
    alert("We are all out of cake....");
}
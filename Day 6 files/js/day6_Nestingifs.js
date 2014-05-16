/*
Jose Colon
WPF Section 1
Nesting If Statements
 */
//alert("Testing");

//Some Decisions affect other decisions


//If it is warm outside, lets go to the beach.
//If its not....lets go to the movies!

//If the water is warm, I'm going in the water
//If the water is not warm, I a going to get a tan

//Create variable for outside temp
//var temp = 90;//degrees
var temp = Number(prompt("What is the outdoor temp?"));

//Water temp
//var waterTemp = 78; //degrees


if(temp>=85){
    console.log("Let's go to the beach");
    var waterTemp = Number(prompt("What is the water temp?"));
    if(waterTemp>=75){
        console.log("Let's get in the water!");
    }else{
        console.log("Let's get a tan!");
    }

}else{
    console.log("Let's go see a movie");
}



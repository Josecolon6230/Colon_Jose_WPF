/*
Jose Colon
WPF Section 1
Else If Statement
 */

//alert("Testing");

//testing steak temperatures

/*
120 and under is uncooked
120-124 Steak is rare
125-129 Steak is Medium-rare
130-139 Steak is Medium
140-149 Steak is Medium-Well done
150-165 Steak is Well Done
Anything above 165 is Burnt
 */


//Create a variable for the steak temp

//var steakTemp = 135;
//Cast the variable as a number
var steakTemp = Number(prompt("What temp is your steak?"));

if(steakTemp<120){
    console.log("Steak is uncooked! Might be still mooing!");
}else if(steakTemp<125){
    console.log("Steak is cooked Rare!");
}else if(steakTemp<130){
    console.log("Steak is Medium-Rare!");
}else if(steakTemp<140){
    console.log("Steak is Medium!");
}else if(steakTemp<150){
    console.log("Steak is Medium-Well!");
}else if(steakTemp<=165){
    console.log("Your steak is Well Done!")
}else{
    console.log("Your steak is burn to a crisp!");
}


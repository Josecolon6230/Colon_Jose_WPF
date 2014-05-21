/*
Jose Colon
WPF Section 1
Loop Arrays
 */

//alert("Testing");



//Cycle through an array

//for(var i=0; i< array.length; i++)

//Create an array of Scooby Doo Characters

var names = ["Scooby", "Shaggy", "Velma", "Fred", "Daphne"];

//Loop through and tell each one that they solved a case

for(var i =0; i<names.length; i++){
    console.log("You solved the case "+names[i]+"!");

}

//Create an array of bills & then add them up


var bills = [50,10,5,20,10];

var totalBills = 0;

//Create a loop, cycle through and add up all the bills

for(var j =0; j<bills.length;j++){
    //add up all the bills
   // totalBills = totalBills +bills[j];

    //only care about bills equal or above $20
    if(bills[j]>=20){
        //if greater than 20 add it to total bills else forget it
        totalBills = totalBills +bills[j];
    }


}console.log("Your total for bills is "+totalBills);

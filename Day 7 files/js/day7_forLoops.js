/*
Jose Colon
WPF Section 1
For Loops
 */

//alert("Testing");

//Basic for loop

//for(initialization; Condition to test ; change variable)

for(var i=1; i<20; i*=2){

    console.log("i = "+i);

}


//Breaks
//break - stops the loop anywhere it is


for(var k=0; k<5; k++){

    console.log("k = "+k);

    if(k===3){
        break;
    }

}
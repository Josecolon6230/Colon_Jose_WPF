/*
Jose Colon
WPF May 2014Section 1
Beer!
 */


//alert("Testing");

//create the 99 bottles of beer on the wall song

//No loops
/*
console.log("99 bottles of beer on the wall. 99 bottles of beer.\n You take one down, you pass it around. 98 bottles of beer on the wall");
console.log("98 bottles of beer on the wall. 99 bottles of beer.\n You take one down, you pass it around. 97 bottles of beer on the wall");
console.log("97 bottles of beer on the wall. 99 bottles of beer.\n You take one down, you pass it around. 96 bottles of beer on the wall");
    */

//Loop method

//for loop (variable; condition; increment)

for(var i = 99; i>0; i-- ){
//test for the right numbers
//console.log(i);
  //  console.log(i+" bottles of beer on the wall. " +i+ " bottles of beer.\n You take one down, you pass it around. " +(i-1)+ " bottles of beer on the wall");

    if(i===1){
        console.log(i+" bottle of beer on the wall. " +i+ " bottle of beer.\n You take one down, you pass it around. No more bottles of beer on the wall. \nThe End!");


    }else{
        console.log(i+" bottles of beer on the wall. " +i+ " bottles of beer.\n You take one down, you pass it around. " +(i-1)+ " bottles of beer on the wall");

    }
}
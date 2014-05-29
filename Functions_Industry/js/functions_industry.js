
 /*
Jose Colon
WPF May 2014
Section 1
Functions Industry
 */

//alert("Testing");


 //Gonna make random codes for anything that comes into mind


 //Riot voting on skins
 alert("You got a new skin idea for the League of Legends game\n Input how many people approve of your new skin idea");

 var skinApproved = Number(prompt("How many employees voted on the new skin idea?"));

 (skinApproved>30) ? console.log("Start working on the new skin!!"): console.log("Hmmm seems like you might want to think of a new skin idea");

 while (isNaN(skinApproved) || skinApproved===""){

     skinApproved = Number(prompt("Please enter the amount of employees who approved the new skin idea:"));

 }

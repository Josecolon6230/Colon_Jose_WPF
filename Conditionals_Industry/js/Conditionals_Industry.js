/*
Jose Colon
WPF Section 1
Conditionals Industry
 */

//alert("Testing");

//How much work will be put into a server?

//Working on a website and its server how long will you check on the servers
//If worked on for a good amount of time the servers will run fine
//If worked too little the server will crash and need to be worked on again


var hoursNeeded = 6; // 6 hours are needed each day to make sure the server stays running

var hoursWorked = prompt("How many hours did you work today?");

if(hoursWorked<hoursNeeded){
    console.log("Servers have crashed please work on them A.S.A.P!");
    alert("Servers have crashed please check on them A.S.A.P");
}else{
    console.log("Servers are running perfectly");
    alert("Servers are running perfectly Job Well Done!");
}

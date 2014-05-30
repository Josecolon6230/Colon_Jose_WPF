
 /*
Jose Colon
WPF May 2014
Section 1
Final Exam
 */

//alert("Testing");


 //Prompt user the price of an item

 var price = Number(prompt("What is the price of a item?"));

 while (isNaN(price) || price===""){

     price = Number(prompt("Please input the price:"));
 }

 var discount = Number(prompt("What is the discount percent of the item?"));

 while (isNaN(discount) || discount===""){

     discount = Number(prompt("Please input the discount percent:"));

 }//Validates so only numbers will work

 function calDiscount(p,d){

 var discountAmount = p*(d%100/100);//Had to add another 100 for the division cause i was getting some scary negative numbers in the thousands
var finalPrice = p - discountAmount;
     return finalPrice;
 }

 var result = calDiscount(price,discount);

 console.log("The original price of the item was $"+price+" with a discount of "+discount+"% so the new total of the item is now $"+result);
 alert("The original price of the item was $"+price+" with a discount of "+discount+"% so the new total of the item is now $"+result);

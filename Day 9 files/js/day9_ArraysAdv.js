
 /*
Jose Colon
WPF May 2014
Section 1
Advance Arrays
 */

//alert("Testing");


 //Create an array of fruit

 var fruitArray =["Banana","Pear","Peach","Mango"];
 console.log(fruitArray);

 //Total number of items in the array


 console.log(fruitArray.length);

 //Last item in array is length - 1

 console.log(fruitArray[fruitArray.length-1]);

 //Add an item to the END of the array
 //Push() function - code that adds whatever is inside
 //of the () to the end of the array

 //PUSH an apple into the array

 fruitArray.push("Apple");
 console.log(fruitArray);

 //add a tomato

 fruitArray.push("Tomato");
 console.log(fruitArray);

 //Quick way to REMOVE the LAST item in the array
//pop() - NOTHING goes inside of the ()

 fruitArray.pop();
 console.log(fruitArray);

 //pop() can also return that item it removes
 //Create a variable to CATCH hat RETURNED item

 var caught = fruitArray.pop();
 console.log(fruitArray);
 console.log(caught);

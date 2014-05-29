/*
Jose Colon
WPF section 1
Review Quiz
 */


//alert("testing");


//prompt user for radius for a circle


var radius = Number(prompt("What is the radius of a circle?"));

console.log(radius);


while (isNaN(radius)|| radius===""){

    radius = Number(prompt("Please enter a radius:"));


}

function areaCircle(r){
    var area = 2*r*Math.PI;

    return area;
}

var result =areaCircle(radius);


console.log("The area of a circle with a radius of "+radius+" is "+result);


alert("The area of a circle with a radius of "+radius+" is "+result);




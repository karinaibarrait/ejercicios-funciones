/*
Exercise #1 ( sugerencia join() 
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

let palabras = ["This", "is", "a", "sentence."];

function printOracion() {
    let oracion = palabras.join(" ");
    document.getElementById("ejercicio-1").innerText = oracion;
}

printOracion();
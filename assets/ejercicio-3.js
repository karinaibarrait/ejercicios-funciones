/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

function calcularSumaYProducto(arreglo) {
    let suma = arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
    let producto = arreglo.reduce((acumulador, numero) => acumulador * numero, 1);
    document.getElementById("ejercicio-3").innerText = `La suma es: ${suma}. El producto es: ${producto}.`;
}

let numerosReduce = [1, 2, 3, 4];

calcularSumaYProducto(numerosReduce);

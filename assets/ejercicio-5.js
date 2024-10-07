/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function manipularArreglo() {
    let resultadoEjercicio5 = document.getElementById("ejercicio-5");
    let resultado = "";

    // 1. Imprimir todos los nombres de la lista
    resultado += "1. Lista de personas: " + personas.join(", ") + "<br>";

    // 2. Remover "Dani" del arreglo
    let indiceDani = personas.indexOf("Dani");
    if (indiceDani !== -1) {
        personas.splice(indiceDani, 1);
    }
    resultado += "2. Lista después de eliminar a Dani: " + personas.join(", ") + "<br>";

    // 3. Remover "Juan" del arreglo
    let indiceJuan = personas.indexOf("Juan");
    if (indiceJuan !== -1) {
        personas.splice(indiceJuan, 1);
    }
    resultado += "3. Lista después de eliminar a Juan: " + personas.join(", ") + "<br>";

    // 4. Mover "Luis" al frente del arreglo
    let indiceLuis = personas.indexOf("Luis");
    if (indiceLuis !== -1) {
        personas.splice(indiceLuis, 1); // Remueve a "Luis" y lo almacena
        personas.unshift("Luis"); // Agrega a "Luis" al inicio del arreglo
    }
    resultado += "4. Lista después de mover a Luis al frente: " + personas.join(", ") + "<br>";

    // 5. Agregar mi nombre al final del arreglo
    personas.push("Karina");
    resultado += "5. Lista después de agregar mi nombre (Karina): " + personas.join(", ") + "<br>";
   
    // 6. Iterar a través del arreglo y salir después de console.log "Maria"
    let contadorIteraciones = 0; // Inicializar un contador de iteraciones

    for (let i = 0; i < personas.length; i++) {
    contadorIteraciones++; // Incrementar el contador en cada iteración
    
    if (personas[i] === "Maria") {
        console.log("Iteración encontrada: " + personas[i] + ". Número de iteraciones: " + contadorIteraciones); 
        resultado += "6. Iteración: " + personas[i] + ". Número de iteraciones: " + contadorIteraciones + "<br>";
        break; // Salir del bucle después de encontrar "Maria"
        }
    }

    // 7. Encontrar el índice de "Maria"
    let indiceMaria = personas.indexOf("Maria");
    resultado += "7. Índice de Maria: " + indiceMaria + "<br>";

    // Mostrar el resultado en el HTML
    resultadoEjercicio5.innerHTML = resultado;
}

manipularArreglo();

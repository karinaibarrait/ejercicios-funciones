/* 
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/

function ordenamientoBurbuja(arreglo) {
    let longitudDelArreglo = arreglo.length;

    // Bucle externo para controlar cuántas veces pasamos por el arreglo
    for (let iteracionExterna = 0; iteracionExterna < longitudDelArreglo - 1; iteracionExterna++) {
        // Bucle interno para comparar e intercambiar elementos adyacentes
        for (let indiceActual = 0; indiceActual < longitudDelArreglo - iteracionExterna - 1; indiceActual++) {
            // Comparar el elemento actual con el siguiente
            if (arreglo[indiceActual] > arreglo[indiceActual + 1]) {
                // Intercambiar los elementos si están en el orden incorrecto
                let elementoTemporal = arreglo[indiceActual];
                arreglo[indiceActual] = arreglo[indiceActual + 1];
                arreglo[indiceActual + 1] = elementoTemporal;
            }
        }
    }

    return arreglo;
}

let arregloDeEntrada = [3, 6, 12, 5, 100, 1];

let arregloOrdenado = ordenamientoBurbuja(arregloDeEntrada);

let resultadoEjercicio6 = document.getElementById("ejercicio-6");
resultadoEjercicio6.innerHTML = "Salida (Arreglo Ordenado): " + arregloOrdenado.join(", ");



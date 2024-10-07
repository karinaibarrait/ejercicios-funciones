/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function encontrarCursosComunes(cursos1, cursos2) {
    let cursosComunes = cursos1.filter(curso => cursos2.includes(curso));
    let resultadoEjercicio4 = document.getElementById("ejercicio-4");

    if (cursosComunes.length > 0) {
        resultadoEjercicio4.innerText = `Cursos comunes: ${cursosComunes.join(", ")}`;
        
    } else {
        resultadoEjercicio4.innerText = "No hay cursos comunes.";
    }
}

encontrarCursosComunes(student1Courses, student2Courses);

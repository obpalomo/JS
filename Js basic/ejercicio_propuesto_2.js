/*
Las notas de María, Juan y Luis en los exámenes de evaluación son respectivamente:

María: 10, 3, 6, 7
Juan: 5, 6, 1, 4
Luís: 9, 1, 1, 8

- define un objeto para cada estudiante donde se vean reflejadas las notas
- crea un bloque if - else if en el que se devuelva si el estudante suspende (<5) aprueba (5 - 7) o tiene un notable (>= 8), tendras que hacer la media.
- testea el bloque con cada alumno

*/

let notaMaria = (10+3+6+7)/4
let notaJuan = (5+6+1+4)/4
let notaLuis = (9+1+1+8)/4

if (notaMaria < 5) {
    console.log('Maria', 'suspenso');
} else if (notaMaria <7) {
    console.log('Maria', 'aprobado');
} else if (notaMaria >=7) {
    console.log('Maria', 'notable');
}

if (notaJuan < 5) {
    console.log('Juan', 'suspenso');
} else if (notaJuan <7) {
    console.log('Juan', 'aprobado');
} else if (notaJuan >=7) {
    console.log('Juan', 'notable');
}

if (notaLuis < 5) {
    console.log('Luis', 'suspenso');
} else if (notaLuis <7) {
    console.log('Luis', 'aprobado');
} else if (notaLuis >=7) {
    console.log('Luis', 'notable');
}
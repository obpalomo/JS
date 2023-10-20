










/* TEORIA CLASE */
/* 1. OPERADORES LÓGICOS (OR, AND, NOT) */

/* or */
let llueve = true;
let fregada = false;

let isSueloMojado = llueve || fregada;

console.log('mojado', isSueloMojado); // true


/* and */
let soyRico = false;
let quieroUnFerrari = true;

let vasATenerUnFerrari = soyRico && quieroUnFerrari;

console.log('tengo', vasATenerUnFerrari);

/* not */

let tengoDinero = false;

if (tengoDinero) {
    console.log('no ir al cajero');
} else {
    console.log('ir al cajero');
}

/* !true -> false
!false -> true */

/* 2. OPERADORES ARITMÉTICOS (+, -, *, /, %, ++, --) */

let x = 15
let y = 4

// aritmetica
let suma = x + y;
let resta = x - y;
let multi = x * y;
let divi = x / y;
let modulo = x%y;

/* pre-incremento ++x -> se incrementa la variable y luego se asigna */

let pre = ++x; // pre = 16, x = 16

/* post-incremento x++ -> se asigna la variable y luego se incrementa */

let post = y++; // pre = 4, y = 5
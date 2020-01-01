'use strict'

// Funciones anonimas son aquellas que no tienen nombre, y pueden ser valores de variables.

var pelicula = function(nombre){
    return "La pelicula se llama " + nombre;
}

console.log(pelicula("Halloween"));


// Callbacks son funciones anonimas que son parametros de otra funcion

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);

    return suma;
}

sumame(5,
    7, 
    function(dato){
        console.log('La suma es ' + dato);},
    function(dato){
        console.log('La suma por dos es ' + (dato*2) );}
        )


// Funciones Flecha son callbacks pero con sintaxis mas limpia
sumame(5,
  
    7, 

    dato =>{
        console.log('La suma es ' + dato);},

    dato =>{
        console.log('La suma por dos es ' + (dato*2) );}
        )

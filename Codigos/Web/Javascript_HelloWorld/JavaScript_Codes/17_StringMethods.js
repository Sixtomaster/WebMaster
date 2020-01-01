'use strict'

var number = 2;
var minusculas = "minisculas";
var mayusculas = "MAYUSCULAS";
var text = "   Hola bievnvenido al curso en Javascript de Victor Robles   ";

var busqueda = text.includes("Javascript");

console.log(number.toString());
console.log(minusculas.toUpperCase());
console.log(mayusculas.toLowerCase());
console.log(text.trim()) //Quita los espacios sobrantes
console.log("Es texto incluye la palabra? " + busqueda); //Regresa un boleano

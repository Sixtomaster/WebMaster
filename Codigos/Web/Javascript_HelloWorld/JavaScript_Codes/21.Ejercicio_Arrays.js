'use strict'

/*

    El programa debe pedir 6 numeros por pantalla y los mete en un array.
    Mostrar el array entero en el cuerpo de la pagina y en la consola.
    Debemos sacar el array ordenado y mostrarlo
    Invertir su orden y mostrarlo
    Mostrar cuantos elementos tiene el Array
    Hacer una busqueda de un valor introducido por el usuario, debe decirnos si esta en el array asi como su indice.

*/

var numbers = []; //Generar el array

//Solicitar 6 numeros

for(var i = 0; i <= 5; i++){
    var number = parseInt(prompt('Introduce el numero que deseas agregar al Array: ', 0));

    if(isNaN(number)){
        alert('Introduce un numero valido');
        i--;
    }

    else{
        numbers.push(number);
    }
   
}

//Mostrar el Array en el cuerpo de la pagina
ShowArray(numbers, " ");
console.log(numbers);

//Ordenar y mostrar
var sorted_numbers = numbers.sort(function(a,b){return a-b});
ShowArray(sorted_numbers, "ordenado");

//Ordenar inverso y mostrar
var inverse_sorted_numbers =numbers.reverse();
ShowArray(inverse_sorted_numbers, "invertido");

//Mostrar cuantos elementos tiene
document.write("<h1>El array tiene :" + numbers.length+ " elementos </h1>")

//Preguntar por un numero
var objectiveNumber = parseInt(prompt('Escribe que numero deseas buscar'));

var position = numbers.findIndex(number => number==objectiveNumber );

if(position && position != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>La posicion del numero dentro del array es: " +position+ "</h1>");
}
else{
    document.write("<h1>El numero no esta dentro del array</h1>");
}


function ShowArray(elementos, customText){
    document.write("<h1>Contenido del Array " +customText+ "</h1>");
    document.write("<ul>");

    for(let index in elementos){
        document.write("<li>" +elementos[index]+ "</li><br/>");
    }

    document.write("</ul>");
}
'use strict'
/*
Tabla de multiplicar de un numero introducido
*/

var number = parseInt(prompt('Introduce el numero ', 1));

document.write("<h1> Tabla del " + number + "</h1>");
for(var i = 1; i <= 10; i++){

    document.write(i+" x " + number+ " = " + (i*number)+ "<br/>" );

}
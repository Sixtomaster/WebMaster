'use strict'

/*
Usa un bucle que muestre la suma y media de los numeros
introducidos hasta que intruduzca un negativo
*/

var suma = 0;
var counter = 0;

do{
    var number = parseInt(prompt('Introduce numeros hasta que metas un negativo'));

    if(isNaN(number)){
        number = 0;
        alert('Ingresa un numero valido')
    }

    else if(number >= 0){
        suma = suma + number;
        counter++;
    }

    else if(number < 0){
        alert('El resultado de la suma es ' + suma);
        alert('El promedio es ' + (suma/counter));
    }
}while(number >= 0)
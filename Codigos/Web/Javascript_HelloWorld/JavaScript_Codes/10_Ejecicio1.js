'use strict'
/*
    Hacer un programa que pida dos numeros. 
    Luego que nos diga cual es mayor, cual menor
    o y si son iguales.

    Si los numeros no son un numero, o son menores
    que cero, nos pida introducir datos de nuevo

*/
var ok = true
var number1;
var number2


number1= prompt('Escribe el primer numero', 0);
number2 = prompt("Introduce el segundo numero", 0);

number1 = parseInt(number1);
number2 = parseInt(number2);

while(number1 < 0 || number2 <0 ||isNaN(number1 || isNaN(number2))){

        alert('Introduce numeros correctos');
        number1= prompt('Escribe el primer numero', 0);
        number2 = prompt("Introduce el segundo numero", 0);

        number1 = parseInt(number1);    
        number2 = parseInt(number2);
        ok = false

}

if(number1 == number2){
    alert("Los numeros son iguales");
}
else if(number1 > number2){
    alert("Numero 1 es mayor que numero 2");
}

else if(number1 < number2){
    alert("Numero 1 es menor que numero 2");
}

else{
    alert('Introduce numeros correctos');
}



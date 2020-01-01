'use strict'

var name = "Erick"
var age = 30;
var ageLimit = 18;

/*
    Comparaciones 

    Mayor: >
    Menor: <
    Igual: ==
    Mayor o Igual: >=
    Menor o Igual: >=
    Diferente: !=

*/

//Operadores Logicos

/*

    AND:      &&
    OR:       ||
    NEGATION: !
    

*/

console.log("LOGICA CON IF");
if(age >= ageLimit){

    console.log(name + "tiene "+ age +", es mayor de edad");

    if(age <= 33){
        console.log("Eres millenial");
    }
    else if(age >= 65){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres millenial");
    }

}
else{
    console.log(name + " es menor de edad");
}


console.log("LOGICA CON SWITCH");
var imprime = " ";

switch(age){
    case 18: 
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    default:
        imprime = "Tu edad es neutra";
        break;
}

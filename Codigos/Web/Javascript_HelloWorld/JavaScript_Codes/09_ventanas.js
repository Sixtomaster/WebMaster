'use strict'

//Alertas
alert('Esta es una alerta!');

//Confirmacion
var result = confirm("Estas seguro que deseas continuar?")
console.log(result);

//Ingreso de datos
var age = prompt("Que edad tienes?", 18);
console.log(age);
//Este resultado siempre es string
console.log(typeof age);
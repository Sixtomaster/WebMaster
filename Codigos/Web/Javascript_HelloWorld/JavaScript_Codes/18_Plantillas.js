'use strict'

var name = prompt("Mete tu nombre");
var lastName = prompt("Mete tu apellido");

//Opcion 1 
//var text = "Mi nombre es " +name+ ". Mi apellido es " +lastName;

//Plantilla 

var text = `

<h1>Hola que tal</h1>
<h3>Mi nombre es: ${name}</h3>
<h3>Mi apellido es: ${lastName}</h3>

`;

document.write(text);
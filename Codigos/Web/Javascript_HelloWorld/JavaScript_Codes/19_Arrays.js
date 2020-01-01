'use strict'

//Arreglos vs Variables
var name = "Erick Hernandez";
var names = ["Erick Hernandez", 4.2, "David Castillo", 52, false, true];

var lenguajes =new Array("PHP", "JS", "Java");

console.log(names[5]);

//Operadores de Arrays

var size =names.length;

// Recorrer Arrays

for(var i =0; i< lenguajes.length; i++){
    console.log(lenguajes[i]);
}

//FOr each

lenguajes.forEach((elemento, index)=>{

    document.write("<li>"+index+ " - " + elemento + "</li>");

});


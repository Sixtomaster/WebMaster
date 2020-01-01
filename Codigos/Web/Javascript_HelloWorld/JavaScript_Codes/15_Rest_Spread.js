'use strict'

//PARAMETROS REST
function listadoFrutas(fruta1, fruta2, ...allFruits){

    console.log(fruta1 + ' y ' + fruta2);
    console.log(allFruits);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon");


//PARAMETROS SPREAD
var fruits = ["Naranja", "Manzana"];
listadoFrutas(...fruits, "Sandia", "Pera", "Melon");

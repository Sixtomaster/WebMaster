'use strict'

//Document Object Model

 // ***** Obtener el obejeto con un ID ***** //
var caja = document.getElementById("micaja"); 

//var caja = document.querySelector('#micaja');

caja.innerHTML = "Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

changeBackgroundColor("black");

//console.log(caja);


// ***** Obtener el obejeto por su ettiqueta ***** //
var allDivs = document.getElementsByTagName('div');
var section = document.querySelector('#miseccion');

var hr = document.createElement("hr");



var index;
for (index in allDivs){

    var paragraph = document.createElement("p");

    if(typeof(allDivs[index].textContent) == 'string' ){
        var text = document.createTextNode(allDivs[index].textContent);
        paragraph.append(text);
        document.querySelector('#miseccion').prepend(paragraph);
    }

    
}

section.append(hr);



// ***** Obtener el obejeto por su clase ***** //
var redDivs = document.getElementsByClassName("rojo");
var yellowDivs = document.getElementsByClassName("amarillo");

for(var div in redDivs){

    if(redDivs[div].className == "rojo"){

        redDivs[div].style.background = "red";
    }
    
}


for(var div in yellowDivs){

    if(yellowDivs[div].className == "amarillo"){

        yellowDivs[div].style.background = "yellow";
    }
    
}



function changeBackgroundColor(color){
    caja.style.background = color
}
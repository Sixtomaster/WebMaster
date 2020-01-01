'use strict'

window.addEventListener('load', () =>{

    var btnStop = document.querySelector("#stop");
    var btnStart = document.querySelector("#start");

    //Timers

    //Set interval, se ejecuta la funcion declarada cuando pasa cierto tiempo
    //Que se pone de parametro.
   function intervalo(){
    var time = setInterval(function(){
        console.log("Set interval ejecutado");
        var encabezado = document.querySelector("h1");

        if(encabezado.style.fontSize == "35px"){
            encabezado.style.fontSize = "30px";
        }
        else{
            encabezado.style.fontSize = "35px";
        }

    }, 1000);

    return time;
   }
    

    btnStop.addEventListener("click", function() {
        clearInterval(time);
        alert("Detuviste el blucle del interval");
        
    });

    btnStart.addEventListener("click", function() {
        alert("Iniciaste el blucle del interval");
        intervalo();
        
    });

    var time = setTimeout(function(){
        console.log("Set timeout ejecutado");
        var encabezado = document.querySelector("h1");

        if(encabezado.style.color == "blue"){
            encabezado.style.color = "red";
        }
        else{
            encabezado.style.color = "blue";
        }


    }, 1000);


});
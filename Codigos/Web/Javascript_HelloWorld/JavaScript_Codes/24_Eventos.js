'use strict'

//Eventos del raton

//Meter todos los eventos en el evento LOAD

window.addEventListener('load', ()=>{

    var btn = document.getElementById("boton");
    var input = document.getElementById("name_field");

        //Evento Click
        btn.addEventListener(onclick, function(){
            changeColor();
        });

        //Mouse over
        btn.addEventListener("mouseover", function(){
            this.style.padding = "10px";
            this.style.border  = "1px solid #ccc"
        })


        //Mouse Out
        btn.addEventListener("mouseout", function(){
            this.style.padding = "5px";
            this.style.border  = "1px #ccc"
        })


        //Focus
        input.addEventListener('focus', function(){
            console.log("[Focus] Estas dentro del input");
        })

        //Blur
        input.addEventListener('blur', function(){
            console.log("[Blur] Estas fuera del input");
        })


        //KeyDown
        input.addEventListener('keydown', function(event){
            //Convierte el caracter del teclado a un String
            console.log("[Keydown] Pulsando esta tecla " + String.fromCharCode(event.keyCode)); 
        })

        //KeyPress
        input.addEventListener('keydown', function(event){
            //Convierte el caracter del teclado a un String
            console.log("[Keypress] Tecla presionada " + String.fromCharCode(event.keyCode)); 
        })

        //KeyUp
        input.addEventListener('keydown', function(event){
            //Convierte el caracter del teclado a un String
            console.log("[Keypu] Tecla soltada " + String.fromCharCode(event.keyCode)); 
        })

        function changeColor(){
            console.log("Me has dado click");
            var bg = btn.style.background;
            if(bg == "green"){
                btn.style.background = "red"
                
            }
            else{ 
                btn.style.background = "green"
            }
        
            return true
        }
})




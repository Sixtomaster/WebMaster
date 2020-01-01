'use strict'
window.addEventListener('load', ()=> {

    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector(".dashed");

    boxDashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Submit caputurado");

        var name = document.querySelector("#name").value;
        var lastName = document.querySelector("#lastname").value;
        var age = parseInt(document.querySelector("#age").value);

        console.log(name.length);

        if(name == null || name.length== 0){
            alert("El nombre no es valido");
            return false
        }

        if(lastName == null || lastName.length == 0){
            alert("El apellido no es valido");
            return false
        }
        
        if(age == null ||age <= 0 || isNaN(age)){
            alert("La edad no es valida");
            return false
        }

        boxDashed.style.display = "block";
        
        var p_name = document.querySelector("#p_name span");
        var p_lastname = document.querySelector("#p_lastname span");
        var p_age = document.querySelector("#p_age span");

    p_name.innerHTML = name;
    p_lastname.innerHTML = lastName;
    p_age.innerHTML = age;

    })





})
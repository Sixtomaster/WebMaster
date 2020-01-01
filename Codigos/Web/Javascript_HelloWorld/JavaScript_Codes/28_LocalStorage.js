'use strict'

//Comprobar disponibilidad del LocalStorage
if(typeof(Storage) !== 'undefined'){
    console.log('LocalStorage Disponible');
}

else{
    console.log('LocalStorage No Disponible');

}

//Guardar datos en el navegador
localStorage.setItem("title", "Curso de Simfony");
var title = localStorage.getItem("title");
console.log(title);

//Guardar Objetos en el navegador
var user = {
    name: "Erick Hernandez",
    email: "sixtomaster@gmail.com",
    web: "ggeasynoob.com"
}

//Es necesario convertir los datos a un STRING
var user_string =JSON.stringify(user);
localStorage.setItem("Usuario", user_string );

//Recuperar Objetos del localstorage
var data = localStorage.getItem("Usuario");
data = JSON.parse(data);

console.log(data);

//Eliminar Objetos del localstorage
localStorage.removeItem("Usuario");
localStorage.clear();
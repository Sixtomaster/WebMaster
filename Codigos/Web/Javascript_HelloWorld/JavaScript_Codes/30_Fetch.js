'use strict'


//Fetch (ajax) y peticiones y servicios
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

getUsuarios().then(data => data.json()) //Convierte la informacion a un objeto JSON
.then(users => {    
    listadoUsuarios(users.data);
    return getJanet();
})
.then(data => data.json())
.then(user => {
    showJanet(user.data);

   
})
.catch(error => {
    console.log(error);
});


function listadoUsuarios(usuarios){
    usuarios.map((user,i) =>{
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
        div_usuarios.append(nombre);
        
    });
}

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')

}

function getInfo(){
    var profesor = {
        name:'Erick',
        last_name: 'Hernandez'
    };

    return new Promise((resolve,reject) =>{
        var profesor_string = JSON.stringify(profesor);
        if(typeof profesor_string != 'string')return reject('error');

        return resolve(profesor_string);
    })
    
    
}

function showJanet(user){
    
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');
    
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    div_janet.append(nombre);
    div_janet.append(avatar);
}

'use strict'

var categorias = ['accion', 'terror', 'comedia', 'drama'];
var peliculas = ['DOOM', 'SAW', 'Naruto'];

var cine = [categorias, peliculas];

console.log(cine);

//Agregar elemento a un arreglo

peliculas.push('Batman');

var elemento = " ";

do{
    elemento = prompt('Introduce tu pelicula: ');
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop();

console.log(peliculas);


// Eliminar un elemento en concreto

var index = peliculas.indexOf('DOOM'); //Indice donde esta ubicado el elemento

if(index > -1){
    peliculas.splice(index,1);
    console.log(peliculas);
}

// Convertir datos de un array a un String

var peliculas_string = peliculas.join();

//Convertir String en un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

//Ordenar arrays

peliculas.sort(); // Ordena alfanumericamente 
peliculas.reverse();//Invierte el orden del array

//For IN

for(let index in peliculas){
    //Similar al for each
    console.log(peliculas[index]);
}

// Buscar dentro de un array

var busqueda = peliculas.find(pelicula=> pelicula == "DOOM");

console.log(busqueda);


var precios = [20,15,12,10,5];

var search = precios.some(precio => precio > 10);
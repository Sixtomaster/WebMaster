/*

    Muestra los numeros divisores de un numero introducido

*/

var number = parseInt(prompt('Introduce un numero', 0));

for(var i = 0; i<= number; i++ ){
    if(number%i==0){
        console.log(i);
    }
}
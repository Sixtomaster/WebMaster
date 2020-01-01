'use strict'

// Browser Object Model

getBom();



function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url);
}
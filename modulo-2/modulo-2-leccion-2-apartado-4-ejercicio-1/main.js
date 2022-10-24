"use strict";

const button=document.querySelector('.button');

button.addEventListener('click',(event)=>{
    const hello=document.querySelector('.text');
    hello.innerHTML='Mi primer click, ¡ole yo y la mujer que me parió!';
});
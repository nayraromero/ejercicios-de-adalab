"use strict";

const nameUser=document.querySelector('.js-name');
const button=document.querySelector('.button');
const text=document.querySelector('.text');

button.addEventListener('click',(event) => {
    const nameValue=nameUser.value;
    text.innerHTML=`Hola ${nameValue}!`;
})
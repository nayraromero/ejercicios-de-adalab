"use strict";

const button=document.querySelector('.button');

button.addEventListener('click', (event)=>{
    if (button.classList.contains('button')){
        button.classList.remove('button');
        button.classList.add('button-change');
    }else{
        button.classList.remove('button-change');
        button.classList.add('button');
    }
});
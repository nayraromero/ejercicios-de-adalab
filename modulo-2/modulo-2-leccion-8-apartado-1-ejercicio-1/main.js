// Ejemplo apuntes

// const options = ['coche', 'viaje', 'crucero', 'llavero'];
// const lotteryNumberInput = document.querySelector('#lotteryNumber');

// function handleLotteryNumberChange(event) {
//   const input = event.currentTarget;
//   const selectedNumber = parseInt(input.value);
//   const ind = selectedNumber - 1; // El índice empieza en 0
//   const result = options[ind]; // Utilizamos una constante que contiene un número como valor
//   console.log('Premio: ', result);
// }

// lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);

'use strict';

const movies= ['Una cuestión de tiempo', 'Shutter Island', 'Disobedience'];
movies[3]='¿A quién te llevarías a una isla desierta?';
// console.log(movies);
movies[2]='La llamada';
// console.log(movies);
function workWithMovies(){
    console.log(movies);
}
console.log(workWithMovies());

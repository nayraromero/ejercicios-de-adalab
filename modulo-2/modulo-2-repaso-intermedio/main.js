'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.button');
const face = document.querySelector('.js-face');
const body = document.querySelector('.body');

function chooseSmile() {
  const selectValue = select.value;
  face.innerHTML = selectValue;
}
function deleteBackground() {
  body.classList.remove('orange');
  body.classList.remove('yellow');
}
function colorBackground() {
  const randomNumber = (Math.random() * 100).toFixed();
  console.log(randomNumber);
  if (randomNumber % 2 === 0) {
    deleteBackground();
    body.classList.add('yellow');
  } else {
    deleteBackground();
    body.classList.add('orange');
  }
}
button.addEventListener('click', (event) => {
  event.preventDefault();
  chooseSmile();
  colorBackground();
});

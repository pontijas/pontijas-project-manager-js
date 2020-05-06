'use strict';

// global variables

const addBtn = document.querySelector('.js_btn-add');

// arrays

let taskLists = [];

// functions

function handleEvent() {
  setHtmlListCode();
}

function setHtmlListCode() {
  let htmlCode = '';

  htmlCode += ` <section class="main__section">`;
  htmlCode += ` <div class="card__button-container">
      <button class="card__button">JS</button>
      <button class="card__button">Css</button>
      <button class="card__button">Html</button>
    </div>`;
  htmlCode += `<h2 class="main__title">Tarea</h2>`;
  htmlCode += `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>`;
  htmlCode += `<button class="main__button">+ Añadir otra tarjeta</button>`;
  htmlCode += `</section>`;

  console.log('me han clickado');

  return htmlCode;
}

addBtn.addEventListener('click', handleEvent);

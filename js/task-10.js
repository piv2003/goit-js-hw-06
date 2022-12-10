function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputBoxes = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const createBoxes = document.querySelector('[data-create]'); 
const destroyBoxes = document.querySelector('[data-destroy]'); 

createBoxes.addEventListener("click", createBoxes);
destroyBoxes.addEventListener("click", destroyBoxes);

function createBoxes() {

};

function destroyBoxes() {
  
};



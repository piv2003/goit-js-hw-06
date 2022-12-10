function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackground = document.querySelector('body');
const spanColorText = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onchangeColor);

function onchangeColor() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  spanColorText.textContent = getRandomHexColor();
}

const inputFontControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputFontControl.addEventListener("input", () => {
    spanText.style.fontSize = `${inputFontControl.value}px`;
});
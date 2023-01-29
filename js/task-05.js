const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", function onFormInput(event) {
    event.currentTarget.value;
    outputText.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === "") {
        return outputText.textContent = "Anonymous";
    }
}
)

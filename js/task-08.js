const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', validForm);

function validForm(event) {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert('Please fill in all fields');
        return;
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}


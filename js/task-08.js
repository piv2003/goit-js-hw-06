const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', validForm);

function validForm(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Please fill in all fields');
    }
    const dataForm = {
        email: email.value,
        password: password.value,
    }
    console.log(dataForm);
    event.currentTarget.reset();
}


const loginForm = document.querySelector(".login-form");
function  handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const  email = form.elements.email.value;
    const password = form.elements.password.value;
    if (!email ||  !password) {
        alert("All form fields must be filled in!");
    }
    else {
        console.log(`Email: ${email}, Password: ${password}`);
        form.reset();
    }
}


loginForm.addEventListener("submit", handleLogin)


const user = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    dob: undefined,
    gender: undefined,
    phone: undefined
};

function signupStep1() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    if (password.value != confirmPassword.value) {
        console.log("password are different");
        return;
    }

    const terms = document.getElementById("terms");
    if (!terms.checked) {
        console.log("terms not checked");
        return;
    }

    const privacy = document.getElementById("privacy");
    if (!privacy.checked) {
        console.log("privacy not checked");
        return;
    }

    user.firstName = document.getElementById("firstName").value;
    user.lastName = document.getElementById("lastName").value;
    user.email = document.getElementById("email").value;
    user.password = password.value;
    
    console.log(user);

    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    user.dob = dob.value;
    user.gender = gender.value;

    window.localStorage.setItem("user")
}

const form = document.querySelector('form');
form.addEventListener('submit', stopFormDefault);

function stopFormDefault () {
    event.preventDefault();
    console.log("Form submission cancelled")
}
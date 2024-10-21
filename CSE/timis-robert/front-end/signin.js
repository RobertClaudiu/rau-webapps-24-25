const USERS = [
    {
        "email": "wa@gmail.com",
        "password": "cra"
    },
    {
        "email": "gaglairdo@gmail.com",
        "password": "gallade"
    },
    {
        "email": "barrow@gmail.com",
        "password": "bologna"
    },
    {
        "email": "sarmisegetuza@gmail.com",
        "password": "giulesticrangasi"
    },
];

function signin() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log(email.value);
    console.log(password.value);

    for (let user of USERS) {
        if (user.email == email.value) {
            if (user.password == password.value) {
                window.location.replace("home.html");
            }
        }
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', stopFormDefault);

function stopFormDefault () {
    event.preventDefault();
    console.log("Form submission cancelled")
}
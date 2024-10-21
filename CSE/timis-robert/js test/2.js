let h1 = document.createElement("h1");

h1.innerText = "Welcome to my page";
h1.style.fontSize = "25px";
h1.style.color ="green";

let body = document.getElementsByTagName("body") [0];
body.appendChild(h1);

let input = document.createElement("input");
input.placeholder = "Insert a number";
body.appendChild(input);

let button = document.createElement("button");
button.input = "Submit";
body.appendChild(button);
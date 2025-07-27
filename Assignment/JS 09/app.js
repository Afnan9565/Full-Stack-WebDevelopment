let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
let input = document.createElement("input");

body.append(input);
body.append(btn);
input.setAttribute("placeholder", "Username");
btn.setAttribute("id", "btn");

let h1 = document.createElement("h1");
h1.innerHTML = "DOM Practice";
h1.classList.add("heading");
body.append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b> Practice";
body.append(p);

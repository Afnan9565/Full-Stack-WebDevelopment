let btn = document.querySelector("button");
let box = document.querySelector(".color");
let head = document.querySelector("h1");
let Changecolor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red},${green},${blue})`;
  head.innerText = color;
  box.style.backgroundColor = color;
};
btn.addEventListener("click", Changecolor);

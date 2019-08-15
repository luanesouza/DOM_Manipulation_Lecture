console.log("js listening");
console.log(API_KEY);


let gif_box = document.querySelector(".gif_box");
let section = document.querySelector("section");
let form = document.querySelector("form");
let input = document.querySelector("#feeling_input");
let button = document.getElementById("button");
let p = document.createElement('p');

form.addEventListener("submit", function(event){
  event.preventDefault();
  p.innerText = input.value;


})

section.append(p);

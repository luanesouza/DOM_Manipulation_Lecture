console.log("js listening");

const url = `http://api.giphy.com/v1/gifs/search?q=`


let gif_box = document.querySelector(".gif_box");
let section = document.querySelector("section");
let form = document.querySelector("form");
let input = document.querySelector("#feeling_input");
let button = document.getElementById("button");
let p = document.createElement('p');

form.addEventListener("submit", function(event){
  event.preventDefault();
  p.innerText = input.value;
  fetchingData()
})
section.append(p);


const fetchingData = (data) => {
  let userInput = p.innerText
  fetch(`${url}${userInput}&api_key=${API_KEY}&limit=5}`, {
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => console.log(response))
}
// fetchingData();

import { example } from './data.js';
import data from './data/lol/lol.js';
for (const i in data.data) {
  document.getElementById(
    "root"
  ).innerHTML += `<div class="champClass"><img src="${data.data[i].img}">
    <p>${data.data[i].name}</p><i>${data.data[i].title}</i></div>`;
}

console.log(example, data);

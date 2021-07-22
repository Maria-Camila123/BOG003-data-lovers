import { filterChampions } from "./data.js";
import data from "./data/lol/lol.js";
const listChampions = data.data;

document.getElementById("roles").addEventListener("change", function () {
  let role = document.getElementById("roles").value;
  let listChamps = filterChampions(role);
  //console.log(listChamps);
  document.getElementById("root").innerHTML = ``;
  listChamps.forEach((champ) => {
    document.getElementById(
      "root"
    ).innerHTML += `<div class="champClass"><img src="${listChampions[champ].splash}">
    <p>${listChampions[champ].name}</p><i>${listChampions[champ].title}</i></div>`;
  });
});

for (const i in listChampions) {
  document.getElementById(
    "root"
  ).innerHTML += `<div class="champClass"><img src="${listChampions[i].splash}">
    <p>${listChampions[i].name}</p><i>${listChampions[i].title}</i></div>`;
}

//console.log(example, data);

import { filterChampions } from "./data.js";
import data from "./data/lol/lol.js";

const listChampions = data.data;

document.getElementById("roles").addEventListener("change", () => {
  let role = document.getElementById("roles").value;
  console.log(role);
  let listChamps = filterChampions(role);
  showRoles(role);
  //hiddenRoles(All);
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

const hiddenRoles = () => {

  let assassinText = document.getElementById("role-assassin");
  let fighterText = document.getElementById("role-fighter");
  let mageText = document.getElementById("role-mage");
  let tankText = document.getElementById("role-tank");
  let marksmanText = document.getElementById("role-marksman");
  let supportText = document.getElementById("role-support");

  assassinText.style.display = "none";
  fighterText.style.display = "none";
  mageText.style.display = "none";
  tankText.style.display = "none";
  marksmanText.style.display = "none";
  supportText.style.display = "none";
  
}

hiddenRoles();
//let championRole = document.getElementById("roles");



const showRoles = (role) => {
   //let championRoleDiv = document.getElementById("champion-role");
   //role es igual a el valor de los section con el id "roles"  
   
  
  let assassinText = document.getElementById("role-assassin");
  let fighterText = document.getElementById("role-fighter");
  let mageText = document.getElementById("role-mage");
  let tankText = document.getElementById("role-tank");
  let marksmanText = document.getElementById("role-marksman");
  let supportText = document.getElementById("role-support");


  //assassinText.style.display = "block";
  if (role == "Assassin"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "block";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";

  }else if (role == "Fighter"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "none";
    fighterText.style.display = "block";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";
  
  }else if (role == "Mage"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "block";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";

  }else if (role == "Tank"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "block";
    marksmanText.style.display = "none";
    supportText.style.display = "none";

  }else if (role == "Marksman"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "block";
    supportText.style.display = "none";
  
  }else if (role == "Support"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "block";
  
  }else if (role == "All"){
    //championRoleDiv.innerHTML=""
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";
  }
}







/*
selectAssassin.addEventListener("click", productos);
activities.addEventListener("change", function() {
  if(activities.value == "addNew")
  {
      addActivityItem();
  }
});*/



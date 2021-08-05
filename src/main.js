import { filterChampions, ascendantChamps, descendantChamps} from "./data.js";
import data from "./data/lol/lol.js";

const listChampions = data.data;
//console.log("listChampions", listChampions)
//let role = document.getElementById("roles").value;


document.getElementById("roles").addEventListener("change", () => {
  //console.log(role)
  let role = document.getElementById("roles").value;
  let listChamps = filterChampions(role);
  //console.log(role)

  showRoles(role);
 
  document.getElementById("root").innerHTML = ``;
 
  showChampions(listChamps);

});
/*************ORDENAR*****************/

let order = document.getElementById("order");
order.addEventListener("change", () => {
    //console.log(order)
let role = document.getElementById("roles").value;
let listChamps = filterChampions(role);
//let listChamps = filterArray
//console.log(listChamps)
  if (order.value === "a-z") {
      showChampions(ascendantChamps(listChamps));
      //console.log(showChampions(ascendantChamps))
    }else if(order.value === "z-a") {
      showChampions(descendantChamps(listChamps));
      //console.log(showChampions(descedantChamps))
  }
})

/******************************/


const showChampions = (champions) => {
  document.getElementById("root").innerHTML = ``;
    //console.log("showChampions", champions)
   if (Array.isArray(champions)=== true){
  //console.log("champions", champions)
    champions.forEach((champ) => {
       //console.log("champ", champ)
      //console.log(listChampions[champ])
      document.getElementById("root").innerHTML += 
      `<div class="champClass"><img src="${champ.splash}">
        <p>${champ.name}</p>
        <i>${champ.title}</i></div>`;
    });
    
   }else {
     //console.log(champions)
    for (const i in champions) {
      document.getElementById("root").innerHTML += 
      `<div class="champClass"><img src="${champions[i].splash}">
        <p>${champions[i].name}</p>
        <i>${champions[i].title}</i></div>`;
     }
   } 
  }
  showChampions(listChampions);

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



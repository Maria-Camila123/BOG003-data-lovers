import { filterChampions, ascendantChamps, descendantChamps, filterArray} from "./data.js";
import data from "./data/lol/lol.js";

const listChampions = data.data;
let role = document.getElementById("roles").value;


document.getElementById("roles").addEventListener("change", () => {
  //console.log(role)
  let role = document.getElementById("roles").value;
  let listChamps = filterChampions(role);

  showRoles(role);
 
  document.getElementById("root").innerHTML = ``;
 
  showChampions(listChamps);

  /*let order = document.getElementById("order").value;
  //console.log(order)
  if (order === "Ascendant") {
    showChampions(ascendantChamps(listChamps));
    //console.log(showChampions(ascendantChamps))
   }else if(order === "Descendant") {
    showChampions(descendantChamps(listChamps));
    //console.log(showChampions(descedantChamps))
  } */
});

/*************ORDENAR*****************/

let order = document.getElementById("order");
order.addEventListener("change", () => {
    //console.log(order)
//let listChamps = filterChampions(order.value);
let listChamps = filterArray
console.log(listChamps)
  if (order.value === "Ascendant") {
      showChampions(ascendantChamps(listChamps));
      //console.log(showChampions(ascendantChamps))
    }else if(order.value === "Descendant") {
      showChampions(descendantChamps(listChamps));
      //console.log(showChampions(descedantChamps))
  }
})
  


/*document.querySelector("#order").addEventListener("change", () => {
  let order = document.getElementById("order").value;
  console.log(order)
   if (order == "Ascendant") {
       showChampions(ascendantChamps(filterChampions));
   }else if(order == "Descendant") {
       showChampions(descendantChamps(filterChampions));
   } 
 });

/******************************/



const showChampions = (champions) => {
document.getElementById("root").innerHTML = ``;
  //console.log("showChampions", champions)
 if (Array.isArray(champions)=== true){
  champions.forEach((champ) => {
    //console.log(listChampions[champ])
    document.getElementById("root").innerHTML += 
    `<div class="champClass"><img src="${listChampions[champ].splash}">
      <p>${listChampions[champ].name}</p>
      <i>${listChampions[champ].title}</i></div>`;
  });
  
 }else {
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



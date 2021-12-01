import { filterChampions, ascendantChamps, descendantChamps, computeStats} from "./data.js";
//import lol from "./data/lol/lol.js";
import data from "./data/lol/lol.js";

const listChampions = data.data;


document.getElementById("roles").addEventListener("change", () => {
  let role = document.getElementById("roles").value;
  let listChamps = filterChampions(role);

  showRoles(role);

 
  document.getElementById("root").innerHTML = ``;
 
  showChampions(listChamps);

});
/*************ORDER*****************/

let order = document.getElementById("order");
order.addEventListener("change", () => {
let role = document.getElementById("roles").value;
let listChamps = filterChampions(role);
  if (order.value === "a-z") {
    //ordenar campeones filtrados
    const campeonesOrdenados = ascendantChamps(listChamps)
    //mostrar campeones ordenados
      showChampions(campeonesOrdenados);
    }else if(order.value === "z-a") {
      showChampions(descendantChamps(listChamps));
  }
})

/******************************/


const showChampions = (champions) => {
  document.getElementById("root").innerHTML = ``;
   if (Array.isArray(champions)=== true){
    champions.forEach((champ) => {
      let champclass = document.createElement("div");
      champclass.setAttribute("class", "champClass");
      champclass.onclick = ()=>{showModal(champ)} ;
      champclass.innerHTML += 
      `<img src="${champ.splash}">
        <p>${champ.name}</p>
        <i>${champ.title}</i>`;  
      document.getElementById("root").appendChild(champclass);

    });
    
   }else {
    for (const i in champions) {
      let champclass = document.createElement("div");
      champclass.setAttribute("class", "champClass");
      champclass.onclick = ()=>{showModal(champions[i])} ;
      champclass.innerHTML += 
      `<img src="${champions[i].splash}">
        <p>${champions[i].name}</p>
        <i>${champions[i].title}</i>`;  
      document.getElementById("root").appendChild(champclass);
     }
   } 
  }
  showChampions(listChampions);


  const showModal = (champion) => {
     
   modalWindow(champion);
  }

const modalWindow = (champ) => {

  let modalDiv = document.getElementById("modal");
  modalDiv.style.display = "flex";

 //if (champ !== undefined){

  modalDiv.innerHTML = ``;

 const modal = document.getElementById("modal");

 const boxChamp = document.createElement("div");
 boxChamp.id = "boxChamp";
 modal.appendChild(boxChamp);

 const boxImage = document.createElement("div");
 boxImage.className = "boximage"
 boxChamp.appendChild(boxImage);

 const btnExit = document.createElement("button");
 btnExit.type = "button";
 btnExit.id = "btn-exit";
 modal.appendChild(btnExit);

 ///////////////////champion image /////////////////////////////
 let image = document.createElement("img");
 image.id = "champ-modal-image"
 image.src = champ.splash;
 boxImage.appendChild(image);

 ////////////////champion name and title///////////////////////////
 let nameChamp = document.createElement("h1");
 let titleChamp = document.createElement("h2");
 nameChamp.textContent = champ.name;
 nameChamp.className = "name-champ";
 boxChamp.appendChild(nameChamp);
 titleChamp.textContent = champ.title;
 titleChamp.className = "title-champ";
 boxChamp.appendChild(titleChamp);

 //////////////////description///////////////////////////////////////

 let textChamp = document.createElement("div");
 textChamp.id = "textchamp";
 textChamp.textContent = champ.blurb;
 boxImage.appendChild(textChamp);

 
 let tagChamp = document.createElement("div");
 tagChamp.id = "tagchamp";
 boxImage.appendChild(tagChamp);
 
 
 let tagOneChamp = document.createElement("p");
 tagOneChamp.id = "tag-one-champ";
 tagOneChamp.textContent = champ.tags[0];
 tagChamp.appendChild(tagOneChamp);

 if(champ.tags.length === 2){
 let tagTwoChamp = document.createElement("p");
 tagTwoChamp.id = "tag-two-champ";
 tagTwoChamp.textContent = champ.tags[1];
 tagChamp.appendChild(tagTwoChamp); 
 }

 //////////////STATS/////////////////////

 let statsTitle = document.createElement("img");
 statsTitle.id = "stats-title"; 
 statsTitle.src = "imagenes/info/title-stats.png";
 boxImage.appendChild(statsTitle);

 let statsImage = document.createElement("div");
 statsImage.id = "stats-image";
 boxImage.appendChild(statsImage);
 
 let imageDiv = document.createElement("div");
 imageDiv.id = "image-div";
 boxImage.appendChild(imageDiv);

 let attackImage = document.createElement("img");
 attackImage.id = "attack-image";
 attackImage.src = "imagenes/info/attack.png";
 imageDiv.appendChild(attackImage);
 
 let defenseImage = document.createElement("img");
 defenseImage.id = "defense-image";
 defenseImage.src = "imagenes/info/defense.png";
 imageDiv.appendChild(defenseImage);

 let magicImage = document.createElement("img");
 magicImage.id = "magic-image";
 magicImage.src = "imagenes/info/magic.png";
 imageDiv.appendChild(magicImage);

 let difficultImage = document.createElement("img");
 difficultImage.id = "difficult-image";
 difficultImage.src = "imagenes/info/difficulty.png";
 imageDiv.appendChild(difficultImage);

 let infoStats = document.createElement("div");
 infoStats.id = "stats-info";
 boxImage.appendChild(infoStats);

 let attackChamp = document.createElement("p");
 attackChamp.id = "attack-champ";
 attackChamp.textContent = champ.info.attack;
 infoStats.appendChild(attackChamp);
 
 let defenseChamp = document.createElement("p");
 defenseChamp.id = "defense-champ";
 defenseChamp.textContent = champ.info.defense;
 infoStats.appendChild(defenseChamp);

 let magicChamp = document.createElement("p");
 magicChamp.id = "magic-champ";
 magicChamp.textContent = champ.info.magic;
 infoStats.appendChild(magicChamp);

 let difficultChamp = document.createElement("p");
 difficultChamp.id = "difficult-champ";
 difficultChamp.textContent = champ.info.difficulty;
 infoStats.appendChild(difficultChamp);

 //////////////////MATHSTAS//////////////////////////////

 let attackDiv = document.createElement("div");
 attackDiv.id = "attack-div";
 boxImage.appendChild(attackDiv);

 let attackTitle = document.createElement("h3");
 attackTitle.id = "attack-total-title";
 attackTitle.textContent = "TOTAL DAMAGE ATTACK"
 attackDiv.appendChild(attackTitle);

 let attackCalcule = document.createElement("h1");
 attackCalcule.id = "attack-calcule";
 attackCalcule.textContent = computeStats(champ);
 attackDiv.appendChild(attackCalcule);

 let btnExitModal = document.getElementById("btn-exit");
 btnExitModal.addEventListener("click",  () => modalExit ());
 }
//}

const modalExit = () => {
  let modalClose = document.getElementById("modal");
  modalClose.style.display = "none";
  let container = document.getElementById("boxChamp");
  modalClose.removeChild(container);
}



/*******************ESCONDER TEXTO EN EL HTML*******************/
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


const showRoles = (role) => {
   //role es igual a el valor de los section con el id "roles"  
   
  
  let assassinText = document.getElementById("role-assassin");
  let fighterText = document.getElementById("role-fighter");
  let mageText = document.getElementById("role-mage");
  let tankText = document.getElementById("role-tank");
  let marksmanText = document.getElementById("role-marksman");
  let supportText = document.getElementById("role-support");


  if (role == "Assassin"){
    assassinText.style.display = "block";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";

  }else if (role == "Fighter"){
    assassinText.style.display = "none";
    fighterText.style.display = "block";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";
  
  }else if (role == "Mage"){
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "block";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";

  }else if (role == "Tank"){
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "block";
    marksmanText.style.display = "none";
    supportText.style.display = "none";

  }else if (role == "Marksman"){
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "block";
    supportText.style.display = "none";
  
  }else if (role == "Support"){
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "block";
  
  }else if (role == "All"){
    assassinText.style.display = "none";
    fighterText.style.display = "none";
    mageText.style.display = "none";
    tankText.style.display = "none";
    marksmanText.style.display = "none";
    supportText.style.display = "none";
  }
}




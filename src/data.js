import data from "./data/lol/lol.js";

let listChampions = data.data;
export let filterArray = [];

export const filterChampions = (role) => {
  console.log("filterChampions", role)
 
  let j = 0;
  if (role != "All") {
    //console.log("hola")
    for (const i in listChampions) {
      listChampions[i].tags.forEach((roleChamp) => {
        if (roleChamp == role) {
          filterArray[j] = listChampions[i].id;
          j++;
        }
      });
    }
  }else {
    for (const i in listChampions) { 
      console.log("hola")
      filterArray[j] = listChampions[i].id;
      j++;
  }
}
  console.log(filterArray)
  return filterArray;
};
 
/**********SORT****************/




export const ascendantChamps = (filterArray) => {
  let sortAscChamp = filterArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  console.log("sortAscChamp",filterArray)
  return sortAscChamp;
}

export const descendantChamps = (filterArray) => {
  let sortDesChamp = filterArray.sort().reverse();
  console.log("sortDesChamp",sortDesChamp)
  return sortDesChamp;
}


//let sortChamp = Object.values(listChampions).sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0));
 //console.log(sortChamp)
//Object.values(listChampions)
//console.log(Object.values(listChampions))

/*export const ascendantOrder = () => {
  listChampions.sort((a,b) => {
    if ( a.name < b.name ){
      return -1; // a es menor, retorna a
    }
      if ( a.name > b.name ){
        return 1; // b es menor, retorna b
      }   
     return 0;
  });

};*/









/*
export const ascendantOrder = ( a, b) => { 
  listChampions.sort;
  if ( a.name < b.name ){
     return -1; // a es menor, retorna a
   }
   if ( a.name > b.name ){
     return 1; // b es menor, retorna b
   }
   return 0;
}

 export const descendantOrder = ( a, b) => { //Funcion para ordenar .name
  listChampions.sort
  if ( a.name < b.name ){
     return 1; // a es menor, retorna a
   }
   if ( a.name > b.name ){
     return -1; // b es menor, retorna b
   }
   return 0;
}
export const anotherExample = () => {
  return "OMG";
});*/


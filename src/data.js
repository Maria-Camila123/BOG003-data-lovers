import data from "./data/lol/lol.js";

let listChampions = data.data;

export const filterChampions = (role) => {
  //console.log("filterChampions", role)
  let filterArray = [];
  let j = 0;
  if (role != "All") {
    //console.log("hola")
    for (const i in listChampions) {
      listChampions[i].tags.forEach((roleChamp) => {
        //console.log(roleChamp,role)
        if (roleChamp == role) {
          filterArray[j] = listChampions[i];
          //console.table(filterArray)
          j++;
        }
      });
    }
  } else {
    for (const i in listChampions) {
      //console.log("ola")
      filterArray[j] = listChampions[i];
      j++;
    }
  }
  //console.log(filterArray)
  return filterArray;
};

/**********SORT****************/

export const ascendantChamps = (orderChamp) => {
  let sortAscChamp = orderChamp.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  //console.log("sortAscChamp", sortAscChamp)
  return sortAscChamp;
}

export const descendantChamps = (orderChamp) => {
  let sortDesChamp = orderChamp.sort().reverse();
  //console.log("sortDesChamp", sortDesChamp)
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


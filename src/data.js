import data from "./data/lol/lol.js";

let listChampions = data.data;

export const filterChampions = (role) => {
  let filterArray = [];
  let j = 0;
  if (role != "All") {
    for (const i in listChampions) {
      listChampions[i].tags.forEach((roleChamp) => {
        if (roleChamp == role) {
          filterArray[j] = listChampions[i];
          j++;
        }
      });
    }
  } else {
    for (const i in listChampions) {
      filterArray[j] = listChampions[i];
      j++;
    }
  }
  return filterArray;
};

/**********SORT****************/

export const ascendantChamps = (orderChamp) => {
  let sortAscChamp = orderChamp.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  return sortAscChamp;
}

export const descendantChamps = (orderChamp) => {
  let sortDesChamp = orderChamp.sort().reverse();
  return sortDesChamp;
}

export const computeStats = (damage) => {
  let stats = damage.stats;
  let totalDamage = Math.round((stats.attackdamage + stats.attackdamageperlevel) / 2);
  return totalDamage;
  
}

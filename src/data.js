import data from "./data/lol/lol.js";

const listChampions = data.data;

export const filterChampions = (role) => {
  let filterArray = [];
  let j = 0;
  if (role != "All") {
    for (const i in listChampions) {
      listChampions[i].tags.forEach((roleChamp) => {
        if (roleChamp == role) {
          filterArray[j] = listChampions[i].id;
          j++;
        }
      });
    }
  } else {
    for (const i in listChampions) {
      filterArray[j] = listChampions[i].id;
      j++;
    }
  }
  return filterArray;
};

export const anotherExample = () => {
  return "OMG";
};

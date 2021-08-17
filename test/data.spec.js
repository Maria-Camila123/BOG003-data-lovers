import { filterChampions, ascendantChamps, descendantChamps, computeStats } from '../src/data.js';

const testExpect =  [
   {  
     id: "LeeSin",
     name: "Lee Sin",
     title: "the Blind Monk", 
     tags: ["Fighter", "Assassin"],
   },
   {  
     id: "Ashe",
     name: "Ashe",
     title: "the Frost Archer",
     tags: ["Marksman", "Support"],
   },
   {
     id: "Rumble",
     name: "Rumble",
     title: "the Mechanized Menace",
     tags: ["Fighter", "Mage"],
   },
   {
     id: "Darius",
     name: "Darius",
     title: "the Hand of Noxus",
     tags: ["Fighter", "Tank"],
   },
];

const firstOrderTestToBe =  [
  {  
    id: "Ashe",
    name: "Ashe",
    title: "the Frost Archer",
    tags: ["Marksman", "Support"],
  },
  {
    id: "Darius",
    name: "Darius",
    title: "the Hand of Noxus",
    tags: ["Fighter", "Tank"],
  },
  {  
    id: "LeeSin",
    name: "Lee Sin",
    title: "the Blind Monk", 
    tags: ["Fighter", "Assassin"],
  },
  {
    id: "Rumble",
    name: "Rumble",
    title: "the Mechanized Menace",
    tags: ["Fighter", "Mage"],
  },
];

const secondOrderTestToBe =  [
  {
    id: "Rumble",
    name: "Rumble",
    title: "the Mechanized Menace",
    tags: ["Fighter", "Mage"],
  },
  {  
    id: "LeeSin",
    name: "Lee Sin",
    title: "the Blind Monk", 
    tags: ["Fighter", "Assassin"],
  }, 
  {
    id: "Darius",
    name: "Darius",
    title: "the Hand of Noxus",
    tags: ["Fighter", "Tank"],
  },
  {  
    id: "Ashe",
    name: "Ashe",
    title: "the Frost Archer",
    tags: ["Marksman", "Support"],
  },
];


describe("ascendantChamps", () => {
  it("is a function", () => {
    expect(typeof ascendantChamps).toBe("function");
  });
});

it("should return the champions from a-z", () => {
  expect(ascendantChamps(testExpect, "a-z")).toEqual(firstOrderTestToBe);
});

describe("descendantChamps", () => {
  it("is a function", () => {
    expect(typeof descendantChamps).toBe("function");
  });
});

it("should return the champions from z-a", () => {
  expect(descendantChamps(testExpect, "z-a")).toEqual(secondOrderTestToBe);
});



describe("filterChampions", () => {
  it("is a function", () => {
    expect(typeof filterChampions).toBe("function");
  });

  it("should return 33", () => {
    expect(filterChampions("Assassin").length).toBe(33);
  });

  it("should return 24", () => {
    expect(filterChampions("Marksman").length).toBe(24);
  });

  it("should return 66", () => {
    expect(filterChampions("Fighter").length).toBe(66);
  });

  it("should return 52", () => {
    expect(filterChampions("Mage").length).toBe(52);
  });

  it("should return 40", () => {
    expect(filterChampions("Tank").length).toBe(40);
  });

  it("should return 27", () => {
    expect(filterChampions("Support").length).toBe(27);
  });
});


const compuTestExpect = 
  {
    stats: {
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
    },
  };


describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });

 it("returns calcule of function compute stats", () => {
  expect(computeStats(compuTestExpect)).toBe(31);
 });

});


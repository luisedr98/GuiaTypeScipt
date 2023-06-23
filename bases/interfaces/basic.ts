(() => {
  interface hero {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  }

  let flash: hero = {
    name: "Barry Allen",
    age: 24,
    powers: [1, 2],
    getName() {
      return this.name;
    },
  };

  let superman: hero = {
    name: "Eduard Huston",
    age: 24,
    powers: [1, 2],
  };

  //   console.log(superman.getName?.() || "No existe el método");
})();

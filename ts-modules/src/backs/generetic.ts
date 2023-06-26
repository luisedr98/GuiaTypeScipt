import { Hero } from "../classes/Hero";
import { genericArrow, genericFunction } from "../generics/generics";
import { HeroI, Villain } from "../interfaces";

// * imports */
// const iroman = new Hero("Iroman", 2, 55);
// console.log(iroman.power);

// * generetics */
// console.log(genericFunction(3.1515).toFixed(2));
// console.log(genericArrow("Luis").charAt(2));
// console.log(genericFunction({ a: "luis", b: false }).a);

const deepPool = {
  name: "deepPool",
  realName: "Witsin Unknow",
  dangerLevel: 123,
};

console.log(genericArrow<HeroI>(deepPool).name);
console.log(genericFunction<Villain>(deepPool).dangerLevel);

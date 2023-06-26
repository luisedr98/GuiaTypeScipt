import { getPokemons } from "./generics/get-pokemons";

getPokemons(1)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((e) => console.error(e))
  .finally(() => console.log("finally get Pokemons"));

import {Pokemon} from "@/app/lib/dto/pokemon";
import {PokedexPokemon} from "@/app/lib/dto/pokedex-pokemon";

export function addToPokedex(pokemon: Pokemon, isCaught: boolean): void {
    console.log("click");
    const addPokemon: PokedexPokemon = {
        ...pokemon,
        imageUrl: pokemon.isShiny ? pokemon.imageShiny : pokemon.image,
        isCaught: isCaught
    };

    console.log(addPokemon);

}
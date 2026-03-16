import {Pokemon} from "@/app/lib/dto/pokemon";

export type PokedexPokemon = Pokemon & {
    isCaught: boolean;
    imageUrl: string;
}
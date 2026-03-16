import {Pokemon} from "@/app/lib/dto/pokemon";

export async function getPokemonById(id: number): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await res.json();

    const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
        image: data.sprites.front_default,
        imageShiny: data.sprites.front_shiny,
        isShiny: false
    };

    console.log(pokemon);

    return pokemon;
}

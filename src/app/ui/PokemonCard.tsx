'use client';

import {Pokemon} from "@/app/lib/dto/pokemon";
import Image from "next/image";
import React from "react";
import TypeBadge from "./TypeBadge";
import {addToPokedex} from "@/app/lib/add-to-pokedex";

export default function PokemonCard({pokemon}: { pokemon: Pokemon }) {


    const [isShiny, setIsShiny] = React.useState(false);

    const portrait = isShiny && pokemon.imageShiny ? pokemon.imageShiny : pokemon.image;
    const currentPokemon = {...pokemon, isShiny};

    return (
        <>
            <p>{pokemon.name}</p>
            <button className="bg-taupe-800 dark:bg-taupe-300 text-taupe-800 px-3 py-2 rounded-lg"
                    onClick={() => setIsShiny(!isShiny)}>Shiny?
            </button>
            <TypeBadge types={pokemon.types}/>
            <Image src={portrait} width={360} height={360} alt={"pocket monster"}/>
            <div className={"p-2"}>
                {/* Not seen */}
                <button className={"px-2 bg-taupe-400"} onClick={() => {}}>
                    Not seen yet
                </button>
                {/* Seen */}
                <button className={"px-2 bg-amber-500"} onClick={() => addToPokedex(currentPokemon, false)}>
                    Seen
                </button>

                {/* Caught */}
                <button className={"px-2 bg-lime-600"} onClick={() => addToPokedex(currentPokemon, true)}>
                    Caught
                </button>
            </div>
        </>
    );
}
import React from "react";
import LikeButton from "@/app/ui/LikeButton";
import {getPokemonById} from "@/app/lib/poke-api";
import PokemonCard from "@/app/ui/PokemonCard";

export default async function Home() {
    const pokemon = await getPokemonById(1000);

  return (
    <div className="flex min-h-screen items-center justify-center bg-taupe-300 font-sans dark:bg-taupe-800">
        <div className="row-auto col-center text-center">
            <PokemonCard pokemon={pokemon} />
        </div>
        <div className="row-auto col-center text-center">
            <LikeButton resetLikeButton={true} />
        </div>
    </div>
  );
}

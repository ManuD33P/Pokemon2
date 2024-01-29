"use client"
import { getPokemonAll } from "@/libs/dbmethod/getPokemon";
import { PokemonDB } from "@/interfaces/Pokemon";
import { useState,useEffect } from "react";
import CardPokemon from "@/components/CardPokemon";



export default function Home() {
  
  const [pokemon, setPokemon] = useState<PokemonDB[]>([]);

  const getPokemon = async () => {
    const res = await getPokemonAll();
    if (res !== undefined) {
      setPokemon(res);
    }
  }

  useEffect(()=>{
    getPokemon();
  },[])


  return (
    <section className="flex flex-wrap w-full h-auto">
        { pokemon?.length > 0 && pokemon.map((item:PokemonDB)=>{
      return (
          <CardPokemon key={item.id} pokemon={item} />
      )

    })}
    </section>
  );
}

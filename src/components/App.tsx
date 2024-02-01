"use client"
import { getPokemonAll } from "@/libs/dbmethod/getPokemon";
import { PokemonDB } from "@/interfaces/Pokemon";
import { useState, useCallback, useEffect } from "react";
import CardPokemon from "@/components/CardPokemon";
import { usePokemon } from "@/hooks/Pokemons";
import Image from "next/image";
import pokedex from "../../public/pokedex.png";



export default function A() {
  
  const [pokemon, setPokemon] = useState<PokemonDB[]>([]);

  const {addPokemons,getPokemonArray,addOriginalPokemon} = usePokemon();

  const getPokemon = useCallback(async () => {
    const res = await getPokemonAll();
    if (res !== undefined) {
      addPokemons(res);
      addOriginalPokemon(res);
      const newPokemons = getPokemonArray();
      setPokemon(newPokemons);
    }
  }, [addPokemons, getPokemonArray, addOriginalPokemon]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <section>
    
    <Image src={pokedex} alt="pokedex title" className="mx-auto w-auto h-16 mb-14" />
    
    <article className="flex flex-wrap w-full h-auto justify-center">
        { pokemon?.length > 0 && pokemon.map((item:PokemonDB)=>{
          return (
            <CardPokemon key={item.id} pokemon={item} />
            )
            
          })}
    </article>
    </section>
  );
}

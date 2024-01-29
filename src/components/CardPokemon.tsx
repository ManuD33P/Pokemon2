import { PokemonDB } from "@/interfaces/Pokemon";

import Image from "next/image";
export default function CardPokemon({ pokemon }: { pokemon: PokemonDB }) {
    console.log(pokemon.name,pokemon.types)
  return (

<article className="relative grid grid-cols-2 gap-4 w-1/2 p-4 m-4 bg-gray-100 rounded-lg shadow-lg max-w-52">
  <div className="w-auto h-[100px] col-span-2 flex justify-center row-span-2">
    <Image className="w-auto h-auto object-contain w-max-[100px]" width="100" height="100" src={pokemon.image} alt={pokemon.name} />
  </div>
    <div className="absolute bottom-2 right-5 -rotate-45 bg-s">
      <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
    </div>
    <div className="grid col-span-3 row-span-2">
      <h3 className="mb-1"><span className="font-bold">Attack:</span> {pokemon.attack}</h3>
      <h3 className="mb-1"><span className="font-bold">Defense:</span> {pokemon.defense}</h3>
      <h3 className="mb-1"><span className="font-bold">HP:</span> {pokemon.hp}</h3>
      <h3 className="mb-1"><span className="font-bold">Speed:</span> {pokemon.speed}</h3>
    </div>
</article>



  );
}

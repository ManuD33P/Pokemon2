import { PokemonDB } from "@/interfaces/Pokemon";
import { useAssignPokemonCard } from "@/hooks/AssingPokemonCard";
import Image from "next/image";
export default function CardPokemon({ pokemon }: { pokemon: PokemonDB }) {
  console.log(pokemon.types)
   const types = useAssignPokemonCard(pokemon.types);
  
  return (

<article className="relative grid grid-cols-2 gap-4 w-1/2 p-4 m-4 bg-gold rounded-lg shadow-lg max-w-52">
  <div className="w-auto h-[100px] col-span-2 flex justify-center row-span-2">
    <Image className="w-auto h-auto object-contain w-max-[100px]" width="100" height="100" src={pokemon.image} alt={pokemon.name} />
  </div>
  <div className="flex absolute top-0 right-0 rounded-tl">
     { types.map((type) => type)}
  </div>
    <div className="text-center w-full absolute top-[-1.5rem] left-0 bg-s z-10">
      <h2 className="text-xl text-center inline size-4 text-color-logo border-x-blue-500 font-bold mb-2">{pokemon.name}</h2>
    </div>
    <div className="grid col-span-3 row-span-2">
      <h3 className="mb-1"><span className="font-bold">Attack:</span> {pokemon.attack}</h3>
      <progress value={pokemon.attack} max="100" className="w-full h-2 mb-2"></progress>
      <h3 className="mb-1"><span className="font-bold">Defense:</span> {pokemon.defense}</h3>
        <progress value={pokemon.defense} max="100" className="w-full h-2 mb-2"></progress>
      <h3 className="mb-1"><span className="font-bold">HP:</span> {pokemon.hp}</h3>
        <progress value={pokemon.hp} max="100" className="w-full h-2 mb-2"></progress>
      <h3 className="mb-1"><span className="font-bold">Speed:</span> {pokemon.speed}</h3>
        <progress value={pokemon.speed} max="100" className="w-full h-2 mb-2"></progress>
    </div>
</article>



  );
}

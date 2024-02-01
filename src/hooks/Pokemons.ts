import { create } from "zustand";
import { PokemonDB,Types, } from "@/interfaces/Pokemon";
import { getTypes } from "@/libs/dbmethod/getTypes";


interface PokemonState {
 originalPokemon: PokemonDB[];
 pokemons: PokemonDB[]; 
 currentPage: number;
 totalPage: number;
    addPokemons: (pokemons: PokemonDB[]) => void;
    addOriginalPokemon: (originalPokemon: PokemonDB[]) => void;
    addCurrentPage: (currentPage: number) => void;
    getPokemonArray: () => PokemonDB[];
    getTypes: () =>   void
}



export const usePokemon = create<PokemonState>((set,get)=> {
    return {
    //intial state
    originalPokemon : [],
    pokemons: [],
    currentPage: 0,
    totalPage: 0,
    types: [],
    //actions
    addPokemons: (pokemons:PokemonDB[] ) => {
        const {currentPage} = get();
        const numGroup = Math.ceil(pokemons.length / 15); // total de paginas
        const newCurrentPage: number = currentPage >= numGroup ? 0 : currentPage;
        return set(({pokemons: pokemons, totalPage: numGroup, currentPage: newCurrentPage}))
    },

    addOriginalPokemon: (originalPokemon: PokemonDB[]) => set(({originalPokemon: originalPokemon})),
    
    addCurrentPage: (currentPage: number) => {
        const {pokemons} = get();
        const limint = pokemons.length;
        if(currentPage >= limint) return;
        set(({currentPage: currentPage}))
    },
    getTypes: async () => {
        const updateTypes = await getTypes();
        if(updateTypes) return updateTypes;
        return updateTypes;
    },
    getPokemonArray: () => {
        const {currentPage, pokemons} = get();
        const start = currentPage * 15;
        const end = start + 15;
        if(end > pokemons.length) return pokemons.slice(start);
        const newPokemons = pokemons.slice(start, end);
        return newPokemons;
    }

}});
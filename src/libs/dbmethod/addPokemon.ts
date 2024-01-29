import { Pokemon } from "@/interfaces/Pokemon";
import {prisma} from "@/libs/prisma"

export async function addPokemon(pokeData: Pokemon){
    try {
    const newPokemon = await prisma.pokemon.create({
        data:{
            name: pokeData.name,
            image: pokeData.image,
            types: {
                connect: pokeData.types.map((type) => ({
                    name: type
                }))
            },
            height: pokeData.height,
            weight: pokeData.weight,
            attack: pokeData.attack,
            defense: pokeData.defense,
            hp: pokeData.hp,
            speed: pokeData.speed,
        }
    });
    return newPokemon;

    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        }
    }
} 
'use server'
import {prisma} from "@/libs/prisma";


export async function getPokemon(id : number){
    try {
        
        const pokemon = await prisma.pokemon.findUnique({
            where:{
                id: id
            },
            include:{
                types: true
            }
        });


        if(!pokemon) throw new Error("Pokemon not found");

        return pokemon

    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}


export async function getPokemonAll(){
    try {
        
        const pokemon = await prisma.pokemon.findMany({
            include:{
                types: true
            }
        })

        if(!pokemon) throw new Error("Pokemon not found");

        return pokemon

    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}
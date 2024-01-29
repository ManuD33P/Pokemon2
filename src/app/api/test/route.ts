import { getPokemonAll } from "@/libs/dbmethod/getPokemon";
import { addPokemon } from "@/libs/dbmethod/addPokemon";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const pokemon = await getPokemonAll();
        if(Array.isArray(pokemon) && pokemon.length === 0) throw new Error("Pokemon not found");

        return NextResponse.json({pokemon},{status:200});

    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            return NextResponse.json({message: error.message}, {status: 500});
        }
    }

}

export async function POST(request: Request){
    try {
        const body = await request.json();
        if(!body) throw new Error("Body is empty");

        const newPokemon = await addPokemon(body)
        console.log(newPokemon);

        if(!newPokemon) throw new Error("Pokemon not created");

        return NextResponse.json({newPokemon},{status:200});
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            return NextResponse.json({message: error.message}, {status: 500});
        }
    }

}
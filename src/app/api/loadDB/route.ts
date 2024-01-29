import { NextResponse } from "next/server";
import {addPokemonDB} from "@/libs/loadPokemonDB";




export async function GET() {
    try {
        const newPokemon = await addPokemonDB();    
        return NextResponse.json(newPokemon, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}

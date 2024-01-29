import { NextResponse } from "next/server";
import { getPokemon } from "@/libs/dbmethod/getPokemon";

interface Params {
    params: {
        id: string
    }
}

export async function GET(request: Request,{params} : Params){
try {
    const id = Number(params.id);
    const pokemon = await getPokemon(id);
    if(!pokemon) throw new Error("Pokemon not found");
    return NextResponse.json({pokemon},{status:200});
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
        return NextResponse.json({message: error.message}, {status: 500});
    }
}
}
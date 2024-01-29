import { NextResponse } from "next/server";

import { loadTypes } from "@/libs/loadTypes";


export async function GET() {
    try {
       const result = await loadTypes();
        return NextResponse.json(result, {status: 200});

    } catch (error) {
        if(error instanceof Error){
            console.log(error, error.message);
            return NextResponse.json({error: error.message}, {status: 500})
        }
    }
}
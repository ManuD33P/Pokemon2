"use server"

import {prisma} from "@/libs/prisma"

export async function getTypes(){
   const Types = await prisma.type.findMany({
        include:{
            pokemon: true
        }
    })
   if(Array.isArray(Types) && Types.length > 0) return Types
}
import { Type } from "@/interfaces/Types";
import { prisma } from "@/libs/prisma";

export const loadTypes = async () => {
    const URL_API_TYPE = process.env.URL_API_TYPE || "https://pokeapi.co/api/v2/type";
    const response = await fetch(URL_API_TYPE);
    const data = await response.json();
    const {results} = data;


    const result = await Promise.all(results.map(async (type: Type) => {
       return await prisma.type.create({
            data: {
                name: type.name
            }
        })
    }))

    return result
}
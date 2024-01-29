import {prisma} from "@/libs/prisma";

const format = async (data : any) => {
    const pokemonData = await fetch(data)
    const pokemonDataJson = await pokemonData.json()
    const {name, height, weight, types,stats,sprites} = pokemonDataJson
   
    const static_stats = {
        attack : Number,
        defense: Number,
        hp: Number,
        speed: Number
    }
    const image = sprites.other?.showdown?.front_default || sprites.other?.home?.front_default
    
    // crear una funcion con este formateo.

     stats.forEach((stat: any) => {
        switch (stat.stat.name) {
            case "attack":
                static_stats.attack = stat.base_stat
                break;
            case "defense":
                static_stats.defense = stat.base_stat
                break;
            case "hp":
                static_stats.hp = stat.base_stat
                break;
            case "speed":
                static_stats.speed = stat.base_stat
                break;
            default:
                break;
        }
    })
    
    const newTypes = types.map((type: any) => {
        return {
            name: type.type.name
        }
    })

    return {
        name,
        height,
        weight,
        image,
        types: [...newTypes],
        ...static_stats
    }
}

export const  loadPokemonDB = async () =>{
    try {
        const  URL_API_ALL = process.env.URL_API_ALL || "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
        const response = await fetch(URL_API_ALL);
        const data = await response.json();
        const {results} = data;
        const dataPokemon =  await Promise.all(results.map((pokemon : any) => format(pokemon.url)))
        return dataPokemon
    } catch (error) {
        if(error instanceof Error){
            // console.log(error, error.message);
            throw new Error(error.message)
        }
    }
    
}

export const addPokemonDB = async () => {
    const pokemonData = await loadPokemonDB();
    if(!pokemonData) throw new Error("No se pudo cargar los datos");
    const newPokemon = await Promise.all(pokemonData.map(async (pokemon: any) => {
        const types = await Promise.all(pokemon.types.map(async (type: any) => {
            const findType: any = await prisma.type.findFirst({
                where: {
                    name: type.name
                }
            });

            if (!findType) {
                // Manejar el caso en que el tipo no existe en la base de datos
                throw new Error(`Tipo "${type.name}" no encontrado en la base de datos.`);
            }

            return { id: findType.id };
        }));

        const poke = await prisma.pokemon.create({
            data: {
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                image: pokemon.image,
                attack: pokemon.attack,
                defense: pokemon.defense,
                hp: pokemon.hp,
                speed: pokemon.speed,
                types: {
                    connect: types.map(type => ({ id: type.id })),
                },
            },
        });
        
        
        
        return poke;
    }));
    
    return newPokemon
}




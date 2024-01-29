
export interface Types{
     name: string,
     id: number,
     createdAt: Date;
     updatedAt: Date;
}


export interface Pokemon{
     name: string,
     image: string,
     types: string[],
     height: number,
     weight: number,
     attack: number,
     defense: number,
     hp: number,
     speed: number,     
}


export interface PokemonDB {
     id: number;
     name: string;
     defense: number;
     speed: number;
     attack: number;
     hp: number;
     weight: number;
     height: number;
     image: string;
     createdAt: Date;
     updatedAt: Date;
     types:Types[];
   }
   
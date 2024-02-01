'use client'
import React from "react";
import { Types } from "@/interfaces/Pokemon";
import { getIconsTypes } from "@/libs/getIconsTypes";
import Image from "next/image";

export function useAssignPokemonCard(CardTypes: Types[]) {

   const components =  CardTypes.map((type: Types) => {
        return (
            <div key={type.id} className="flex items-center">
                <Image src={`/${type.name}.svg`} alt={type.name} width={20} height={20} />
            </div>
        )
});
    return components;
}

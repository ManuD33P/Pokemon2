import ghost from '@/../public/ghost.svg';
import electric from '@/../public/electric.svg';
import psychic from '@/../public/psychic.svg';
import ice from '@/../public/ice.svg';
import dragon from '@/../public/dragon.svg';
import dark from '@/../public/dark.svg';
import fairy from '@/../public/fairy.svg';
import fighting from '@/../public/fighting.svg';
import fire from '@/../public/fire.svg';
import flying from '@/../public/flying.svg';
import normal from '@/../public/normal.svg';
import water from '@/../public/water.svg';
import steel from '@/../public/steel.svg';
import bug from '@/../public/bug.svg';
import grass from '@/../public/grass.svg';
import poison from '@/../public/poison.svg';
import ground from '@/../public/ground.svg';
import rock from '@/../public/rock.svg';
import { Types } from "@/interfaces/Pokemon";



const IconsTypes: { [key: string]: string } = {
    ghost,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy,
    fighting,
    fire,
    flying,
    normal,
    water,
    steel,
    bug,
    grass,
    poison,
    ground,
    rock,
  };

interface IconsTypes {
    [key: string]: string;
}

export function getIconsTypes(types: Types[]): string[] {
    const icons = types.map((type: Types) => IconsTypes[type.name] || '');
    return icons;
}
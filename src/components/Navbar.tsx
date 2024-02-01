'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logoPokemon.png";

export function Nav(){

const router = useRouter();

const handleClick = (e : any) => {
   const value : any = {
       app : "/app",
       about: "/about",
       create: "/create-pokemon"
   }
   if(e){
       const id : any = e.target.id;
       const path : any = value[id];
       if(path !== undefined || path !== null)
         router.push(path);
   }


}

    return (
        <nav className="mb-11 sticky w-full bg-red-700 pt-8 flex justify-center">
        <Image src={logo} className="absolute top-0 left-5" alt="pokemon logo" width={100} height={100} />
            <ul className="flex justify-evenly gap-6">
                <li onClick={handleClick} id="app">App</li>
                <li onClick={handleClick} id="about">About</li>
                <li onClick={handleClick} id="create">Create Pokemon</li>
            </ul> 
        </nav>
    )
}
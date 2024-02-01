"use client"

import { useState } from "react";
import MyInput from "./InputSearchBar";


export default function SearchBar() {
const [filterInputs, setFilterInputs] = useState({});

const handleInputChange = (e : any) => {
    e.preventDefault();
    const value = e.target.value;

    if(value !== 'undefined'){
       return setFilterInputs(value);
    }

}

  return (
     <article>
      <MyInput />
    </article>
  )
  }
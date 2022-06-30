import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux"
import { getByName, getAllCountries } from "../../Redux/actions/index";
import s from "./index.module.css"

export default function SearchBar() {
  const [Country , setCountry]= useState("");
  const dispatch= useDispatch()
  function Busqueda(pais){
    if(pais==="") {
      dispatch(getAllCountries())
    }else{
      console.log("searchBar"+ pais)
      dispatch(getByName(pais))
    }  
  }

  // useEffect((country) => {
  //   dispatch(getByName(country))
  // }, [dispatch])
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      Busqueda(Country)
      setCountry("");
    }}>
      <input 
        type="text"
        className={s.inputSearch}
        placeholder="Country..."
        value={Country}
        onChange={e=> setCountry(e.target.value)}
      />
      <input className={s.bottonSearch} type="submit" value="Search" />
    </form>
  );
}
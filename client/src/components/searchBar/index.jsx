import React, { useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getByName, getAllCountries } from "../../Redux/actions/index";
import s from "./index.module.css"

export default function SearchBar() {
  const [Country , setCountry]= useState("");
  const dispatch= useDispatch()
  const error= useSelector(state=>state.error)

  function Busqueda(pais){
    if(pais==="") {
      dispatch(getAllCountries())
      dispatch(getByName(""))
    }else{
      dispatch(getByName(pais))
    }  
  }
  
  return (
    <>
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
      {error && typeof error==="string"? <p className={s.text}>{error}</p>:null}
    </>
  );
}
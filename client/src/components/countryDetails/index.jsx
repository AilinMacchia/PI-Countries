import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getCountry} from "../../Redux/actions/index"
import image from "../../Images/prueba2.jpg"
import s from "./index.module.css"
import location from "../../Images/iconos/location-dot-solid.svg"


const CountryDetails = () => {
  let { id } = useParams();
  const country = useSelector(state => state.countryDetail);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getCountry(id))
  },[dispatch,id])
  
  const HandleMap= (e)=>{
    e.preventDefault();
    console.log(country.map)
    window.open(country.map,"Mapa","width=800,height=800")
  }
 
  return (
    <div>
      <div className={s.background}> 
        <img src={image} className={s.stretch} alt="" />  
      </div>
      <div className={s.bigContainer}>
        <div className={s.divContainer}>
          <div className={s.flex}>
            <p className={s.countryCode}>ID:{country.id}</p>
            <div className={s.containerMap}>
              <img className={s.img} onClick={(e)=> HandleMap(e)} src={location} alt="" />
              <p className={s.text} onClick={(e)=> HandleMap(e)}>View Location</p>
            </div>
          </div>
          <h2 id={s.title} > {country.name}</h2>
          <div className={s.bigContainer}>
            <div className={s.conteinerInfo}>
            <p className={s.underline}>Population</p>
            <p>{country.population}</p>
            </div>
          <div className={s.conteinerInfo}>
            <p className={s.underline}>Continent</p>
            <p>{country.continent}</p>
          </div>
          <div className={s.conteinerInfo}>
            <p className={s.underline}>Subregion</p>
            <p>{country.subregion}</p>
          </div>
        </div>
        <div className={s.bigContainer}>
          <div className={s.conteinerInfo}>
            <p className={s.underline}>Capital</p>
            <p>{country.capital}</p>
          </div>
          <div className={s.conteinerInfo}>
            <div>
              <img className={s.flag} src={country.image} alt={`Imagen de ${country.name}`} />
            </div>
          </div>
          <div className={s.conteinerInfo}>
            <p className={s.underline}>Area</p>
            <p>{country.area} Km</p>
          </div>
        </div>
      </div>      
      <div className={s.activityList}>
        <div className={s.conteinerActivity}>
          <p className={s.activities}>Activities</p>
          <div id={s.lista}>
            {country.Activities?.map((a) => {
              let summer= <span>☀️</span>;
              let winter = <span>❄️</span>;
              let autumn = <span>🍁</span>
              let spring= <span>🌸</span>;
              let season;
              if(a.season === "Summer") season = summer;
              if(a.season === "Winter") season = winter;
              if(a.season === "Autumn") season = autumn;
              if(a.season === "Spring") season = spring;
              return (
                <details className={s.move}>
                  <summary>{a.name}</summary>
                  <p className={s.move}> &#128336;Duration:  {a.duration}</p>
                  <p className={s.move}>&#11088;Difficulty:  {a.difficulty} </p>
                  <p className={s.move}>{season}Season: {a.season} </p>
                </details>
              )
            })}
          </div>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default CountryDetails
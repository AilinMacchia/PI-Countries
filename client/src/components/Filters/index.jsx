import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {sortPopulation, sortAlphabet, filterContinent, filterActivities, getActivities, sortArea, getAllCountries} from "../../Redux/actions/index";
import s from "./index.module.css"
const ASCENDANT = 'ascendant';
const DESCENDANT = 'descendant';
const A_Z = 'A-Z';
const Z_A = 'Z-A';


const Filters = () => {
  let activities  = useSelector((state) => state.activities)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch])

  let filter = activities.map((activity) => {
    return activity.name
  })

  function onSelectSortChange(e) {
    e.preventDefault();
    if (e.target.name === 'population' && e.target.value !== 'Population') {
      dispatch(sortPopulation(e.target.value))
    }else if(e.target.value === 'Population'){
      dispatch(sortPopulation(""))
      dispatch(getAllCountries())
    }
    else if (e.target.name === 'alphabet' && e.target.value !== 'Alphabet') {
      dispatch(sortAlphabet(e.target.value))
    }else if(e.target.value === 'Alphabet'){
      dispatch(sortAlphabet(""))
      dispatch(getAllCountries())
    }
    else if(e.target.name==="area" && e.target.value !== "Area"){
      dispatch(sortArea(e.target.value))
    }else if(e.target.value === 'Area'){
      dispatch(sortArea(""))
      dispatch(getAllCountries())
    }
  }

  function onSelectFilterChange(e) {
    e.preventDefault();
    if(e.target.name === 'continent' && e.target.value !== 'Continents') {
      dispatch(filterContinent(e.target.value));
    }else if(e.target.value === 'Continents'){
      dispatch(filterContinent(""))
      dispatch(getAllCountries())
    }
    else if(e.target.name === 'activities' && e.target.value !== 'Activities') {
      dispatch(filterActivities(e.target.value));
      dispatch(getActivities())
    }else if(e.target.value === 'Activities'){
      dispatch(filterActivities(""))
      dispatch(getAllCountries())
    }
  }

  return (
    <div className={s.filterContainer}>
      <div className={s.containerForms}>
        <div  className={s.containerOrderSelect}>
          <label>Sort</label>
          <select name="alphabet" onChange={onSelectSortChange}>
            <option>Alphabet</option>
            <option value={A_Z}>A-Z</option>
            <option value={Z_A}>Z-A</option>
          </select>
          <select name="population" onChange={onSelectSortChange}>
            <option>Population</option>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
          </select>
          <select name="area" onChange={onSelectSortChange}>
            <option>Area</option>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
          </select>
        </div>
        <div className={s.containerFilterSelect}>
        <label>Filter</label>
          <select name="continent" onChange={onSelectFilterChange}>
            <option >Continents</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select name="activities" onChange={onSelectFilterChange}>
            {filter.length > 0 ? (<option>Activities</option>) : (<option>No activities</option>)}
            {filter.length > 0 &&
              filter.map((nameActivity) => {
                return (
                  <option key={nameActivity} value={nameActivity}>{nameActivity}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
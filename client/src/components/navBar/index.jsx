import React from 'react';
import { Link } from 'react-router-dom';
import { sortAlphabet,sortPopulation,filterContinent,filterActivities,sortArea,getByName, getAllCountries} from '../../Redux/actions';
import { useDispatch} from "react-redux";
import SearchBar from '../searchBar/index';
import s from "./index.module.css"
import house from "../../Images/iconos/house-solid.svg"
import add from "../../Images/iconos/square-plus-solid.svg"
import main from "../../Images/iconos/Main.svg"

const NavBar = () => {
  const dispatch = useDispatch()
  const HandleDispatch=()=>{
    dispatch(sortAlphabet(""))
    dispatch(sortPopulation(""))
    dispatch(filterContinent(""))
    dispatch(filterActivities(""))
    dispatch(sortArea(""))
    dispatch(getByName(""))
    dispatch(getAllCountries())
  }
  return (
    <header className={s.navBar}>
    <nav>
      <div className={s.cosas}>
        <Link className={s.main} to='/'><img  className={s.iconMain} src={main} alt="" />Countries App</Link>
        <div className={s.searchBar}>
        <SearchBar />
        </div>
        <div className={s.last}>
        <Link className={s.ulNav} to="/countries"  onClick={()=> HandleDispatch()}><img src={house} alt="" />Home</Link>
        <Link className={s.ulNav} to="/activities"><img  className={s.icon} src={add} alt="" />Create Activity</Link>
        </div>
      </div>
        
    </nav>
    </header>
   
  )
}

export default NavBar


import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {deleteActivity, getActivities,getAllCountries,getByName} from "../../Redux/actions/index";
import { Link } from "react-router-dom";
import image from "../../Images/prueba2.jpg"
import s from "./index.module.css"

const Activities = () => {

const dispatch = useDispatch();
let activities  = useSelector((state) => state.activities)

useEffect(() => {
  dispatch(getActivities())
}, [dispatch])

let filter = activities.map((activity) => {
    return activity.name
})

let arrayActivitiesNameFiltered = filter.filter((name,index)=>{
    return filter.indexOf(name) === index;
})


function handleDelete(e){
    dispatch(deleteActivity(e.target.value))
    arrayActivitiesNameFiltered.filter(g=> g !== e.target.value)
    window.location.reload()
}

const HandleDispatch=()=>{
  dispatch(getByName(""))
  dispatch(getAllCountries())
}

return(
    <div>
        <div className={s.background}> 
      <img src={image} className={s.stretch} alt="" />  
    </div>
    <div className={s.posicion}>
      <Link to="/countries"  onClick={()=> HandleDispatch()}><button className={s.button}>Go Home</button></Link>
    </div>
    <div className={s.container}>
        {arrayActivitiesNameFiltered.length > 0 ? <h3 className={s.a}>Activities</h3> : <h3 className={s.a}>No Activities Found</h3>}
        <ul className={s.puntitos}>
            {arrayActivitiesNameFiltered.length > 0 &&
              arrayActivitiesNameFiltered.map((nameActivity, index) => {
                return (
                    <li key={index} className={s.lista} >
                        {nameActivity}<button className={s.closeButton} value={nameActivity} onClick={(e)=> handleDelete(e)}>❌</button>
                    </li> 
                )
              })
            }
        </ul>
    </div>
            
        
    </div>
)
}

export default Activities;
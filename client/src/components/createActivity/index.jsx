import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCountries, postActivity, getByName} from "../../Redux/actions/index";
import image from "../../Images/prueba2.jpg"
import s from "./index.module.css"

const CreateActivity = () => {
  const[errorsValue, setErrorsValue] = useState({})
  const[newActivity, setNewActivity]= useState({name:"",difficulty:"",duration:"",season:"",countries:[]})
  const allCountries = useSelector(state => state.countries);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])
    
  const handleSubmit =  (e) => {
    e.preventDefault()
    setErrorsValue(validateValue(newActivity))
    const error = validateValue(newActivity)
    if(Object.values(error).length === 0){
      dispatch(postActivity(newActivity))
      alert("Activity created")
      document.formAct.reset();
      setNewActivity({name:"",difficulty:"",duration:"",season:"",countries:[]})
    }
  }

  function validateValue({name,duration,difficulty,season,countries}){
    let errors = {}
    if(!name){
        errors.name = "Name is required"
    }else if(!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(name)){
        errors.name = "Name is invalid"
    }
    if(!duration || duration === "Duration"){
        errors.duration = "Duration is required"
    }
    if(!difficulty || difficulty === "Difficulty"){
        errors.difficulty = "Difficulty is required"
    }
    if(!season || season === "Season"){
        errors.season = "Season is required"
    }
    if(!countries[0]){
        errors.countries = "Country is required"
    }
    return errors;
  }

  function HandleActivity(e){
    setNewActivity({...newActivity,[e.target.name]:e.target.value})
  }

  function HandleCountry(e){
    setNewActivity({...newActivity,countries:[...newActivity.countries,e.target.value]})
  }

  function handleDelete(e){
    setNewActivity({...newActivity,countries: [...newActivity.countries.filter(g=> g !== e)]})
  }

  const HandleDispatch=()=>{
    dispatch(getByName(""))
    dispatch(getAllCountries())
  }

  return(
  <>
    <div className={s.background}> 
      <img src={image} className={s.stretch} alt="" />  
    </div>
    <div className={s.posicion}>
      <Link to="/countries"  onClick={()=> HandleDispatch()}><button className={s.button}>Go Home </button></Link>
    </div>
    <div className={s.ContenedorFinal}>
      <div className={s.divContainer}> 
        <form className={s.container} name="formAct" onSubmit={e => handleSubmit(e)}>
          <h1 className={s.newActivity}>New Activity</h1>
          <input className={s.activityName} name="name" autoComplete="off" placeholder="Activity name..." onChange={e=> HandleActivity(e)}/>
          <p className={s.danger}>{errorsValue.name}</p>    
          <div>
            <div className={s.center}>
              <select className={s.select} name="duration"  onChange={ e => HandleActivity(e)}>
                <option hidden value>Duration</option>
                <option>30 min</option>
                <option>1 Hr</option>
                <option>2 Hrs</option>
                <option>3 Hrs</option>
                <option>4 Hrs</option>
                <option>5 Hrs</option>
              </select>
            </div>
            <p className={s.danger}>{errorsValue.duration}</p>
          </div>
          <div>
            <div className={s.ses}>
              <select className={s.dif} name="difficulty" onChange={ e =>   HandleActivity(e)}>
                <option hidden value>Difficulty</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select className={s.dif} name="season"  onChange={e =>  HandleActivity(e)}>
                <option hidden value>Season</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
              </select>
            </div>
            <div className={s.difficulty}>
              <span className={s.danger}>{errorsValue.difficulty}</span>  <span className={s.danger}>{errorsValue.season}</span>
            </div>
          </div>
          <div>
            <div className={s.center}>
              <select className={s.select} onChange={(e) => { 
                e.preventDefault(e)
                HandleCountry(e)
                }}>
                <option hidden>Countries</option>
                {allCountries?.map(c =>{
                  return(
                    <option key={c.name} value={c.name} >{c.name}</option>
                  )
                })}
              </select>
            </div>
            <p className={s.danger}>{errorsValue.countries}</p>
          </div>
          <div className={s.centerButton}>
            <button class={s.button} type="submit">
              <span class={s.text}>Create Activity</span>
            </button>
          </div> 
        </form>
      </div>
      <div className={s.countriesList}>
        <ul className={s.puntitos}>
        {newActivity.countries.map(e => 
          <span key={e}>
          <li>
            <span className={s.lista}>{e}</span>
            <button className={s.closeButton} onClick={()=> handleDelete(e)}>❌</button>
          </li>
          </span>
        )}
        </ul>
      </div>
    </div>
  </>
  )
}
  
export default CreateActivity;
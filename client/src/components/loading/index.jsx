import React from "react";
import loading from "../../Images/rocket.gif";
import s from "./index.module.css"

export default function Loading(props){
  return(  
  <>
    <div>
      <div className="loading">
       <img className={s.img} src={loading} alt="" />
      </div>
    </div>
    <div className="timeout">
      {setTimeout(()=>{
        props.setLoading(false)
      }, 2000)}
    </div>
  </>
  )
}
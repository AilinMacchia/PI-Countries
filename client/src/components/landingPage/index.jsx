import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css"
import video from "../../Images/video.mp4"

const LandingPage = () => {
  return(
    <div className={s.body}>
      <section className={s.showcase}>
        <video src={video} autoPlay loop muted></video>
        <h1 className={s.title}>DISCOVER THE WORLD</h1>
      </section>
      <div className={s.enter}>
        <Link className={s.button} to="/countries">ENTER</Link>
      </div>
    </div>
    
  )
  
};
  
export default LandingPage;
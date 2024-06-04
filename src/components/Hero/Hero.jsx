import Styles from "./Hero.module.css";
import React from 'react';
import headphone from "../../asset/headphone.png"
const Hero = () =>{
    return(
        <div className={Styles.HeroMain}>
            <div className={Styles.subMain}>
                <div className={Styles.subMainn}>
                    <p className={Styles.fText}>100 Thousand Songs, ad-free</p>
                    <p className={Styles.sText}>Over thousands podcast episodes</p>
                </div>
                    <img src={headphone} alt="" className={Styles.imgSection}/>
                
            </div>
        </div>
    )
}
export default Hero;

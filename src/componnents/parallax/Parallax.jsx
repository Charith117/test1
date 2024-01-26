import React from 'react'
import "./parallax.scss";

import {motion,useScroll,useTransform} from"framer-motion"
import { useRef } from 'react';


const Parallax = ({type}) => {

  

    const ref=useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
      
      
      const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
      const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


  return (
    <div
    className="parallax" 
    ref={ref}
    style={{  background: type === "services"
    ? "linear-gradient(180deg, #abff9820, #0c0c1d)"
    : "linear-gradient(180deg, #111132, #abff9858)",
    
     }}>
    <motion.h1 style={{translateY: yText}}>{type=="services" ? "What We Do?" : "What We Did ?"}</motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div style={{translateY: yBg}} className="planets"></motion.div>
    <motion.div style={{translateX:yText}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax   
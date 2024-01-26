import React from 'react'
import "./services.scss"
import {animate, color, motion} from "framer-motion"



const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};




const Services = () => {
  return (
    
    <motion.div className="services" variants={variants}
    

    initial="initial"  
    // animate="animate"
   whileInView="animate" >
    
  
        <motion.div className="textContainer"ariants={variants}>
            <p>
                I Focus on helping your brand graow <br />
                and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer"ariants={variants}>
            <div className="title">


            <img src="/people.webp" alt="" />
            <h1  ><motion.b whileHover={{color:"orange"}}> Unique </motion.b> Ideas </h1>
            </div>


            <div className="title">
            
            <h1><motion.b whileHover={{color:"orange"}}> For you </motion.b> Business </h1>
            <motion.button whileHover={{color:"blue"}}> What We Do ?</motion.button> 
            </div>

            
           
           
        </motion.div>
        <motion.div className="listContainer"ariants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            
            <h2>Branding</h2>
            <p>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard 
          
            </p>
        <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            
            <h2>Branding</h2>
            <p>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard 
         
            </p>
        <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            
            <h2>Branding</h2>
            <p>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard 
   
            </p>
        <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            
            <h2>Branding</h2>
            <p>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard 
           
            </p>
        <button>Go</button>
            </motion.div>
        </motion.div>


        
        
    </motion.div>
     
  )
}

export default Services




import "./portfolio.scss"
import{motion,useScroll,useSpring, useTransform} from"framer-motion";
import React, { useRef } from 'react';


const item=[
   { id:1,
    title:"React Commerce",
    img:"https://images.pexels.com/photos/68495/pexels-photo-68495.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequuntur eligendi repellat. a earum ducimus?",
    
},
{ id:2,
    title:"Next.js Blog",
    img:"https://images.pexels.com/photos/68495/pexels-photo-68495.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequuntur eligendi repellat. a earum ducimus?"
},
    
{ id:3,
    title:"Vanilla js",
    img:"https://images.pexels.com/photos/68495/pexels-photo-68495.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequuntur eligendi repellat. a earum ducimus?"
},
{ id:4,
    title:"fitness app",
    img:"https://images.pexels.com/photos/68495/pexels-photo-68495.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequuntur eligendi repellat. a earum ducimus?"
},
   
];

const Single =({item}) =>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,
    // offset:["start start","end start"]
    });
    const y=useTransform(scrollYProgress,[0,1],[-1000,1000])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div> 
                    
                         <motion.div className="textContainer" style={{y}}>
                         <h2>{item.title} </h2>
                         <p>{item.description}</p>
                             <button>demo</button>
                       </motion.div>
                 </div>
           
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref =useRef()

const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});

const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,

});



  return (
    <div className="portfolio" ref={ref}>

        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>




        
        {item.map((item)=>(
            <Single item={item } key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
import {motion} from "framer-motion"
const variants={
    open:{
        trasition:{
            staggerChildren:0.1,
        },
    },
    close:{
        trasition:{
            staggerChildren:0.1,
            staggerDirection:-1,

        },
    },   
};

const itemvariants={
    open:{
       y:0,
        
    },
    close:{
       y:50,
       opacity:0,
    },   
};





import React from 'react';

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

    
  return (
    <motion.div className="links" variants={variants}>
      {items.map(item => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

import React from 'react'
import { motion } from "framer-motion";
const loadervariants= {
    animationOne: {
        backgroundColor: "#f87171",
        x:[-300, 350],
        y:[20, -50],
        transition: {
            x:{
                repeat: Infinity,
                duration: 5
            },
            y:{
                repeat: Infinity,
                duration: 0.75,
                ease:"easeOut"
            }
        }
    }
}
function Loader() {
  return (
    <motion.div className="loader"
    variants={loadervariants}
    animate="animationOne"
    >

    </motion.div>
  )
}

export default Loader
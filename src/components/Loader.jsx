import React from 'react'
import { motion } from "framer-motion";
const loadervariants= {
    animationOne: {
        backgroundColor: "#64748b",
        x:[-300, 350],
        y:[10, -10],
        transition: {
            x:{
                repeat: Infinity,
                duration: 5
            },
            y:{
                repeat: Infinity,
                duration: 1,
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
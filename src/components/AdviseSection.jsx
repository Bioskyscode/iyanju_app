
import Button from "./shared/Button"
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext"
import { useContext } from "react"
import { motion } from "framer-motion"
// import {Fade, Zoom} from 'react-reveal';
const buttonVariants = {
    hover:{
        scale: 1.1,
        transition: {
            yoyo:10,
        }
    }
}
function AdviseSection() {
    const { fetchAdvice, advice, count } = useContext(FeedbackContext)
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
        >
            {/* <Fade left> */}
            <Card reverse={true} >
                <div className="advice-container">
                    <motion.div className="advice"
                        initial={{ opacity: 0 }}
                        animate={{ fontSize: 18, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 7}}
                    >{advice}</motion.div>
                    <motion.div
                    className="button-motion"
                    variants={buttonVariants}
                        whileHover= "hover"
                    >
                        <Button clickFunction={fetchAdvice} version="primary" btnText="Get Advice" />
                    </motion.div>
                    <div className="advise-msg">{count === 0 ? <div><i className="fa-solid fa-arrow-up fa-fade"></i></div> : `${count}  pieces of dvice read`}</div>
                </div>
            </Card>
            {/* </Fade> */}

            {/* <Zoom> */}
            <hr />
            {/* </Zoom> */}

        </motion.div>
    )
}

export default AdviseSection
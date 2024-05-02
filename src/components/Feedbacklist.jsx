import FeedbackItems from "./FeedbackItems"
// import { Fade } from "react-reveal";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "./shared/Button";
import { AnimatePresence, motion, useInView } from "framer-motion";

const listVariant = {
  init: {
    opacity:0,
    x: 350
  },
  visible: {
    opacity:1,
    x: 0,
    transition: { type: "spring", stiffness: 70 }
  },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 700 }
  },
  remove: {
    x: -2000
  },
}
function Feedbacklist() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const { feedback, isLoading } = useContext(FeedbackContext)
  const [showmore, setShowmore] = useState(3)

  useEffect(() => {
    console.log(`The Element ->, ${isInView ? "is": "is NOT" } in view`)
  }, [isInView]);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <div>No Reviews available</div>
  }
  const loadMore = (e) => {
    e.preventDefault()
    setShowmore(prev => prev + 1)
  }
  return (isLoading ? <i className="fa-solid fa-rotate fa-spin fa-2xl isloading"></i> : (
    <ul className="feedback-list">
      <AnimatePresence>
        {feedback.slice(0, showmore).map(item =>
          // <Fade right key={item.id}>

          <motion.li
            ref={ref}
            key={item.id}
            variants={listVariant}
            initial="init"
            whileInView="visible"
            // animate= {isInView  && "visible"}
            // whileInView="visible"
             viewport={{margin:"-40px"}}
            exit="remove"
            whileHover="hover"
          >
            <FeedbackItems feedbacksItem={item} />
          </motion.li>


          // </Fade>
        )}
      </AnimatePresence>

      {showmore >= feedback.length ? null : <Button clickFunction={loadMore} version="primary" btnText="Load More" />}

    </ul>
  ))
}

export default Feedbacklist
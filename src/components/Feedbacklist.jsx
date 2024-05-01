import FeedbackItems from "./FeedbackItems"
// import { Fade } from "react-reveal";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useState } from "react";
import Button from "./shared/Button";
import { AnimatePresence, motion } from "framer-motion";

const listVariant = {
  init:{
    x: "100vw"
  },
  visible:{
    x: 0 ,
    transition:{delay: 0.5, type: "spring", stiffness: 70}
  },
  hover:{
    scale:1.1,
    transition:{ type: "spring", stiffness: 700}
  },
  remove:{
    x:"-100vw"
  }
}
function Feedbacklist() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  const [showmore, setShowmore] = useState(5)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <div>No Reviews available</div>
  }
  const loadMore = () => {
    setShowmore(prev => prev + 2)
  }
  return (isLoading ? <i className="fa-solid fa-rotate fa-spin fa-2xl isloading"></i> : (
    <ul className="feedback-list">
      <AnimatePresence>
      {feedback.slice(0, showmore).map(item =>
        // <Fade right key={item.id}>
        
        <motion.li
          key={item.id}
          variants={listVariant}
          initial="init"
          animate="visible"
          exit="remove"
          whileHover="hover"
        >
          <FeedbackItems feedbacksItem={item} />
        </motion.li>

       
        // </Fade>
      )}
       </AnimatePresence>

      {showmore >= feedback.length ? null : <Button clickFunction={loadMore} version="secondary" btnText="Load More" />}

    </ul>
  ))
}

export default Feedbacklist
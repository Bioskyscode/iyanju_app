import FeedbackItems from "./FeedbackItems"
import { Fade } from "react-reveal";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";


function Feedbacklist() {
    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <div>No Reviews available</div>
    }
  return (
    <div className="feedback-list">
        {feedback.map(item => 
        <Fade right key={item.id}>
          <FeedbackItems  feedbacksItem={item} />
        </Fade>
        )}
    </div>
  )
}

export default Feedbacklist
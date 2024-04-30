import FeedbackItems from "./FeedbackItems"
import { Fade } from "react-reveal";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useState } from "react";
import Button from "./shared/Button";


function Feedbacklist() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    const [showmore, setShowmore] = useState(5)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <div>No Reviews available</div>
    }
    const loadMore = ()=> {
      setShowmore(prev => prev + 2)
    }
    return (isLoading ? <i className="fa-solid fa-rotate fa-spin fa-2xl isloading"></i>:  (
      <div className="feedback-list">
          {feedback.slice(0, showmore).map(item => 
          // <Fade right key={item.id}>
            <FeedbackItems  key={item.id} feedbacksItem={item} />
          // </Fade>
          )}
          {showmore >= feedback.length ? null : <Button clickFunction={loadMore} version="secondary" btnText= "Load More"/>}
          
      </div>
    ))
}

export default Feedbacklist
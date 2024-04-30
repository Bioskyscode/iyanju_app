import { useContext } from "react"
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import FeedbackContext from "../context/FeedbackContext"


function FeedbackItems({feedbacksItem}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
   
  return (
    <Card >
        <div className="num-display">{feedbacksItem.rating}</div>
        <div className="text-display">{feedbacksItem.text}</div>
        <i onClick={() => editFeedback(feedbacksItem)} className="fa-regular fa-pen-to-square edit"></i>
        <i onClick={() => deleteFeedback(feedbacksItem.id)} className="fa-regular fa-trash-can close" ></i>
    </Card>
  )
}

FeedbackItems.prototype = {
    feedback: PropTypes.object.isRequired
}
export default FeedbackItems
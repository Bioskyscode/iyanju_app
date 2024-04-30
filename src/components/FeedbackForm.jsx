import {useContext, useEffect, useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
// import Zoom from 'react-reveal/Zoom';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    // const [textCount, setTextCount] = useState(15)
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(()=>{
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
       if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
       } else if (text !== '' && text.trim().length <= 10) {
        setMessage('Text must be at least 10 chars')
        setBtnDisabled(true)
       } else {
        setMessage(null)
        setBtnDisabled(false)
       }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text, rating,
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setBtnDisabled(true)
            setText('')
        }
    }

  return (
    // <Zoom>
    <Card> 
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect selectedButton={rating => setRating(rating)}/>
            <div className="input-group">
            <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review" />
            <Button isDisabled={btnDisabled} btnType= "submit" version="primary" btnText="Send" />
 
            </div>
        {message && <div className="message">{message}</div>}
        </form>
    </Card> 

    // </Zoom>
  )
}

export default FeedbackForm
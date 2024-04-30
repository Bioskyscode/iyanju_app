import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStat() {
  const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((total, currentValue) => {
           return total + currentValue.rating
    }, 0) / feedback.length ;

    average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length >= 1 && `${feedback.length} Reviews`} </h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
  )
}

FeedbackStat.prototype = {
    feedbacks: PropTypes.array.isRequired
}

export default FeedbackStat
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [advice, setAdvice] = useState("Need some advices?");
    const [count, setCount] = useState(0);
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const fetchAdvice = async ()=> {
        const api = await fetch("https://api.adviceslip.com/advice");
        const result = await api.json();
        setAdvice(result.slip.advice)
        setCount(count +1)

    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map(item => (
            item.id === id ? {...item, ...updatedItem} : item
        )))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter(feedback => feedback.id != id))
        }
    }

    return <FeedbackContext.Provider value={{
        advice, count, feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback, fetchAdvice
    }}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext
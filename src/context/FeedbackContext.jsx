
import { createContext, useEffect, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    // const [isLoading, setIsloading] = useState(true)
    const [advice, setAdvice] = useState("Need some advices?")
    const [count, setCount] = useState(0)
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        // fetchFeedback()
    }, []);
    const fetchAdvice = async ()=> {
        const api = await fetch("https://api.adviceslip.com/advice");
        const result = await api.json();
        setAdvice(result.slip.advice)
        setCount(count +1)

    }

    const fetchFeedback = async ()=> {
        const api = await fetch(`/feedback`)
        const result = await api.json();
        setFeedback(result)
        // setIsloading(false)

    }

    const addFeedback = async (newFeedback) => {
        // const response = await fetch("/feedback", {
        //     method: "POST",
        //     headers: {"content-type": "application/json"},
        //     body: JSON.stringify(newFeedback),
        // })
        // const data = await response.json()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = async (id, updatedItem) => {
        // const response = await fetch(`/feedback/${id}`, {
        //     method: "PUT",
        //     headers: {"content-type": "application/json"},
        //     body: JSON.stringify(updatedItem),
        // })
        // const data = await response.json()
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

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            // await fetch(`/feedback/${id}`, {method: "DELETE"})
            setFeedback(feedback.filter(feedback => feedback.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        advice, 
        count, 
        // isLoading,
        feedback, 
        feedbackEdit, 
        deleteFeedback, 
        addFeedback, 
        editFeedback, 
        updateFeedback, 
        fetchAdvice,
    }}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext
import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext";

const data = [
    {
        // id: "num1",
        value: 1
    },
    {
        value: 2
    },
    {
        value: 3
    },
    {
        value: 4
    },
    {
        value: 5
    },
    {
        value: 6
    },
    {
        value: 7
    },
    {
        value: 8
    },
    {
        value: 9
    },
    {
        value: 10
    },
]

function RatingSelect({selectedButton}) {
    const [selected, setSelected] = useState()
    const { feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=>{
        if (feedbackEdit.edit === true) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    function handleChange(e) {
        setSelected(+e.target.value)
        selectedButton(+e.target.value)
    }

  return (
    <ul className="rating">
        {data.map((item, index)=> 
        <li key={index}>
        <input
         type="radio" 
        id={index}
        name="rating"
        value={item.value}
        onChange={handleChange}
        checked= {selected === item.value}
        />
        <label htmlFor={index}>{item.value}</label>
        </li>
        )}
    </ul>
  )
}

export default RatingSelect
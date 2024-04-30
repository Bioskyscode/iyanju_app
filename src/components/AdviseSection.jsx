
import Button from "./shared/Button"
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext"
import { useContext } from "react"
import {Fade, Zoom} from 'react-reveal';
function AdviseSection() {
    const { fetchAdvice, advice, count } = useContext(FeedbackContext)
    return (
        <div>
            {/* <Fade left> */}
            <Card reverse={true} >
                <div className="advice-container">
                    <div className="advice">{advice}</div>
                    <Button clickFunction={fetchAdvice} version="secondary" btnText="Get Advice" />
                    <div className="advise-msg">{count === 0 ? <div><i className="fa-solid fa-arrow-up fa-fade"></i></div> : `${count}  Advice read`}</div>
                </div>
            </Card>
            {/* </Fade> */}
            
            {/* <Zoom> */}
            <hr />
            {/* </Zoom> */}

        </div>
    )
}

export default AdviseSection
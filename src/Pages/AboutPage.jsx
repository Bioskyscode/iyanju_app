import Card from "../components/shared/Card"
import {  Link} from "react-router-dom";

function AboutPage() {
  return (
    <Card children= {
    <div className="about">
        <h4>About This Project</h4>
        <p>This is a React App Project</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back To Homepage</Link>
    </div>
    }/>
  )
}

export default AboutPage
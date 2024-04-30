import Button from "./shared/Button"
import {  Link} from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
        <Link to= '/about'>
        
        <i class="fa-solid fa-question fa-xl"></i>
        </Link>
    </div>
  )
}

export default AboutIconLink
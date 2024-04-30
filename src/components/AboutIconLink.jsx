import {  Link} from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
        <Link to= '/about'>
        
        <i className="fa-solid fa-question fa-xl"></i>
        </Link>
    </div>
  )
}

export default AboutIconLink
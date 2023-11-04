import HomeIcon from "../assets/home-icon.png"
import { Link } from "react-router-dom";

function Navbar() {
return(

    <div className="nav-bar">
   <Link to="/">
   <img src={HomeIcon} alt="error" />        
      </Link> 
</div>
)

}

export default Navbar;

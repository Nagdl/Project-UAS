import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function Navbar(){
    return(
        <div className="containerNavbar">
            <div className="isiNavbar">
                <img src={logo} alt="" className="logo"/>
                
                <nav className="stroke">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Main</a></li>
                        <li><a href="">Content</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </nav>
                
                <div className="search-box">
                    <input type="text" placeholder='Search' />
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
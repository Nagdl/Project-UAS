import "./Navbar.css";
import logo from "../../assets/logo.png"

function Navbar(){
    return(
        <div className="containerNavbar">
            <div className="isiNavbar">
                <img src={logo} alt="" className="logo"/>
                
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Main</a></li>
                        <li><a href="">Content</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </nav>
                
                <div className="search-box">
                    <input type="text" placeholder='Search' />
                    <img src="" alt="" />
                </div>

            </div>
        </div>
    );
}

export default Navbar;
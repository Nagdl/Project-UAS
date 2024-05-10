import "./Navbar.css";
import logo from "../../assets/SigerLampung.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img className="logo" src={logo} href=""></img>
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/">Main</a>
                    <a className="nav-link" href="/">About Us</a>
                    <a className="nav-link" href="/">Contact Us</a>
                </div>
                </div>
            </div>
        </nav>

//             <div className="isiNavbar">
//                 <nav className="stroke">
//                     <ul>
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">Main</a></li>
//                         <li><a href="#">Content</a></li>
//                         <li><a href="#">About</a></li>
//                     </ul>
//                 </nav>
                
//                 <div className="search-box">
//                     <input type="text" placeholder='Search' />
//                     <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
//                 </div>

//             </div>
//         </div>
    );
}

export default Navbar;
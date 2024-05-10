import "./Navbar.css";
import logo from "../../assets/SigerLampung.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


function Navbar(){
    return(
        <div className="fixed-top navbar navbar-expand-lg isiNavbar">

            <div className="container-fluid ">
                <img className="logo" src={logo} href="#"></img>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav className="collapse navbar-collapse stroke" id="navbarNavAltMarkup">
                    <div className="navbar-nav kontenNav">
                        <a className="p-4 nav-link siKonten" href="/">Home</a>
                        <a className="p-4 nav-link" href="/">Main</a>
                        <a className="p-4 nav-link" href="/">About Us</a>
                        <a className="p-4 nav-link" href="/">Contact Us</a>
                    </div>
                </nav>

            </div>

        </div>

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
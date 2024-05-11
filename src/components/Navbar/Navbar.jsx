import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/SigerLampung.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


function Navbar(){
    const [containerNavbar, setNavbar] = useState(false); 

    useEffect(() => {
        const changeBackground = () => {
            console.log(window.scrollY)
            if(window.scrollY >= 80){
                setNavbar(true)
            } else {
                setNavbar(false);
            } 
        };

        window.addEventListener('scroll', changeBackground);
    }, []);
    
    return(
        <nav className= {containerNavbar ? "containerNavbar aktif navbar navbar-expand-lg navbar-dark fixed-top" : "containerNavbar navbar navbar-expand-lg navbar-dark fixed-top"}>
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand fs-4" href="#">Offcanvas dark navbar</a>

                {/* Toggle Button */}
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* SideBar */}
                <div className="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    
                    {/* Sidebar Header */}
                    <div className="offcanvas-header text-white border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dark offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    {/* Sidebar Body */}
                    <div className="sideBody tittleNav offcanvas-body d-flex flex-column p-4">
                        <ul className="stroke navbar-nav justify-content-center align-item-center fs-5 flex-grow-1 pe-3">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Home</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#mainSatu">Main</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>

                                <ul className="dropdown dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="garis dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            {/* JAM/CALENDAR */}

                        </ul>
                    </div>
                </div>
            </div>

{/* 
            //      <div className="isiNavbar">
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
//         </div> */}

        </nav>
    );
}

export default Navbar;
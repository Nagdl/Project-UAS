import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/SigerLampung.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [containerNavbar, setNavbar] = useState(false);
    const [bungkusLogo, setLogo] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 100) {
                setNavbar(true);
                setLogo(true);
            } else {
                setNavbar(false);
                setLogo(false);
            }
        };

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    useEffect(() => {
        const sidebar = document.getElementById('offcanvasNavbar');
        if (sidebar) {
            const bsOffcanvas = new window.bootstrap.Offcanvas(sidebar);
            bsOffcanvas.hide();
            
            // Menghapus padding-right yang ditambahkan oleh navbar setelah menutupnya
            document.body.style.paddingRight = "0";
        }

        document.body.style.overflow = 'auto';
    }, [location]);

    const closeSidebar = () => {
        const sidebar = document.getElementById('offcanvasNavbar');
        if (sidebar) {
            const bsOffcanvas = new window.bootstrap.Offcanvas(sidebar);
            bsOffcanvas.hide();
            
            // Menghapus padding-right yang ditambahkan oleh navbar setelah menutupnya
            document.body.style.paddingRight = "0";
        }
    };

    return (
        <nav className={containerNavbar ? "containerNavbar aktif navbar navbar-expand-lg navbar-dark fixed-top" : "containerNavbar navbar navbar-expand-lg navbar-dark fixed-top p-4"}>
            <div className="container-fluid">
                {/* Logo */}
                <div className={bungkusLogo ? "aktifLogo" : "bungkusLogo"}>
                    <div className="iconLogo"><img src={logo} alt="Logo" /></div>
                    <div className="teksLogo"><p>LAMPCARA</p></div>
                </div>
                {/* Toggle Button */}
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* SideBar */}
                <div className="sidebar offcanvas offcanvas-end bg-transparent" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    {/* Sidebar Header */}
                    <div className="offcanvas-header text-white text-center border-bottom">
                        <h5 className="offcanvas-title judulNav" id="offcanvasNavbarLabel">LAMPCARA</h5>
                        <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    {/* Sidebar Body */}
                    <div className="sideBody offcanvas-body d-flex flex-column p-4">
                        <ul className="containSide navbar-nav justify-content-center align-item-center fs-5 flex-grow-1">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/" onClick={closeSidebar}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Main</Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#mainSatu" onClick={closeSidebar}>Lampung Motto</Link></li>
                                    <li><Link className="dropdown-item" to="#mainTiga" onClick={closeSidebar}>Highlight Destination</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/Wisata" onClick={closeSidebar}>Wisata</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/About" onClick={closeSidebar}>About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/ContactUs" onClick={closeSidebar}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react";
import { FaGithub } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/SigerLampung.png";
import { Link } from "react-router-dom";
import Weather from "../Weather/Weather";

const Footer = () => (
    <>
        <div className="footer-container">
            <div className="footer-grid">
                <div className="kiri">
                    <div className="bungkusLogoFoot">
                        <div className="iconLogo"><img src={logo} alt=""/></div>
                        <div className="teksLogoFoot"><p>LAMPCARA</p></div>
                    </div>
                    <p>Lampung adalah sebuah provinsi di ujung selatan Pulau Sumatra, Indonesia. Provinsi ini terkenal dengan kekayaan alamnya yang memukau, mulai dari pantai-pantai berpasir putih yang membentang panjang, hingga pegunungan hijau yang menjulang tinggi. Keindahan alam Lampung tidak hanya terlihat dari pemandangan lautnya yang biru jernih, tetapi juga dari keanekaragaman hayati yang hidup di hutan-hutannya yang rimbun. Sungai-sungai yang mengalir deras dan air terjun yang megah menambah pesona alam yang menakjubkan, membuat Lampung menjadi destinasi yang memikat hati para pencinta alam dan petualang.</p>
                </div>
                <div className="kanan">
                    <p>Quick Links</p>
                    <Link to="/">Home</Link><br />
                    <Link to="/Wisata">Wisata</Link><br />
                    <Link to="/About">About Us</Link><br />
                    <Link to="/ContactUs">Contact Us</Link><br />
                </div>
                <div className="iniWeather2">
                    <Weather />
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-socials">
                <p className="footer-text">Copyright © 2024 | All rights reserved</p>
                <div className="social-icons">
                    <a href="https://github.com/Nagdl/Project-UAS" className="social-link">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    </>
);

export default Footer;

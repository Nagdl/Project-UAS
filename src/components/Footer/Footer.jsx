import React, { useEffect } from "react";
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import logo from "../../assets/SigerLampung.png";
import { Link } from "react-router-dom";
import Weather from "../Weather/Weather";

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="kiri" data-aos="fade-up" data-aos-delay="100">
                        <div className="bungkusLogoFoot">
                            <div className="iconLogo"><img src={logo} alt="Logo"/></div>
                            <div className="teksLogoFoot"><p>LAMPCARA</p></div>
                        </div>
                        <p>Lampung adalah sebuah provinsi di ujung selatan Pulau Sumatra, Indonesia. Provinsi ini terkenal dengan kekayaan alamnya yang memukau, mulai dari pantai-pantai berpasir putih yang membentang panjang, hingga pegunungan hijau yang menjulang tinggi. Keindahan alam Lampung tidak hanya terlihat dari pemandangan lautnya yang biru jernih, tetapi juga dari keanekaragaman hayati yang hidup di hutan-hutannya yang rimbun. Sungai-sungai yang mengalir deras dan air terjun yang megah menambah pesona alam yang menakjubkan, membuat Lampung menjadi destinasi yang memikat hati para pencinta alam dan petualang.</p>
                    </div>
                    <div className="kanan" data-aos="fade-up" data-aos-delay="200">
                        <p>Quick Links</p>
                        <Link to="/">Home</Link><br />
                        <Link to="/Wisata">Wisata</Link><br />
                        <Link to="/About">About Us</Link><br />
                        <Link to="/ContactUs">Contact Us</Link><br />
                    </div>
                    <div className="iniWeather2" data-aos="fade-up" data-aos-delay="300">
                        <Weather />
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-socials" data-aos="fade-down" data-aos-delay="500">
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
};

export default Footer;

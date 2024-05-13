import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/SigerLampung.png";
import { Link } from "react-router-dom";


const items = [
    {
        name: 'GitHub',
        icon: FaGithub,
        link: 'https://github.com/Nagdl/Project-UAS',
    },
];


const Footer = () => (
    <>
        <div className="footer-container">
            <div className="footer-grid">
                <div className="kiri">
                    <div className="bungkusLogo">
                        <div className="iconLogo"><img src={logo} alt=""/></div>
                        <div className="teksLogo"><p>LAMPCARA</p></div>
                    </div>
                    <p>Lampung adalah provinsi yang terletak di ujung selatan Pulau Sumatera, Indonesia. Wilayah ini dikenal akan keindahan alamnya yang memukau, mulai dari pantai-pantai eksotis hingga pegunungan yang hijau. Budaya Lampung yang kaya dan beragam tercermin dalam tradisi-tradisi adat serta kesenian lokal seperti tari Piring dan tari Gending. Selain itu, Lampung juga terkenal dengan kulinernya yang lezat, seperti sate kambing dan empek-empek. Keunikan alam, budaya, dan kuliner membuat Lampung menjadi destinasi yang menarik bagi wisatawan lokal maupun mancanegara.</p>
                </div>
                <div className="kanan">
                    <p>Quick Links</p>
                    <Link to="/">Home</Link><br />
                    <Link to="/Wisata">Wisata</Link><br />
                    <Link to="/About">About Us</Link><br />
                    <Link to="/ContactUs">Contact Us</Link><br />
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-socials">
                <p className="footer-text">Copyright © 2024 | All rights reserved</p>
                    <div className="social-icons">
                        {items.map((item, index) => (
                        <a key={index} href={item.link} className="social-link">
                            <item.icon />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default Footer;

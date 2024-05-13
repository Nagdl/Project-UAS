import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';
import './Footer.css';

const section = [
    {
        title: 'Solution',
        items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud'],
    },
    {
        title: 'Solution',
        items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud'],
    },
    {
        title: 'Solution',
        items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud'],
    },
    {
        title: 'Solution',
        items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud'],
    },
];

const items = [
    {
        name: 'Facebook',
        icon: FaFacebook,
        link: 'https://facebook.com/',
    },
    {
        name: 'GitHub',
        icon: FaGithub,
        link: 'https://github.com/',
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        link: 'https://Instagram.com/',
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        link: 'https://Twitter.com/',
    },
    {
        name: 'Twitch',
        icon: FaTwitch,
        link: 'https://Twitch.com/',
    },
];


const Footer = () => (
    <>
        <div className="footer-container">
            <div className="footer-grid">
                {section.map((section, index) => (
                    <div key={index}>
                        <h6 className="footer-title">
                            {section.title}
                        </h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className="footer-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer-divider"></div>

            <div className="footer-socials">
                <p className="footer-text">Follow Us On</p>
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

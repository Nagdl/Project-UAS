import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pinImg from '../../assets/pin.jpg';
import ricoImg from '../../assets/Rico.jpg';
import kenImg from '../../assets/ken.jpg';
import gadImg from '../../assets/gad.jpg';
import igIcon from '../../assets/ig.png';
import './AboutUs.css';

function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const handleKnowMore = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
    setIsExpanded(true);
  };

  const data = [
    {
      name: 'Kelvin Jonathan',
      img: pinImg,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      instagram: '@kelvin',
      instagramUrl: 'https://www.instagram.com/kelvinjo2008'
    },
    {
      name: 'Gadiel Narain',
      img: gadImg,
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      instagram: '@gadiel',
      instagramUrl: 'https://www.instagram.com/gadiel_na'
    },
    {
      name: 'Kent Seanly',
      img: kenImg,
      review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      instagram: '@kent',
      instagramUrl: 'https://www.instagram.com/kennsnly'
    },
    {
      name: 'Gregorius Frederico',
      img: ricoImg,
      review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      instagram: '@gregorius',
      instagramUrl: 'https://www.instagram.com/frederico__05'
    },
  ];

  const closeModal = () => {
    setModalOpen(false);
    setIsExpanded(false);
  };

  return (
    <div className="wrapper">
      <h1 className="title">About Our Team</h1>
      <div className="main-container">
        <div className="app-container">
          <Slider {...settings}>
            {data.map((member) => (
              <div key={member.name} className="card" style={{ backgroundImage: `url(${member.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="card-top">
                  <img src={member.img} alt={member.name} className="card-image" />
                </div>
                <div className="card-body">
                  <p className="card-title">{member.name}</p>
                  <p>{member.review}</p>
                  <button onClick={() => handleKnowMore(member)} className="know-more-button">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {modalOpen && (
        <div className="modal">
          <div className={`modal-content ${isExpanded ? 'expanded' : ''}`}>
          <h2 className="modal-name">{selectedMember.name}</h2>
            <a href={selectedMember.instagramUrl} target="_blank" rel="noopener noreferrer">
              <img src={igIcon} alt="Instagram" className="instagram-icon" />
            </a>
            <button onClick={closeModal} className="modal-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;

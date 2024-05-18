import React from 'react';
import './AboutUs.css';

import KelpinImg from '../../assets/pin.jpg';
import RicoImg from '../../assets/Rico.jpg';
import GadielImg from '../../assets/gad.jpg';
import KentImg from '../../assets/ken.jpg';
import Img1 from '../../assets/kel1.jpg';
import Img2 from '../../assets/kel2.jpg';
import IG from '../../assets/ig.png';

const Card = ({ image, description, title, instagram }) => (
  <article className="card__article">
    <img src={image} alt={description} className="card__img" />
    <div className="card__data">
      <span className="card__description">{description}</span>
      <h2 className="card__title">{title}</h2>
      <a href={instagram} className="card__button" target="_blank" rel="noopener noreferrer">
        <img src={IG} alt="Instagram" className="card__icon" />
      </a>
    </div>
  </article>
);

const ExtraSection = () => (
  <div className="extra-section">
    <div className="extra-section__img-wrapper">
      <img src={Img1} alt="Default" className="extra-section__img" />
      <img src={Img2} alt="Hover" className="extra-section__img extra-section__img--hover" />
    </div>
    <p className="extra-section__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
    </p>
  </div>
);

const CardContainer = () => (
  <div className="containerAboutUs">
    <header className="header">
      <h1 className="header__title">About Us</h1>
    </header>
    <div className="container">
      <div className="card__container">
        <Card 
          image={KelpinImg} 
          description="Leader" 
          title="Kelvin Jonathan" 
          instagram="https://instagram.com/kelvinjo2008"
        />
        <Card 
          image={RicoImg} 
          description="Member" 
          title="Gregorius Frederico" 
          instagram="https://instagram.com/frederico__05"
        />
        <Card 
          image={GadielImg} 
          description="Member" 
          title="Gadiel Narain" 
          instagram="https://instagram.com/gadiel_na"
        />
        <Card 
          image={KentImg} 
          description="Member" 
          title="Kent Seanly" 
          instagram="https://instagram.com/kennsnly"
        />
      </div>
      <ExtraSection />
    </div>
  </div>
);

export default CardContainer;

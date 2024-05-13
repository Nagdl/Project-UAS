import React, { useEffect, useState } from "react";
import "../Tiga/IsiTiga.css";
import Wisata from "../Tiga/Wisata";
import Card from "../Tiga/Card";
import Back from "../Tiga/Background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function IsiTiga() {
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('.list .item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const highlights = document.querySelectorAll('.highlight .item');

    const countItem = items.length;

    // event next click
    const handleNextClick = () => {
      setItemActive(prevState => {
        let newActive = prevState + 1;
        if(newActive >= countItem){
          newActive = 0;
        }
        return newActive;
      });
    };

    next.addEventListener('click', handleNextClick);

    // event prev click
    const handlePrevClick = () => {
      setItemActive(prevState => {
        let newActive = prevState - 1;
        if(newActive < 0){
          newActive = countItem - 1;
        }
        return newActive;
      });
    };

    prev.addEventListener('click', handlePrevClick);

    // click thumbnail
    const handleClick = (index) => {
      setItemActive(index);
    };

    highlights.forEach((highlight, index) => {
      highlight.addEventListener('click', () => handleClick(index));
    });

    return () => {
      // Cleanup event listeners if component unmounts
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
      highlights.forEach((highlight, index) => {
        highlight.removeEventListener('click', () => handleClick(index));
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    showSlider();
  }, [itemActive]);

  function showSlider(){
    const items = document.querySelectorAll('.list .item');
    const highlights = document.querySelectorAll('.highlight .item');

    // remove item active old
    const itemActiveOld = document.querySelector('.list .item.active');
    const thumbnailActiveOld = document.querySelector('.highlight .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    highlights[itemActive].classList.add('active');
  }

  return (
    <div className="container-large containerIsiTiga">
      
      <div className="overlay2"></div>


      <div className="highlight">
        {Wisata.map((wisata, index) => (
          <div className={`item ${index === 0 ? 'active' : ''}`} key={index}>
            <Card 
              name={wisata.name}
              image={wisata.imgURL}
            />
          </div>
        ))}
      </div>

      <div className="list">
        {Wisata.map((wisata, index) => (
            <div className={`item ${index === 1 ? 'active' : ''}`} key={index}>
              <Back
                name={wisata.name}
                image={wisata.imgURL}           
              />
            </div>
          ))}
        </div>

      <div className="arrows">
        <button id="prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button id="next">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      
    </div>
  );
}

export default IsiTiga;

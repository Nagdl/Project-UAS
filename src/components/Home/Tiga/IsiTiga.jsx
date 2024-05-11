import React, { useEffect, useState } from "react";
import "../Tiga/IsiTiga.css";
import Wisata from "../Tiga/Wisata";
import Card from "../Tiga/Card";
import Back from "../Tiga/Background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function IsiTiga() {
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('.list .item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const highlights = document.querySelectorAll('.highlight .item');

    const countItem = items.length;

    // event next click
    next.onclick = function(){
      setItemActive(prevState => {
        let newActive = prevState + 1;
        if(newActive >= countItem){
          newActive = 0;
        }
        return newActive;
      });
    }

    //event prev click
    prev.onclick = function(){
      setItemActive(prevState => {
        let newActive = prevState - 1;
        if(newActive < 0){
          newActive = countItem - 1;
        }
        return newActive;
      });
    }

    // click thumbnail
    highlights.forEach((highlight, index) => {
      highlight.addEventListener('click', () => {
        setItemActive(index);
      })
    });

    return () => {
      // Cleanup event listeners if component unmounts
      next.onclick = null;
      prev.onclick = null;
      highlights.forEach(highlight => {
        highlight.removeEventListener('click');
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
    <div className="containerIsiTiga" id="slideFoto">
      <div className="list">
        {Wisata.map((wisata, index) => (
          <div className={`item ${index === 0 ? 'active' : ''}`} key={index}>
            <Back
              name={wisata.name}
              image={wisata.imgURL}
              desk={wisata.deskripsi}                
            />
          </div>
        ))}
      </div>

      <div class="arrows">
        <button id="prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button id="next">
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      
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
    </div>
  );
}

export default IsiTiga;

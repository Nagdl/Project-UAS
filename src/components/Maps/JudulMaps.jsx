import React from "react";
import "./../Maps/JudulMaps.css";
import hutan from "./../../assets/Hutan.svg"

function JudulMaps() {
  return (
    <div className="containerJudul" id="wisata">
        <div className="dekorWisata">
          <img src={hutan} />
        </div>
        
        <div className="judulDestinasi">
            <p>Wisata</p>
        </div>
    </div>
  );
}

export default JudulMaps;

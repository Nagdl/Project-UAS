import React from "react";
import "./../Maps/JudulMaps.css";
import pohon from "./../../assets/Pohon.svg";

function JudulMaps() {
  return (
    <div className="containerJudul" id="wisata">
      <div className="dekorWisata">
        <img src={pohon} alt="imagejudulMaps"/>
      </div>
        <div className="judulDestinasi">
            <p>Wisata</p>
        </div>
    </div>
  );
}

export default JudulMaps;

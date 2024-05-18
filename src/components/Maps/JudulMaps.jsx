import React from "react";
import "./../Maps/JudulMaps.css";
import hutan from "./../../assets/Hutan.svg";
import pohon from "./../../assets/Pohon.svg";

function JudulMaps() {
  return (
    <div className="containerJudul" id="wisata">
      <div className="dekorWisata">
        <img src={pohon} />
      </div>

        <div className="judulDestinasi">
            <p>Wisata</p>
        </div>
    </div>
  );
}

export default JudulMaps;

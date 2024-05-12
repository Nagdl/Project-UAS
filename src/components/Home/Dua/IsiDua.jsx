import React from "react";
import "./IsiDua.css";
import LampungDesc from "../../../assets/LampungDesc.jpg"
import Pisang from "../../../assets/PulauPisang.jpg";

function IsiDua() {
    return(
        <div className="container-fluid isiDua px-0" id="mainSatu">
              <div className="mottoLampung">
                    <h1 className="petikDua">❝ Satu Bumi, Dua Masyarakat ❞</h1>
                    <p className="penjelasanMotto">Sang Bumi Ruwai Jurai merupakan motto dari provinsi Lampung, yang memiliki makna satu bumi dua tradisi (ruwa dan jurai). 
                    Dua tradisi yang terdapat pada masyarakat asli Lampung yang mengkristal pada Adat yaitu Saibatin dan tradisi budaya Pepadun.</p>
                </div>

            <div className="isiContent">
                <div className="containerFoto">
                    <div className="fotoItem tall"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem big"><img src={Pisang} alt=""/></div>
                    <div className="fotoItem wide"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem tall"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem wide"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                </div>
                <div className="overlayDua"></div>
            </div>
        </div>
    );
}

export default IsiDua;
import React from "react";
import "./IsiDua.css";
import LampungDesc from "../../../assets/LampungDesc.jpg"
import Pisang from "../../../assets/PulauPisang.jpg";
import peta from "./../../../assets/mapIndonesia.png";
import harimau from "./../../../assets/Harimau.jpg";
import Kapal from "./../../../assets/Kapal.jpg";
import gunung from "./../../../assets/gunungKra.jpg";
import pinus from "./../../../assets/pinus ecopark.jpg";
import pahawang from "./../../../assets/pahawang.jpg";
import gigi from "./../../../assets/GigiHiu2.jpg";

function IsiDua() {
    return(
        <div className="bungkusIsiDua">
            <div className="container-fluid isiDua px-0" id="mainSatu">
                <p className="judulIsiDua">LAMPUNG</p>
                <p className="judulTreasure">The Bounty Treasure</p>
                    <div className="motto">
                        <div className="mottoLampung ">
                            <h1 className="petikDua">❝ Satu Bumi, Dua Masyarakat ❞</h1>
                            <p className="penjelasanMotto">Sang Bumi Ruwai Jurai merupakan motto dari provinsi Lampung, <br/> yang memiliki makna satu bumi dua tradisi (ruwa dan jurai). 
                            Dua tradisi yang terdapat pada <br/>masyarakat asli Lampung yang mengkristal pada Adat yaitu Saibatin dan tradisi budaya Pepadun.</p>
                        </div>

                        <div className="treasure">
                            <h1 className="petikDua">❝ The Treasure of Sumatra ❞</h1>
                            <p className="penjelasanMotto">Lampung menggambarkan kekayaan alam dan budaya <br/> yang dimiliki oleh provinsi ini. Keindahan alamnya,
                            termasuk pantai-pantai yang eksotis,<br/> hutan-hutan yang lebat, dan gunung-gunung yang megah. Selain itu, <br/> Lampung juga kaya akan budaya dan tradisi,
                            serta memiliki <br/> keanekaragaman kuliner yang khas. Julukan ini menggambarkan Lampung sebagai harta karun atau <br/> perhiasan yang berharga dari Pulau Sumatra.</p>
                        </div>
                    </div>

                <div className="isiContent">
                    <div className="containerFoto">
                        <div className="fotoItem tall"><img src={harimau} alt=""/></div>
                        <div className="fotoItem big"><img src={gunung} alt=""/></div>
                        <div className="fotoItem wide"><img src={gigi} alt=""/></div>
                        <div className="fotoItem"><img src={Kapal} alt=""/></div>
                        <div className="fotoItem tall"><img src={pinus} alt=""/></div>
                        <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                        <div className="fotoItem wide"><img src={Pisang} alt=""/></div>
                        <div className="fotoItem"><img src={pahawang} alt=""/></div>
                    </div>

                    <div className="overlayIsiDua"></div>
                    <div className="overlayIsiDuaKeDua"></div>
                </div>
            </div>
            <div className="mapIndo">
                    <img src={peta} alt/>
            </div>
        </div>
    );
}

export default IsiDua;
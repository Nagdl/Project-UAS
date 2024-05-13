import React from "react";
import "./IsiDua.css";
import LampungDesc from "../../../assets/LampungDesc.jpg"
import Pisang from "../../../assets/PulauPisang.jpg";
import peta from "./../../../assets/mapIndonesia.png";

function IsiDua() {
    return(
        <div className="container-fluid isiDua px-0" id="mainSatu">
            <p className="judulIsiDua">LAMPUNG</p>
                <div className="motto">
                    <div className="mottoLampung ">
                        <h1 className="petikDua">❝ Satu Bumi, Dua Masyarakat ❞</h1>
                        <p className="penjelasanMotto">Sang Bumi Ruwai Jurai merupakan motto dari provinsi Lampung, <br/> yang memiliki makna satu bumi dua tradisi (ruwa dan jurai). 
                        Dua tradisi yang terdapat pada <br/>masyarakat asli Lampung yang mengkristal pada Adat yaitu Saibatin dan tradisi budaya Pepadun.</p>
                    </div>

                    <div className="treasure">
                        <h1 className="petikDua">❝ The Treasure of Sumatra ❞</h1>
                        <p className="penjelasanMotto">Lampung menggambarkan kekayaan alam dan budaya yang dimiliki oleh provinsi ini. <br/> Lampung terkenal dengan keindahan alamnya, termasuk pantai-pantai yang eksotis, hutan-hutan yang lebat, <br/> 
                        dan gunung-gunung yang megah. Selain itu, Lampung juga kaya akan budaya dan tradisi, <br/> serta memiliki keanekaragaman kuliner yang khas.
                        Julukan ini menggambarkan Lampung sebagai harta karun atau <br/> perhiasan yang berharga dari Pulau Sumatra.</p>
                    </div>
                </div>

            <div className="isiContent">
                <div className="container-large containerFoto">
                    <div className="fotoItem tall"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem big"><img src={Pisang} alt=""/></div>
                    <div className="fotoItem wide"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem tall"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem wide"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                </div>
                <div className="overlayIsiDua"></div>
                <div className="overlayIsiDuaKeDua"></div>
            </div>
        </div>
    );
}

export default IsiDua;
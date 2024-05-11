import React from "react";
import "./IsiDua.css";
import LampungDesc from "../../../assets/LampungDesc.jpg"
import Pisang from "../../../assets/PulauPisang.jpg";

function IsiDua() {
    return(
        <div className="isiDua" id="mainSatu">
            <div className="Judul">
                <p>LAMPUNG's DESCRIPTION</p>
            </div>

            <div className="isiContent">

                <div className="containerFoto">
                    <div className="fotoItem foto-item1"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem foto-item2"><img src={Pisang} alt=""/></div>
                    <div className="fotoItem foto-item3"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem foto-item4"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem foto-item5"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem foto-item6"><img src={LampungDesc} alt=""/></div>
                </div>

                <div className="text">
                    <p>Provinsi Lampung menawarkan keunikan yang luar biasa dengan gabungan keindahan alamnya yang memikat 
                        dan warisan budaya yang kaya. Dikenal sebagai 'Negeri Seribu Bukit', Lampung mempesona dengan perbukitan
                        hijau yang menghampar luas serta pantainya yang menakjubkan. Keberagaman budaya Lampung tercermin dalam tarian, 
                        musik, dan kuliner khasnya yang menggugah selera.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default IsiDua;
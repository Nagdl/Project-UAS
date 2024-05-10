import React from "react";
import "./IsiDua.css";
import LampungDesc from "../../../assets/LampungDesc.jpg"

function IsiDua() {
    return(
        <div className="container IsiDua">
            <div className="Judul">
                <p>LAMPUNG's DESCRIPTION</p>
            </div>

            <div className="isiDua">

                <div className="containerFoto">
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                    <div className="fotoItem"><img src={LampungDesc} alt=""/></div>
                </div>

                <div className="Text">
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
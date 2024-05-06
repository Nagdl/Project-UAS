import React from "react";
import "./IsiDua.css";
import LampungDesc from "../../assets/LampungDesc.jpg"

function IsiDua() {
    return(
        <div className="containerIsiDua">
            <div className="Judul">
                <p>LAMPUNG's DESCRIPTION</p>
            </div>

            <div className="desc2">
                <div className="Lampung">
                    <img src={LampungDesc} />
                </div>
                <div className="Text">
                    <p>Lampung adalah sebuah provinsi di bagian ujung selatan Pulau Sumatra, Indonesia. Ibu kota provinsi ini terletak di Kota Bandar Lampung.[11] Provinsi ini memiliki dua kota, yaitu Kota Bandar Lampung dan Kota Metro, serta 13 kabupaten. Secara geografis, posisi provinsi ini di sebelah barat berbatasan dengan Samudra Hindia, di sebelah timur dengan Laut Jawa, di sebelah utara berbatasan dengan Provinsi Sumatera Selatan dan Provinsi Bengkulu, serta di sebelah selatan berbatasan dengan Selat Sunda.</p>
                </div>
            </div>
        </div>
    );
}

export default IsiDua;
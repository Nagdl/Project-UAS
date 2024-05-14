import Maps from "../Maps/Maps"
import Wisata from '../Wisata';
import "./PageMaps.css"

function PageMaps(){
    return (
        <div className="container-large containerWisata">

            <div className="iniContentGambar">
                {Wisata.map(function (wisata) {
                    return (
                        <Maps
                        key={wisata.id}
                        title={wisata.name}
                        image={wisata.imgURL}
                        lng={wisata.lng}
                        lat={wisata.lat}
                        teks={wisata.deskripsi}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PageMaps;
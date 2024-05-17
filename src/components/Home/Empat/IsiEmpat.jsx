import Wisata from "../../Wisata";
import Card from "./Card";
import "./IsiEmpat.css";

function IsiEmpat() {
    
    return(
        <div className="containerIsiEmpat">
            <div className="Judul">
                Destination
            </div>
            <div className="iniCard">
                {Wisata.map(function (wisata) {
                    return (
                        <Card
                        key={wisata.id}
                        name={wisata.name}
                        image={wisata.imgURL}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default IsiEmpat;
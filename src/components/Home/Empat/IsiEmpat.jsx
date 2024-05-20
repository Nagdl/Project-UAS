import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Wisata from "../../Wisata";
import Card from "./Card";
import "./IsiEmpat.css";

function IsiEmpat() {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="containerIsiEmpat">
            <div className="Judul" data-aos="zoom-in" data-aos-delay="100">
                Destination
            </div>
            <div className="iniCard">
                {Wisata.map((wisata, index) => {
                    const delay = 200 + (index * 100);
                    return (
                        <div 
                            key={wisata.id} 
                            data-aos="fade-up" 
                            data-aos-delay={delay}
                        >
                            <Card
                                name={wisata.name}
                                image={wisata.imgURL}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default IsiEmpat;

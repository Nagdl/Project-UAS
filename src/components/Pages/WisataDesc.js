import JudulMaps from "../Maps/JudulMaps";
import PageMaps from "../Maps/PageMaps";
import DYoutube from "../Youtube/DisplayYoutube";
import Navbar from "../Navbar/Navbar";
import "./../Pages/WisataDesc.css";
import Footer from "../Footer/Footer";

function WisataDesc(){
    return (
        <div className="container-large containerWisata">
            <Navbar />
            <div className="containerIsiWisata">
                {/* <div className="isiWisata">
                    <isiWisata />
                </div> */}

                <JudulMaps />
                {/* 
                <div className="fotoYoutube">
                    <DYoutube />
                </div> */}

                <div className="isiMainWisata">
                    <PageMaps />    
                </div>
            </div>
            <Footer /> 
        </div> 
    );
}

export default WisataDesc;
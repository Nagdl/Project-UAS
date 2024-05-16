import JudulMaps from "../Maps/JudulMaps";
import PageMaps from "../Maps/PageMaps";
import DYoutube from "../Youtube/DisplayYoutube";
import Navbar from "../Navbar/Navbar";
import Weather from "../Weather/Weather";
import "./../Pages/WisataDesc.css";
import Footer from "../Footer/Footer";

function WisataDesc(){
    return (
        <div className="container-large containerWisata">
            <div className="containerIsiWisata">
                <JudulMaps />
                <DYoutube />
                <Weather />
                <PageMaps />
            </div>
            <Footer /> 
        </div> 
    );
}

export default WisataDesc;
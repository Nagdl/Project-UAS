import JudulMaps from "../Maps/JudulMaps";
import PageMaps from "../Maps/PageMaps";
import DYoutube from "../Youtube/DisplayYoutube";
import Navbar from "../Navbar/Navbar";

function WisataDesc(){
    return (
        <div className="container-fluid">
            <Navbar/>
            <JudulMaps />
            <DYoutube />
            <PageMaps />
        </div>
    );
}

export default WisataDesc;
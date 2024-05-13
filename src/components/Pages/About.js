import Navbar from "../../components/Navbar/Navbar";
import About from "../AboutUs/AboutUs"
import DYoutube from "../Youtube/DisplayYoutube";

function AboutUs(){
    return (
        <div className="container-large">
            {/* <div className="Nav">
              <Navbar/>  
            </div> */}
            <div className="IsiContact">
              <div className="IniAboutUs">
                <DYoutube />
              </div>
            </div>
        </div>
        );
}

export default AboutUs;
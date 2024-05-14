import Navbar from "../../components/Navbar/Navbar";
import About from "../AboutUs/AboutUs"
import Footer from "../Footer/Footer";

function AboutUs(){
    return (
        <div className="container-large">
          <div className="NavAbout">
            <Navbar/> 
          </div> 
            <div className="IsiContact">
              <div className="IniAboutUs">
                <About />
              </div>
            </div>
            <Footer/>
        </div>
        );
}

export default AboutUs;
import Navbar from "../Navbar/Navbar";
import Weather from "../Weather/Weather";

function About(){
    return (
        <div className="container-large">
            <div>
              <Navbar/>  
            </div>
            <div>
              <Weather />
            </div>
        </div>
        );
}

export default About;
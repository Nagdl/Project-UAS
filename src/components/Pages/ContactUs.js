import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Contact/Modal";

function ContactUs(){
    return (
        <div className="container-large">
            <div className="Nav">
              <Navbar/>  
            </div>
            <div className="IsiContact">
              <div className="IniModal">
                <Modal />
              </div>
            </div>
        </div>
        );
}

export default ContactUs;
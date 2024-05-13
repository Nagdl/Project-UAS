import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Contact/Modal";
import Footer from "../../components/Footer/Footer";

function ContactUs(){
    return (
        <div className="container-large">
            <div className="Nav">
              <Navbar/>  
            </div>
            <div className="IsiContact">
              <div className="IniModal">
                <Modal />
                <Footer />
              </div>
            </div>
        </div>
        );
}

export default ContactUs;
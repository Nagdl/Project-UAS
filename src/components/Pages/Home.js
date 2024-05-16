import Navbar from "../../components/Navbar/Navbar";
import IsiSatu from "../../components/Home/Satu/isiSatu";
import IsiDua from "../../components/Home/Dua/IsiDua";
import IsiTiga from "../../components/Home/Tiga/IsiTiga";
import Footer from "../../components/Footer/Footer";
import Judul from "../Home/Tiga/JudulTiga";
import React from 'react';
import Weather from "../Weather/Weather";

function Home() {
    return (
    <div className="container-large">
        <Navbar/>
        <IsiSatu />
        <IsiDua />
        <Judul />
        <IsiTiga />
        {/* <Weather /> */}
        <Footer />
    </div>
    );
}

export default Home;
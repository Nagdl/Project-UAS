import Navbar from "../../components/Navbar/Navbar";
import IsiSatu from "../../components/Home/Satu/isiSatu";
import IsiDua from "../../components/Home/Dua/IsiDua";
import IsiTiga from "../../components/Home/Tiga/IsiTiga";
import React from 'react';

function Home() {
    return (
    <div className="container-large">
        <Navbar/>  
        <IsiSatu />
        <IsiDua />
        <IsiTiga />
    </div>
    );
}

export default Home;
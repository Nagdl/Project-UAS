import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Maps.css';


function Map(props2) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lampung = { lng: props2.lng, lat: props2.lat }; // Ubah koordinat ke Lampung
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'nLc9j7VUuPe3AxvVw6Cm'; // Ganti dengan kunci API MapTiler Anda

  useEffect(() => {
    if (map.current) return; // Menghentikan inisialisasi peta lebih dari sekali

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [lampung.lng, lampung.lat], // Mengatur pusat peta ke Lampung
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([props2.lng,props2.lat])
        .addTo(map.current);

  }, [lampung.lng, lampung.lat, zoom]);

  return (
    <div className="BungkusContent">     
      <div className="Top">
        <h1>{props2.title}</h1>
      </div>

      <div className="Middle d-flex justify-content-around">
        <div className="iniGambar">
          <img src={props2.image} />
        </div>
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      </div>

      <div className="Bottom">
        <p>{props2.teks}</p>
      </div>

    </div>
  );
}

export default Map;
import React, { useState, useEffect } from "react";

const api = {
  key: "eabe563ec7be2658007fdd5ea3c843e6",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // Definisikan fungsi pencarian
    const searchWeather = async () => {
      try {
        const response = await fetch(`${api.base}weather?q=Lampung&units=metric&APPID=${api.key}`);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Panggil fungsi pencarian saat komponen dimuat
    searchWeather();
  }, []); // Gunakan array kosong agar efek ini hanya terpanggil sekali saat komponen dimuat

  return (
    <div className="iniWeather">
      <header>
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location */}
            <p>{weather.name}</p>
            {/* Temperature Celsius */}
            <p>{weather.main.temp}°C</p>
            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default Weather;

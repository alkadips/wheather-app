import Image from "next/image";
import React from "react";
export default function TodaysWeather({ city,main, sys,currentWeather }) {
  return (
    <div className="today">
      <div className="today__inner">
        <div className="today__left-content">
          <h1>
            {city} :({sys.country})
          </h1>

          <h2>
            <span>{main.temp_max}&deg;C</span>
            <span>{main.temp_min}&deg;C</span>
          </h2>

         
        </div>

        <div className="today__right-content">
          <div className="today__icon-wrapper">
            <div>
              <Image
                src={`https://openweathermap.org/img/wn/${currentWeather[0].icon}@2x.png`}
                alt="Weather Icon"
                layout="fill"
              />
            </div>
          </div>

          <h3>{currentWeather[0]?.description}</h3>
        </div>
      </div>
    </div>
  );
}

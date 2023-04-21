import React from "react";
import Image from "next/image";

export default function WeeklyWeather({ currentWeather,main }) {
  return (
    <div className="weekly">
      <h3 className="weekly__title">
        Weekly <span>Weather</span>
      </h3>
            <div className="weekly__card">
              <div className="weekly__inner">
                <div className="weekly__left-content">
                  <div>
                    <h3>
                      {/* {moment.unix(dt)?.tz(timezone)?.format("dddd")} */}
                    </h3>

                    <h4>
                      <span>{main?.temp_max?.toFixed(0)}&deg;C</span>
                      <span>{main?.temp_min?.toFixed(0)}&deg;C</span>
                    </h4>
                  </div>

                
                </div>

                <div className="weekly__right-content">
                  <div className="weekly__icon-wrapper">
                    <div>
                      <Image
                        src={`https://openweathermap.org/img/wn/${currentWeather[0]?.icon}@2x.png`}
                        alt="Weather Icon"
                        layout="fill"
                      />
                    </div>
                  </div>

                  <h5>{currentWeather[0]?.description}</h5>
                </div>
              </div>
            </div>
    </div>
  );
}

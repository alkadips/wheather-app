import React from "react";
import cities from "../../lib/city.list.json";
import TodaysWeather from "../../components/TodaysWeather";
import WeeklyWeather from "../../components/WeeklyWeather";
import Link from "next/link";
import Head from "next/head";
import SearchBox from "../../components/SearchBox";
const API_KEY = "297f90ff3693a3accc478b4bef753b34";
import axios from "axios";
export async function getServerSideProps(context) {
  const city = getCityId(context.params.city);
  if (!city) {
    return {
      notFound: true,
    };
  }
try {
  const {data:responseWheather} = await axios
  .get(
  `https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=minutely&units=metric` +
    "q=" +
    "&appid=" +
    API_KEY +
    "&units=imperial"
);
  console.log("data>>>>>>>>>>>>> new",responseWheather)
    const {name, timezone, main,clouds, sys, weather} = responseWheather
  return {
    props: {
      city: name,
      timezone,
      main,
      currentWeather: weather,
      clouds,
      sys,
      
    }, 
  };
} catch (error) {
  console.log("Error while fetching weather",error);
}

}

const getCityId = (param) => {
  const cityParam = param.trim();
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length - 1];

  if (!id) {
    return null;
  }

  const city = cities.find((city) => city.id.toString() == id);

  if (city) {
    return city;
  } else {
    return null;
  }
};
export default function City({city,
  timezone,
  currentWeather,
  weeklyWeather,
  clouds,
  main,
  sys,
dt}) {
  console.log("Props:::",{city,
    timezone,
    currentWeather,
    weeklyWeather,
    clouds,
    sys,dt});
  return (
    <>
      <Head>
        <title>{city.name} Weather - Next Weather App</title>
      </Head>

      <div className="page-wrapper">
        <div className="container">
          <Link href="/">
            <a className="back-link">&larr; Home</a>
          </Link>
          <SearchBox placeholder="Search for another location..." />
          <TodaysWeather
            city={city}
            sys={sys}
            main={main}
            currentWeather={currentWeather}
            dt={dt}
           
          />
          <WeeklyWeather  city={city}
            sys={sys}
            main={main}
            currentWeather={currentWeather}
            dt={dt}
            timezone={timezone}/>
        </div>
      </div>
    </>
  );
}

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import SearchBox from '../SearchBox';
import { getDispatchWheatherData } from "../../state/actions/wheathercurrencyAction";
import { getDispatchCurrency} from "../../state/actions/wheathercurrencyAction"
const API_KEY = "297f90ff3693a3accc478b4bef753b34";
const BasicDetails = () => {
  const [cityInput, setCityInput] = useState("");
  const [base, setBase] = useState("USD");
  const [chnageMenu, setchnageMenu] = useState("wheather");
  const [ratesList, setRatesList] = useState([]);
  const [wheatherData, setwheatherData] = useState({});
  const dispatch = useDispatch();
  // const getWheatherdata = async () => {
  //   await axios
  //     .get(
  //       "https://api.openweathermap.org/data/2.5/weather?" +
  //         "q=" +
  //         cityInput +
  //         "&appid=" +
  //         API_KEY +
  //         "&units=imperial"
  //     )
  //     .then((res) => {
  //       dispatch(getDispatchWheatherData(res.data));
  //       console.log("dispatch data", res.data);
  //       setwheatherData(res.data);
  //     });
  // };
  useEffect(() => {
    getRates("INR");
  }, []);

  const getRates = async (base) => {
    await axios
    .get(`https://open.er-api.com/v6/latest/${base}`)
    .then((res) => {
      dispatch(getDispatchCurrency(res.data));
      console.log("dispatch data currency", res.data);
      const { rates } = res.data;
    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
    });

  };

  const changeMenu = (event) => {
    console.log(event.target.value);
    setchnageMenu(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Wheather</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center p-2 justify-between shadow-md">
            <Link href="/">
              <a>Wheather/Currency Demo</a>
            </Link>
            <SearchBox placeholder="Search for a city..." />

            <select onChange={changeMenu} value={chnageMenu}>
            <option value="All">All</option>
              <option value="wheather">wheather</option>
              <option value="currency">Currency</option>
            </select>
            <div>
            
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 flex-1 overflow-y-auto">
        {/* {chnageMenu ==="wheather" && <div className="flex">
            <div>
              <input
                className="p-2"
                style={{ border: "1px solid" }}
                placeholder="Enter City"
                id="city"
                name="city"
                onChange={(e) => {
                  setCityInput(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <button
                className="ml-5 bg-blue-600 p-2 text-white text-sm"
                onClick={getWheatherdata}
              >
                get wheather data
              </button>
            </div>
            <div className="flex ml-5" >
              <div className="text-blue-600">City Name: {wheatherData?.name}</div>
              <div className="ml-5 text-pink-600">Country :{wheatherData?.sys?.country}</div>
              </div>
          </div>
              } */}
        {chnageMenu ==="currency" && <div>
          <select
            className="custom-select"
            value={base}
            onChange={(e) => {
              const value = e.target.value;
              setBase(value);
              getRates(value);
            }}
          >
            {ratesList.map((d) => (
              <option value={d.symbol} key={d.symbol}>
                {d.symbol}
              </option>
            ))}
          </select>
          <ul className="list-group">
            {ratesList.map((d) => (
              <li className="list-group-item" key={d.symbol}>
                {d.symbol} - {d.rate}
              </li>
            ))}
          </ul>
          </div>
         }
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Footer
        </footer>
      </div>
    </>
  );
};
export default BasicDetails;

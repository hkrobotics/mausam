import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Weather from "./Weather/Weather";

function Home() {
  const [dummyData, setdummyData] = useState({
    coord: {
      lon: 75.3333,
      lat: 19.8833,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    base: "stations",
    main: {
      temp: 22.65,
      feels_like: 23.43,
      temp_min: 22.65,
      temp_max: 22.65,
      pressure: 1002,
      humidity: 94,
      sea_level: 1002,
      grnd_level: 939,
    },
    visibility: 10000,
    wind: {
      speed: 1.9,
      deg: 225,
      gust: 4.36,
    },
    rain: {
      "1h": 0.12,
    },
    clouds: {
      all: 100,
    },
    dt: 1663026123,
    sys: {
      country: "IN",
      sunrise: 1663029942,
      sunset: 1663074244,
    },
    timezone: 19800,
    id: 1278149,
    name: "Aurangabad",
    cod: 200,
  });

  let { location } = useParams();

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();

  const [city, setCity] = useState("mumbai");

  const OWM_API_URL = process.env.REACT_APP_MAUSAM_API_URL;
  const OWM_API_KEY = process.env.REACT_APP_MAUSAM_API_KEY;

  //   useEffect(() => {

  //     const getCoords = ()=>{

  //     }

  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       //   console.log(data.length);
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);

  //       // axios.get(`${process.env.MAUSAM_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.MAUSAM_API_KEY}&units=metric`)
  //       // axios
  //       //   .all([
  //       //     axios.get("https://api.github.com/users/hkrobotics"),
  //       //     axios.get(`https://api.github.com/users/pyansh`),
  //       //   ])
  //       //   .then(
  //       //     axios.spread((user1, user2) => {
  //       //       console.log(user1.data.name);
  //       //       console.log(user2.data.name);
  //       //     })
  //       //   );

  //       console.log(++i);

  //       if (long !== undefined && lat !== undefined) {
  //         axios
  //           .get(
  //             //   `${process.env.MAUSAM_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.MAUSAM_API_KEY}`
  //             `https://api.openweathermap.org/data/2.5/weather?lat=19.84993&lon=75.258278&units=metric&appid=bb8af0f519f75c50001ca82778388b33`
  //           )
  //           .then((res) => {
  //             console.log(res.data);
  //             setData(res.data);
  //           });
  //       }
  //     });

  //     console.log("Latitude is:", lat);
  //     console.log("Longitude is:", long);
  //   }, [long, lat]);

  useEffect(() => {
    const getCoords = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        //   console.log(data.length);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await axios
        .get(
          //   `${OWM_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${MAUSAM_API_KEY}`
          // `https://api.openweathermap.org/data/2.5/weather?lat=19.84993&lon=75.258278&units=metric&appid=bb8af0f519f75c50001ca82778388b33`
          `${OWM_API_URL}/weather?q=${city}&units=metric&appid=${OWM_API_KEY}`
        )
        .then((res) => {
          console.log(res.data);
          console.log(city);
          setData(res.data);
        });
    };

    getCoords();
    // }, [long, lat]);
  }, [city]);

  console.log(data);
  return (
    <>
      {/* <h1>{location}</h1> */}
      {data !== undefined ? (
        <Weather weatherData={data} city={city} setCity={setCity} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;

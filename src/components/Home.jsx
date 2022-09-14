import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Weather from "./Weather/Weather";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

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

  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState("");

  const OWM_API_URL = process.env.REACT_APP_MAUSAM_API_URL;
  const OWM_API_KEY = process.env.REACT_APP_MAUSAM_API_KEY;

  useEffect(() => {
    if (location) {
      setCity(location);
    }
  }, [location]);

  useEffect(() => {
    if (city !== undefined && city !== "" && city !== null) {
      setLoading(true);

      axios
        .get(
          `${OWM_API_URL}/weather?q=${city}&units=metric&appid=${OWM_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        })
        .then(() => {
          // console.log("data fetched");
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);

          dummyData.name = "City Not Found";
          dummyData.main.temp = "00";
          dummyData.weather[0].description = "N/A";
          dummyData.weather[0].icon = "01d";
          dummyData.main.feels_like = "00";
          dummyData.main.temp_min = "00";
          dummyData.main.temp_max = "00";
          dummyData.sys.country = "Earth";
          dummyData.main.humidity = "00";
          dummyData.main.pressure = "00";

          dummyData.dt = 948652200;

          setData(dummyData);
        });
    }
  }, [city]);

  useEffect(() => {
    const getCoords = async () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          console.log("Latitude is:", lat);
          console.log("Longitude is:", long);
        },
        (error) => {
          // console.log(error);
          if (error.code === 1) {
            console.warn(
              "Hey! 👋 You've denied to share your location 🗺️\n I am not Facebook and ain't not going to track you! 🕵️‍♂️\n Fun Fact : You can't use this app efficiently without sharing your location 🤷‍♂️ \n So please allow me to access your location 🙏 \n Thank you! 😊"
            );

            console.log(
              "To enable location sharing, please follow these steps: \n 1. You see that little lock icon on the left side of the URL bar? Click on it. \n 2. Select 'Always allow' from the dropdown menu. \n 3. Refresh the page. \n 4. You're done! 😊"
            );

            console.log(
              "If this app is still not working properly, then don't blame me! 😂\nBlame him https://hkrobotics.github.io"
            );
          }
          setCity("Mumbai");
        }
      );
    };

    if (long !== undefined && lat !== undefined) {
      setLoading(true);

      axios
        .get(
          `${OWM_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${OWM_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data);
          // console.log("fetched by coords");
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);

          dummyData.name = "City Not Found";
          dummyData.main.temp = "00";
          dummyData.weather[0].description = "N/A";
          dummyData.weather[0].icon = "01d";
          dummyData.main.feels_like = "00";
          dummyData.main.temp_min = "00";
          dummyData.main.temp_max = "00";
          dummyData.sys.country = "Earth";
          dummyData.main.humidity = "00";
          dummyData.main.pressure = "00";

          dummyData.dt = 948652200;

          setData(dummyData);
        });
    }

    getCoords();
  }, [lat, long]);

  return (
    <>
      {/* <h1>{location}</h1> */}
      {data !== undefined ? (
        <Weather
          weatherData={data}
          city={city}
          setCity={setCity}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;

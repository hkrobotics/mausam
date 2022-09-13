import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";

import "./Weather.css";

import WeatherBox from "../WeatherBox";

function Weather({ weatherData, city, setCity }) {
  return (
    <>
      <SearchBar city={city} setCity={setCity} />
      <WeatherBox weatherData={weatherData} />
    </>
  );
}

export default Weather;

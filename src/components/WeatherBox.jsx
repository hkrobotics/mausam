import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import clearSVG from "../assets/svg/sunny.svg";
import clearNSVG from "../assets/svg/moon.svg";

import fewCloudsSVG from "../assets/svg/pcloudy.svg";
import fewCloudsNSVG from "../assets/svg/pcloudyN.svg";

import scatteredCloudsSVG from "../assets/svg/mcloudy.svg";
import scatteredCloudsNSVG from "../assets/svg/mcloudyN.svg";

import cloudSVG from "../assets/svg/cloud.svg";

import showerRainSVG from "../assets/svg/Lrain.svg";
import showerRainNSVG from "../assets/svg/LrainN.svg";

import rainSVG from "../assets/svg/hail.svg";
import rainNSVG from "../assets/svg/hailN.svg";

import thunderstormSVG from "../assets/svg/Tstorm.svg";
import thunderstormNSVG from "../assets/svg/TstormN.svg";

import snowSVG from "../assets/svg/snow.svg";

import foggSVG from "../assets/svg/foggy.svg";
import foggNSVG from "../assets/svg/foggyN.svg";

const getWeatherIcon = (weatherData) => {
  const weatherIconsDay = {
    "01d": clearSVG,
    "02d": fewCloudsSVG,
    "03d": scatteredCloudsSVG,
    "04d": cloudSVG,
    "09d": showerRainSVG,
    "10d": rainSVG,
    "11d": thunderstormSVG,
    "13d": snowSVG,
    "50d": foggSVG,

    "01n": clearNSVG,
    "02n": fewCloudsNSVG,
    "03n": scatteredCloudsNSVG,
    "04n": cloudSVG,
    "09n": showerRainNSVG,
    "10n": rainNSVG,
    "11n": thunderstormNSVG,
    "13n": snowSVG,
    "50n": foggNSVG,
  };

  // const weatherIconsNight = {
  //   "01n": clearNSVG,
  //   "02n": fewCloudsNSVG,
  //   "03n": scatteredCloudsNSVG,
  //   "04n": cloudSVG,
  //   "09n": showerRainNSVG,
  //   "10n": rainNSVG,
  //   "11n": thunderstormNSVG,
  //   "13n": snowSVG,
  //   "50n": foggNSVG,
  // };

  const icon = weatherData.weather[0].icon;
  // no need of using this logic as we get day/night icon from api
  // const date = new Date();
  // const hours = date.getHours();
  // if (hours > 6 && hours < 18) {
  //   return weatherIconsDay[icon];
  // } else {
  //   return weatherIconsNight[icon];
  // }
  return weatherIconsDay[icon];
};

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto 2rem;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: reverse;
  max-width: 800px;

  justify-content: space-between;

  // height: 12rem;
`;

const MainTempContainer = styled.div`
  display: flex;
`;

const MainTempText = styled.h2`
  display: flex;
  font-size: 12rem;
  line-height: 1;
  font-weight: 600;
`;
const MainTempSuperscript = styled.div`
  font-size: 4rem;
  // line-height: 0;
  font-weight: 600;
`;

const WeatherSVGContainer = styled.div`
  // width: 100px;
  // height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WeatherSVG = styled.img`
  width: 12rem;
  height: 12rem;
`;

const MainTempLeftContainer = styled.div``;

const MainTempBottomText = styled.p`
  font-size: 1.5rem;
`;

const MainTemTopText = styled.p`
  font-size: 1.5rem;
`;

const MainTempDate = styled.p`
  font-size: 0.8rem;
`;

const WeatherLocation = styled.div`
  font-size: 1.5rem;
`;

const WeatherDescription = styled.div`
  font-size: 1.5rem;
`;

// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

function WeatherBox({ weatherData }) {
  return (
    <>
      <BoxContainer>
        <MainTempContainer>
          <MainTempLeftContainer>
            <MainTempDate>13 September, 7:40 am</MainTempDate>
            <MainTemTopText>
              Day{" "}
              {Math.ceil(
                Math.max(weatherData.main.feels_like, weatherData.main.temp_max)
              ) + "°"}
              ⬆ ∘ Night{" "}
              {Math.floor(
                Math.min(weatherData.main.temp_min, weatherData.main.temp)
              ) + "°"}{" "}
              ⬇
            </MainTemTopText>
            <MainTempText>
              {weatherData
                ? Math.round(weatherData.main.temp) /*"°ᶜ"*/ + "°ᶜ"
                : "69°ᶜ"}
            </MainTempText>
            <MainTempBottomText>
              Feels like {Math.round(weatherData.main.feels_like) + "°"}
            </MainTempBottomText>
          </MainTempLeftContainer>
        </MainTempContainer>
        <WeatherSVGContainer>
          <WeatherSVG src={getWeatherIcon(weatherData)} alt="sunny svg" />
          {/* <WeatherSVG src={foggNSVG} alt="sunny svg" /> */}
          <WeatherDescription style={{ textTransform: "capitalize" }}>
            {weatherData.weather[0].description}
          </WeatherDescription>
          <WeatherLocation>
            {weatherData.name + ", " + weatherData.sys.country}
          </WeatherLocation>
        </WeatherSVGContainer>
      </BoxContainer>
    </>
  );
}

export default WeatherBox;

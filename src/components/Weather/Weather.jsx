import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Weather.css';

import WeatherBox from '../WeatherBox';

import WeatherSmallCards from '../WeatherSmallCards';

// <MuiThemeProvider theme={theme}>
//   <LinearProgress color="secondary"/>
// </MuiThemeProvider>

const myLoaderTheme = createTheme({
  palette: {
    primary: {
      main: '#0b6300',
      light: '#757ce8',
      dark: '#002884',
    },
    secondary: {
      main: '#042100',
      light: '#ff7961',
      dark: '#ba000d',
    },
  },
});

function Weather({ weatherData, city, setCity, loading, oneCallData }) {
  return (
    <>
      <SearchBar city={city} setCity={setCity} />
      <ThemeProvider theme={myLoaderTheme}>
        <Box sx={{ width: '100%' }}>
          <Fade
            in={loading}
            // style={{
            //   transitionDelay: loading ? "800ms" : "0ms",
            // }}
            // unmountOnExit
          >
            <LinearProgress

            // sx={{ background: "#000", color: "#fff" }}
            />
          </Fade>
        </Box>
      </ThemeProvider>

      <WeatherBox weatherData={weatherData} />

      {/* {oneCallData ? <WeatherSmallCards oneCallData={oneCallData} /> : null} */}
    </>
  );
}

export default Weather;

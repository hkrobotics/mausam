import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import LocationOffTwoToneIcon from '@mui/icons-material/LocationOffTwoTone';
import styled from 'styled-components';

import CloudIcon from '@mui/icons-material/CloudTwoTone';
import SunnyIcon from '@mui/icons-material/WbSunnyTwoTone';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useEffect } from 'react';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin: 2rem 2rem 2rem;
`;

function SearchBar({ city, setCity }) {
  const [myLocation, setMyLocation] = useState(false);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("You searched for " + search);
    setCity(search);
  };

  //toggle my location
  const handleLocationToggle = () => setMyLocation((prev) => !prev);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const myTheme = {
    searchBarBG: prefersDarkMode ? '#d9e7cb' : '#fff',
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <SearchBarContainer>
      <ThemeProvider theme={theme}>
        <Paper
          // elevation={4}
          component="form"
          sx={{
            // backgroundColor: "#d9e7cb",
            backgroundColor: myTheme.searchBarBG,
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 800,
          }}
        >
          <IconButton
            sx={{ p: '10px', color: 'orange' }}
            aria-label="directions"
            onClick={handleLocationToggle}
          >
            {/* <CloudIcon /> */}
            <SunnyIcon />
          </IconButton>

          <InputBase
            sx={{ ml: 1, flex: 1, color: '#205107' }}
            placeholder="Search your location"
            inputProps={{ 'aria-label': 'search your location' }}
            onChange={handleSearch}
            autoFocus={true}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && search !== '') {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            autoComplete="off"
            value={search}
          />
          <IconButton
            // color="success"
            type="button"
            sx={{ p: '10px', color: '#205107' }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton
            // color={myLocation === false ? "error" : "primary"}
            sx={{
              p: "10px",
              color: myLocation === false ? "#ef5350" : "#205107",
            }}
            aria-label="location"
            onClick={handleLocationToggle}
          >
            {myLocation === false ? (
              <LocationOffTwoToneIcon />
            ) : (
              <LocationOnTwoToneIcon />
            )}
          </IconButton> */}
        </Paper>
      </ThemeProvider>
    </SearchBarContainer>
  );
}

export default SearchBar;

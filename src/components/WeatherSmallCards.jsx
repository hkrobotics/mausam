import styled from "@emotion/styled";
import React from "react";

import { device } from "../helper/breakpoints";

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto 2rem;
  align-items: center;
  // flex-wrap: wrap;
  // flex-direction: reverse;
  max-width: 800px;

  justify-content: space-around;

  // height: 12rem;
`;

const BoxContainerChild = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  width: 100%;
  justify-content: space-between;

  @media (max-width: 864px) {
    margin: 0 2rem 0;
  }

  //here i am using the Desktop first approach hence using max-width media query
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

const CardContainer = styled.div`
  background-color: #dae8cd;
  padding: 1rem;
  border-radius: 1.5rem;

  color: #042100;
`;

function WeatherSmallCards(oneCallData) {
  return (
    <BoxContainer>
      <CardContainer>WeatherSmallCards</CardContainer>
    </BoxContainer>
  );
}

export default WeatherSmallCards;

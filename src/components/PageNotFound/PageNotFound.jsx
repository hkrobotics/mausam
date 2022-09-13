import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyDiv = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fira+Mono:400");
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #131313;
  color: #fff;
  font-size: 96px;
  font-family: monospace;
  // letter-spacing: -7px;
`;

function PageNotFound() {
  return (
    <MyDiv title="404">
      <Link style={{ textDecoration: "none" }} to="/">
        🔍404
      </Link>
    </MyDiv>
  );
}

export default PageNotFound;

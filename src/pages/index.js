import React from "react";
import { Helmet } from "react-helmet";
import { Reset } from "styled-reset";

import HomeScreen from "../screens/Home";

const Home = props => (
  <>
    <Reset />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Begegnungs-Werkstatt</title>
    </Helmet>
    <HomeScreen/>
  </>
);

export default Home;


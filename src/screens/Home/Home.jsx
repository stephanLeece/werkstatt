import React from "react";

import {
  Wrap,
  Title,
  Divider,
  MainSection,
  MainText,
  ContactSection,
  ContactText,
} from './Home.styled';

const Home = () => (
  <Wrap>
    <Title>Begegnungs-Werkstatt</Title>
    <Divider />
    <MainSection><MainText>Lorem Ipsum</MainText></MainSection>
    <ContactSection><ContactText>Lorem Ipsum</ContactText></ContactSection>
  </Wrap>
);

export default Home;

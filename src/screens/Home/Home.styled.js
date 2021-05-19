import styled from "styled-components";

import { StyledH3, StyledP } from 'src/common/Typography/Typography.styled';

import HeaderImage from './Assets/bwTeamBackground.jpg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const HeroImage = styled.img`
  max-width: 1024px;
  width: 100%;
  height: auto;
`;

const MainSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  padding: 12px;
  background: #d8d8d8;
`;

const MainHeaderText = styled(StyledH3)`
  color: #444444;
  margin: 24px 0;
  text-align: center;
`;

const MainBodyText = styled(StyledP)`
  color: #444444;
`;

const ContactSectionOuter = styled.section`
  background-color: #333333;
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContactSectionInner = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 12px 16px;
  box-sizing: border-box;
`;

const ContactHeaderText = styled(StyledH3)`
  color: #ffffff;
  margin-bottom: 24px;
`;

const ContactBodyText = styled(StyledP)`
  color: #ffffff;
  margin-bottom: 8px;
`;

const TeamSection = styled.section`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${HeaderImage});
  padding: 48px;
  box-sizing: border-box;
`;

const TeamImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 12px;
`;

const TeamImageCredit = styled(StyledP)`
  color: #222222;
  align-self: flex-end;
`;

export {
  Wrap,
  HeroImage,
  MainSection,
  MainHeaderText,
  MainBodyText,
  ContactSectionOuter,
  ContactSectionInner,
  ContactHeaderText,
  ContactBodyText,
  TeamSection,
  TeamImage,
  TeamImageCredit,
}





import styled from "styled-components";

import { StyledH1, StyledH3, StyledP } from 'src/common/Typography/Typography.styled';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const Title = styled(StyledH1)`
  margin: 24px 8px;
`;

const Divider = styled.div`
  width: 100%;
  height: 24px;
  background-color: #222222;
  margin-bottom: 24px;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  padding: 12px;
`;

const MainHeaderText = styled(StyledH3)`
  color: #444444;
  margin-bottom: 24px;
`;

const MainBodyText = styled(StyledP)`
  color: #444444;
`;

const ContactSectionOuter = styled.section`
  background-color: #333333;
  margin-top: auto;
  padding: 24px 12px 16px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const ContactSectionInner = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContactHeaderText = styled(StyledH3)`
  color: #ffffff;
  margin-bottom: 24px;
`;

const ContactBodyText = styled(StyledP)`
  color: #ffffff;
  margin-bottom: 8px;
`;

export {
  Wrap,
  Title,
  Divider,
  MainSection,
  MainHeaderText,
  MainBodyText,
  ContactSectionOuter,
  ContactSectionInner,
  ContactHeaderText,
  ContactBodyText
}





import styled from "styled-components";

import { StyledH1, StyledH3, StyledP } from 'src/common/Typography/Typography.styled';
import Phone from 'src/common/Icons/Phone';
import Mail from 'src/common/Icons/Mail';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const Title = styled(StyledH1)`
  margin-bottom: 24px;
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
  column-count: 2;
  column-gap: 24px;
`;

const ContactSectionOuter = styled.section`
  background-color: #333333;
  margin-top: auto;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const ContactSectionInner = styled.div`
  background-color: #333333;
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const ContactCardLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ContactText = styled(StyledP)`
  color: #ffffff;
`;

const MailIcon = styled(Mail)`
  margin-right: 8px;
`;

const PhoneIcon = styled(Phone)`
  margin-right: 8px;
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
  ContactCard,
  ContactCardLine,
  ContactText,
  MailIcon,
  PhoneIcon,
}





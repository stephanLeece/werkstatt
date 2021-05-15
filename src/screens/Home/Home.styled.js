import styled from "styled-components";

import { StyledH1, StyledP } from 'src/common/Typography/Typography.styled';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(StyledH1)`
  margin-bottom: 24px;
`;

const Divider = styled.div`
  width: 100vw;
  height: 24px;
  background-color: #222222;
`;

const MainSection = styled.section`
  width: 100vw;
  padding: 24px 0;
`;

const MainText = styled(StyledP)`
  color: #444444;
`;

const ContactSection = styled.section`
  background-color: #333333;
  width: 100vw;
  padding: 24px 0;
`;

const ContactText = styled(StyledP)`
  color: #ffffff;
`;

export {
  Wrap,
  Title,
  Divider,
  MainSection,
  MainText,
  ContactSection,
  ContactText,
}





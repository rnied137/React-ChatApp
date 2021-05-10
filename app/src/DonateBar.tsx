import React from "react";

import styled from "styled-components";
import NGOLogo from "./SVG/NGOO.svg";
import CallLogo from "./SVG/Call.svg";
import MailLogo from "./SVG/Mail.svg";

const Wrapper = styled.div`
  margin: 30px 0 30px 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Bold = styled.span`
  font-weight: bold;
display: block;
align-items: flex-start;

`;

const InfoText = styled.span`
  color: #bababa;
  display: block;

`;

const TextContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-around;
margin-left: 10px;

`;

const LogoCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #F8F8F8;
  border-radius: 50px;
`;

const Logo = styled.img`
height: 27px;
width: 31px;
  display: inline-block;
`;

const MainLogo = styled.img`

margin-right: 10%;



`;

export const DonateBar = () => {
  return (
    <Wrapper>
      <Container>
              <MainLogo src={NGOLogo} alt="ngoo" />

<div>

        <LogoCircle>
          <Logo src={MailLogo} alt="ngoo" />
              </LogoCircle>
              <TextContainer>
          <Bold>Mail:</Bold>
          <InfoText>info@ngoochairty.com</InfoText>
          </TextContainer>
          </div>
          <div>

  
        <LogoCircle>
          <Logo src={CallLogo} alt="ngoo" />
              </LogoCircle>
              <TextContainer>

   
        <Bold>Call us:</Bold>
                  <InfoText>+62 7100 1234</InfoText>
                  </TextContainer>
                  </div>
      </Container>
    </Wrapper>
  );
};

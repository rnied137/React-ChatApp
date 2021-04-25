import React from 'react'

import styled from 'styled-components';
import { Button } from './SmallComponents/Button';
import NGOLogo from './SVG/NGOO.svg';
import CallLogo from './SVG/Call.svg';
import MailLogo from './SVG/Mail.svg';

const Wrapper = styled.div`

margin: 30px 15% 30px 15%;
`;

const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;


  >*:first-child{
      margin-right:15%;
  }

`;


const TextWrapper = styled.div`
display: flex;
flex-direction: column;

`;

const Bold = styled.span`
font-weight: bold;
text-align: left;
`;

const InfoText = styled.span`

color: #BABABA;


`;


const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f8f8f8;
  border-radius: 100%;
  text-align: center;
  position:relative;
  margin: 0;
  display:inline-block;
  
`;

const Logo = styled.img`

position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`
export const DonateBar = () => {
    return (
        <Wrapper>
            <Container>
                <img src={NGOLogo} alt="ngoo" />




                    <IconWrapper>
                        <Logo src={MailLogo} alt="ngoo" />
                    </IconWrapper>
                    <TextWrapper>
                        <Bold>Mail:</Bold>
                        <InfoText>info@ngoochairty.com</InfoText>
                    </TextWrapper>
         


                    <IconWrapper>
                        <Logo src={CallLogo} alt="ngoo" />
                    </IconWrapper>
                    <TextWrapper>
                        <Bold>Call us:</Bold>
                        <InfoText>+62 7100 1234</InfoText>
                    </TextWrapper>
                <Button marginLeft="30px" text="DONATE NOW" />
            </Container>
        </Wrapper>
    );
}

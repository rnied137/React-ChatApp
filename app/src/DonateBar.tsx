import React from 'react'

import styled from 'styled-components';
import { Button } from './SmallComponents/Button';
import NGOLogo from './SVG/NGOO.svg';
import CallLogo from './SVG/Call.svg';
import MailLogo from './SVG/Mail.svg';

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
text-align: left;
`;

const InfoText = styled.span`
color: #BABABA;


`;

const LogoCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #f8f8f8;
  border-radius: 50px;
`;

const Logo = styled.img`
flex:1;
display: inline-block;
`;



export const DonateBar = () => {
    return (
        <Wrapper>
            <Container>
                <img src={NGOLogo} alt="ngoo" />

                <LogoCircle>
                    <Logo src={MailLogo} alt="ngoo" />
                </LogoCircle>
                <Bold>Mail:</Bold>
                <InfoText>info@ngoochairty.com</InfoText>

                <LogoCircle>
                    <Logo src={CallLogo} alt="ngoo" />
                </LogoCircle>
                <Bold>Call us:</Bold>
                <InfoText>+62 7100 1234</InfoText>
                <Button marginLeft="30px" text="DONATE NOW" />
            </Container>
        </Wrapper>
    );
}

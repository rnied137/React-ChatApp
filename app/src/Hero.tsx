import React from 'react'

import styled from 'styled-components';
import { Button } from './SmallComponents/Button';


const Wrapper = styled.div`

background-color: black;
padding: 15%;
text-align: left;
span {
    font-family:Roboto;
}
`;


const Container = styled.div`
width:40%;

`;

const StyledText = styled.span`

font-size: 2rem;
color:#FF7000;


`;

const BigText = styled.span`
font-size: 2rem;
color: #fff;
`;

const SmallText = styled.span`
display: inline-block;
margin-top: 1rem;
color: #666666;
`;



export const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <StyledText>
                    #EndViolence
            </StyledText>
                <BigText> For Every Woman</BigText>
                <SmallText>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</SmallText>
                <Button marginTop="1rem" text="DONATE NOW" />
            </Container>
        </Wrapper>
    )
}

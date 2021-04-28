import React from "react";

import styled from "styled-components";
import { Button } from "./SmallComponents/Button";

import {
  FaArrowCircleLeft as ArrowLeft,
  FaArrowCircleRight as ArrowRight,
} from "react-icons/fa";

const Wrapper = styled.div`
  background-color: black;
  padding: 15%;
  text-align: left;
  position: relative;
  span {
    font-family: Roboto;
  }
`;

const Container = styled.div`
  max-width: 400px;
`;

const StyledText = styled.span`
  font-size: 3rem;
  color: #ff7000;
`;

const BigText = styled.span`
  font-size: 3rem;
  color: #fff;
`;

const SmallText = styled.span`
  display: inline-block;
  margin-top: 1rem;
  color: #666666;
`;

const ArrowWrapperLeft = styled.div`
  position: absolute;
  left:5%;

  @media(max-width: 550px){
    display: none;
}
`;

const ArrowWrapperRight = styled.div`
position: absolute;
right:10%;

@media(max-width: 550px){
    display: none;
}

`;

export const Hero = () => {
  return (
      <Wrapper>
           <ArrowWrapperLeft>
          <ArrowLeft color="#FF7000" size="3em" />
        </ArrowWrapperLeft>
        <ArrowWrapperRight>
          <ArrowRight color="#FF7000" size="3em" />
        </ArrowWrapperRight>
      <Container>
       
        <StyledText>#EndViolence</StyledText>
        <BigText> For Every Woman</BigText>
        <SmallText>
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </SmallText>
        <Button marginTop="1.5rem" marginLeft="-1px" text="DONATE NOW" />
      </Container>
    </Wrapper>
  );
};

import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin-top: 2em;
  color: black;
  text-transform: uppercase;
  font-family: "Lora", serif;
`;

const Text = styled.p`
  margin-top: 2em;
  font-size: 15px;
  color: #666666;
`;

const TextContainer = styled.div`
  padding: 15px;
`;

const Container = styled.div`
  width: 367px;
`;

const Placeholder = styled.div`
  width: 300px;
  height: 270px;
  background-color: #333333;
`;

const ProgressContainer = styled.div`
  border-radius: 15px;
 
`;

const Progress = styled.progress`
  width: 250px;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #999999;
  border-radius: 25px;
  &::-webkit-progress-bar {
    //background of webkit progress
    border-radius: 25px;
    background-color: #999999;
  }

  &::-webkit-progress-value {
    //bar back
    background-color: #ff7000;
    border-radius: 25px;
  }

  &::-moz-progress-bar {
    background-color: #ff7000;
  }
`;
export const Card = ({ title = "", text = "", value="80" }) => {
  return (
    <Container>
      <Placeholder />
      <TextContainer>
        <Title>{title} </Title>
        <Text>{text} </Text>
      </TextContainer>
      <ProgressContainer>
        <Progress value={value} max="100" />
      </ProgressContainer>
    </Container>
  );
};

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
  ::-webkit-progress-bar {
    background-color: red;
    border-radius: 15px;
  }

  ::-webkit-progress-value {
    background-color: #ff7000;
    border-radius: 15px;
  }
`;

const Progress = styled.progress`
  appearance: none;
`;
export const Card = ({ title = "", text = "" }) => {
  return (
    <Container>
      <Placeholder />
      <TextContainer>
        <Title>{title} </Title>
        <Text>{text} </Text>
      </TextContainer>
      <ProgressContainer>
        <Progress value="80" />
      </ProgressContainer>
    </Container>
  );
};

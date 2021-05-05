import React, { useState, useEffect} from 'react'

import styled from "styled-components";

const HeadingContainer = styled.div`
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-family: Lora;
  font-weight: 700;
  font-size: 54px;
  display: inline-block;
`;

const DecoratedText = styled.h1`
  color:#FF7000;
  font-family: Lora;
  font-weight: 700;
  font-size: 54px;
  display: block;

`;

const StyledBorder = styled.div<StyledBorderProps>`
  border-top: 3px solid #ff7000;
  width: ${(props) => props.width};
  margin-top: 2em;
  float: ${(props) => props.position};
`;

type StyledBorderProps = {
  width?: string;
  position?: string;
};

export const Heading = ({
  text = "We Need your help",
  decoratedText = "Need",
  width = "30%",
  position = "left",
}) => {
  const [textArray, setTextArray] = useState<Array<string | null>>([""]);


  useEffect(()=>{
        let headingTextArray:string[] = [""];
//headingTextArray = text.split(' ');

let newArray = [""]


setTextArray(newArray);

  },[text])


  return (
    <HeadingContainer>
        {textArray.map(el=>el)}
      {textArray.map((element,index)=>(
          element===decoratedText ? <DecoratedText>{element}</DecoratedText>
      :<StyledHeading>{element}</StyledHeading>))}
      {/* <StyledBorder width={width} position={position} /> */}
    </HeadingContainer>
  );
};

import React from 'react'

import styled from 'styled-components';
import { CircleDecoration } from './SmallComponents/CircleDecoration';


const QuoteWrapper = styled.div`
display: grid;
grid-template-columns: 120px auto;
grid-gap: 30px;


`;

const FlexText = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`;

const Text = styled.span`

color: #666666;

`;



const Author = styled.span`
  color: #ff7000;
  font-size: 1.5em;


&>div{
    border-bottom: 2px solid #ff7000;
    width: 16px;
    display: inline-block;
    transform: translateY(calc(-1.5em/3.95 ));
}
`;

const Category = styled.span`

color: #666666;
`;




export const Quote = () => {
    return (
      <QuoteWrapper>
        <CircleDecoration withQuote />
        <FlexText>
          <Text>
            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium dolore mque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo invent.
          </Text>
          <Author><div/> Raisa Doel</Author>
          <Category>House Keeper</Category>
        </FlexText>
      </QuoteWrapper>
    );
}

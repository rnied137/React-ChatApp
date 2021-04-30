import React from 'react'

import styled from 'styled-components';

import Quote from '../SVG/Quote.svg';

type QuoteProps = {

}

const Circle = styled.div`
position: relative;
display: inline-block;
width: 120px;
height: 120px;
background-color: #333333;
border-radius: 50%;

`;

const StyledQuote = styled.img`
position: absolute;
top:1%;
right:15%;
`;



export const CircleDecoration = ({withQuote=false}) => {
    return (
        <Circle>
            {withQuote ? <StyledQuote src={Quote} />:null}
        </Circle>
    )
}

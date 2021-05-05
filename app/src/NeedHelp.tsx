import React from 'react'

import styled from 'styled-components';

const Container = styled.div`

max-width: 865px;
text-align: center;
margin: 4em auto 2em auto;



p{
    font-family: Roboto;
    font-weight: 400;
    color:#666666;
    font-size: 16px;
    line-height: 24px;
}
`;

const Span = styled.span`
    font-size: 5rem;
`;

const ColoredSpan = styled.span`
color: #FF7000;
font-size: 5rem;
`;

const CrossedSpan = styled.span`
font-size: 5rem;
text-decoration: line-through;
display:inline-block;
width:100%;
text-decoration-color:#FF7000;


`;

export const NeedHelp = () => {
    return (
        <Container>
            <Span>We </Span><ColoredSpan>Need </ColoredSpan><Span>Your</Span>
            <CrossedSpan>Help</CrossedSpan>
            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
    )
}

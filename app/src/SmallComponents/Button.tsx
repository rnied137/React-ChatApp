import React from 'react'

import styled from 'styled-components';

const StyledButton = styled.button`
border-radius:5px;
border: none;
padding: 1em 1.5em;
background: #FF7000;
color: #fff;
display: inline-block;
margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
margin-top: ${props => props.marginTop};
margin-bottom: ${props => props.marginBottom};
`;

export const Button = ({text="Button", marginLeft="5px", marginRight="0px", marginTop="0px", marginBottom="0px"}) => {
    return (
        <StyledButton marginLeft={marginLeft} 
                      marginRight={marginRight}
                      marginTop={marginTop}
                      marginBottom={marginBottom}>
            {text}
        </StyledButton>
    )
}

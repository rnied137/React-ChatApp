import React from 'react'

import styled from 'styled-components';



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
};

export const ButtonExternal: React.FunctionComponent<ButtonProps> = ({ text = "Button", marginLeft = "5px", marginRight = "0px", marginTop = "0px", marginBottom = "0px" }) => {
    return (
        <StyledButton marginLeft={marginLeft}
            marginRight={marginRight}
            marginTop={marginTop}
            marginBottom={marginBottom}>
            {text}
        </StyledButton>
    )
}

const StyledButton = styled.button< { 
    marginLeft?: string,
    marginRight?: string,
    marginTop?: string,
    marginBottom?: string
     }>`
border-radius:5px;
border: none;
padding: 1em 1.5em;
background: #FF7000;
color: #fff;
display: inline-block;
max-height: 55px;
margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
margin-top: ${props => props.marginTop};
margin-bottom: ${props => props.marginBottom};
`;
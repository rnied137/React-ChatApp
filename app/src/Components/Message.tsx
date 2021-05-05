import React from 'react'
import styled from 'styled-components';



type ContainerProps = {
    isUser?:Boolean;
}

const Container = styled.span<ContainerProps>`
background: ${props=>props.isUser ? props.theme.colors.white :`linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%)`};
color: ${props=> props.isUser ? props.theme.colors.black : props.theme.colors.white};
max-width:80%;
display: inline-block;
padding:30px;
border-radius: ${props=>props.isUser ? '10px 10px 0 10px' : '0 10px 10px 10px'};
margin-top:1em;
border: ${props=>props.isUser ? `1px solid rgba(112, 124, 151, 0.25)` : null };
align-self: ${props=>props.isUser ? `flex-end`:`flex-start`};
margin-right: 1em;
`;


 export interface IMessageProps  {
    children?:string
    isUser?: Boolean;
};

export const Message: React.FC<IMessageProps> = ({children, isUser=false}) => {
    return (
        <Container isUser={isUser}>
            {children}
        </Container>
    )
}

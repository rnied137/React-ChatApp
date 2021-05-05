import React from 'react'

import styled from 'styled-components';


type IHeadingProps = {
    children?:string | React.ReactChild;
}

const HeaderText = styled.span`
font-family:TTNorms;
font-size: 18px;
text-align: center;
color: #0D1C2E;
display: inline-block;
line-height: 18,88px;

`;

export const Heading = ({children}:IHeadingProps) => {
    return (
<HeaderText>{children}</HeaderText>
    )
}

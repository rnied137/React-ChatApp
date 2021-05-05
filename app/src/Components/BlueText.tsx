import React from 'react';

import styled from 'styled-components';

const Text = styled.span`
color: ${props=> props.theme.colors.blue};
font-size: 16px;
font-family: TTNorms;
text-transform: lowercase;
font-weight: 400;
`;

type IBlueTextProps = {
    children?:string | React.ReactChild | null;
}

export const BlueText = ({children}: IBlueTextProps) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

import React from 'react'
import styled from 'styled-components';


const Chat = styled.div`
padding: ${props=>props.theme.padding.pad2};
background-color:  ${props => props.theme.colors.white};
min-height: 50px;


`;
export const ChatArea = () => {
    return (
        <Chat>
            asdas
        </Chat>
    )
}

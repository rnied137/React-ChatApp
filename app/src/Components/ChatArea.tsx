import React from 'react'
import styled from 'styled-components';

import { Message } from './Message';

const Chat = styled.div`
padding: ${props=>props.theme.padding.pad2};
background-color:  ${props => props.theme.colors.white};
min-height: 50px;
display: flex;
flex-direction: column;
align-items: flex-start;



`;
export const ChatArea = () => {
    return (
        <Chat>
            <Message>Jutro pojde do sklepu</Message>

            <Message isUser>Jutro pojde do na dziewczyny</Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>


        </Chat>
    )
}

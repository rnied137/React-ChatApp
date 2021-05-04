import React, {useState} from 'react'
import styled from 'styled-components';

import { Message, IMessageProps } from './Message';

const Chat = styled.div`
padding: ${props=>props.theme.padding.pad2};
background-color:  ${props => props.theme.colors.white};
min-height: 50px;




`;


const ChatVisibleContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
height: 500px;
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 0.4em;
    border-radius: 5px;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 10px;
}

/* Handle */
&::-webkit-scrollbar-thumb {
    background: #B7BDCB;
  border-radius: 10px;
}

`;

export const ChatArea = () => {

    const [messages, setMessages] = useState<Array<IMessageProps>>([]);
    return (
        <Chat>
            <ChatVisibleContent>

  
            {messages.map(message=><Message>{message.children}</Message>)}
            <Message>Jutro pojde do sklepu</Message>

            <Message isUser>Jutro pojde do na dziewczyny</Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message isUser>Jutro pojde do na dziewczyny</Message>

            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
            <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
             <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
              <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message> <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
              <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
              <Message isUser>Jutro pojde do na dziewczyny</Message>

               <Message>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </Message>
               </ChatVisibleContent>
        </Chat>
    )
}

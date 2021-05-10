import React, {useState} from 'react';


import { ChatHeader } from "./ChatHeader";
import { ChatArea, ICharAreaProps } from "./ChatArea";
import { ChatMessage } from "./ChatMessage";
import { IMessageProps } from './Message';
import styled from 'styled-components';


const Container = styled.div`
max-width:550px;
height: 100%;
display:inline-block;
border-radius:15px;
border: 2px solid ${props=>props.theme.colors.lightgray};
`;

export const Chat = () => {
  const [messages, setMessages] = useState<IMessageProps[]>([
    {
      children: "This is chat message",
      isUser:false,
    },
    {
      children: "This is chat message2",
      isUser:true,
    },
    {
      children: "This is chat message3",
      isUser:false,
    },
    {
      children: "This is chat message4",
      isUser:false,
    },
    {
      children: "This is chat message5",
      isUser:true,
    },
    {
      children: "This is chat message5",
      isUser: false,
    },
    {
      children: "This is chat message6",
      isUser:true,
    },
  ])
  
  return (
        <Container>
          <ChatHeader/>
      <ChatArea messages={messages}/>
      <ChatMessage setMessages={setMessages}
                   messages={messages}
                   />
        </Container>
    )
}

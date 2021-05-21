import React, { useState, useEffect } from 'react';


import { ChatHeader } from "./ChatHeader";
import { ChatArea } from "./ChatArea";
import { ChatMessage } from "./ChatMessage";
import { IMessageProps } from './Message';
import styled from 'styled-components';
import io from 'socket.io-client';


const socket = io("127.0.0.1:3099");

const Container = styled.div`
max-width:550px;
height: 100%;
display:inline-block;
border-radius:15px;
border: 2px solid ${props => props.theme.colors.lightgray};
`;

export const Chat = () => {

  const [connParams, setConnParams] = useState({

    connected: socket.connected,
    lastMessage: "",
  })

  const [messages, setMessages] = useState<IMessageProps[]>([
    {
      children: "This is chat message",
      isUser: false,
    },
    {
      children: "This is chat message2",
      isUser: true,
    },
    {
      children: "This is chat message3",
      isUser: false,
    },
    {
      children: "This is chat message4",
      isUser: false,
    },
    {
      children: "This is chat message5",
      isUser: true,
    },
    {
      children: "This is chat message5",
      isUser: false,
    },
    {
      children: "This is chat message6",
      isUser: true,
    },
  ])

  const onConnectionStateUpdate = () => {
    setConnParams({ ...connParams, connected: socket.connected })
  }



  const onMessage = (message: string) => {

    console.log("Last message was" + message);

  }


  useEffect(() => {
    socket.on('connect', () => onConnectionStateUpdate());
    socket.on('disconnect', () => onConnectionStateUpdate());
    socket.on('message', (content) => onMessage(content));

    return (() => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    });
  }, []);

  return (
    <Container>
      <ChatHeader connectedToServer={socket.connected} />
      <ChatArea messages={messages} />
      <ChatMessage setMessages={setMessages}
        messages={messages}
      />
    </Container>
  )
}

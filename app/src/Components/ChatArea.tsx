import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { Message, IMessageProps } from "./Message";

const Chat = styled.div`
  padding: ${(props) => props.theme.padding.pad2};
  background-color: ${(props) => props.theme.colors.white};
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
    background: #b7bdcb;
    border-radius: 10px;
  }
`;

export interface ICharAreaProps {
  messages?: IMessageProps[];
};

export const ChatArea = ({
  messages = []
}:ICharAreaProps) => {

const chatScrollRef = useRef<HTMLDivElement>(null);

const scrollToBottom=()=> {
  
console.log(chatScrollRef.current);  
  // chatScrollRef.current?.scrollIntoView({block:"end", behavior: "smooth",});
const scrollHeight = chatScrollRef.current?.scrollHeight;
  chatScrollRef.current?.scrollTo({top:scrollHeight, behavior: "smooth"});
}
useEffect(()=>{

  scrollToBottom();
})
  
  return (
    <Chat>
      <ChatVisibleContent ref={chatScrollRef}  >
        
        {messages.map((message, index) =>  index===messages.length-1 ? (
          <Message  isUser={message.isUser}>{message.children}</Message>
        ):(
          <Message isUser={message.isUser}>{message.children}</Message>
        ))}
      </ChatVisibleContent>
    </Chat>
  );
};

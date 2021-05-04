import React from 'react';


import { ChatHeader } from "./ChatHeader";
import { ChatArea } from "./ChatArea";
import { ChatMessage } from "./ChatMessage";

import styled from 'styled-components';


const Container = styled.div`

`;

export const Chat = () => {
    return (
        <Container>
          <ChatHeader/>
          <ChatArea/>
          <ChatMessage/>
        </Container>
    )
}

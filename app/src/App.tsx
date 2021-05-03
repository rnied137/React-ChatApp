import React from "react";
import "./App.css";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { UserProfile } from "./Components/UserProfile";
import { ChatHeader } from "./Components/ChatHeader";

import TTNorms from './Fonts/TTNorms-Bold.otf';
import { ChatArea } from "./Components/ChatArea";
import { ChatMessage } from "./Components/ChatMessage";

const theme = {
  colors: {
    black: "#0D1C2E",
    blue: "#2A8BF2",
    pink: "#FF3366",
    gray: "#707C97",
    lightgray: "#E6ECFE",
    lightgray2: "#DADADA",
    lightwhite: "#FAFBFF",
    white: "#FFFFFF",

  },
  imgSizes: {
    small:"36px",
    medium:"54px",
    big:"96px",
  },
  padding: {
    pad1:"1em",
    pad2:"2em",
    pad4:"4em",
    pad6:"6em"
  },
}

interface IThemeProps {
  children: React.ReactNode | null;
}

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: TTNorms;
src: url(${TTNorms}) format('truetype');
};
`;

const Theme = ({ children }: IThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const Container = styled.div`
width: 200px;
height: 200px;
background-color: ${props => props.theme.colors.pink};
`;

function App() {
  return (
    <>
    <GlobalStyle/>
      <Theme>
          <ChatHeader/>
          <ChatArea/>
          <ChatMessage/>
      </Theme>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";

import { ThemeProvider, createGlobalStyle } from "styled-components";


import TTNorms from './Fonts/TTNorms-Bold.otf';

import { Chat } from "./Components/Chat";
import { Sidebar } from "./Components/Sidebar";

import styled from 'styled-components';
import { RecentChats } from "./Components/RecentChats";
import { UserContextProvider } from './Providers/UserContextProvider';

import UserContext from './Providers/UserContextProvider';
import { useContext } from 'react';

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
    small: "36px",
    medium: "54px",
    big: "96px",
  },
  padding: {
    pad1: "1em",
    pad2: "2em",
    pad4: "4em",
    pad6: "6em"
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
display: flex;
flex-direction: row;
align-items: flex-start;
background: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);

`;



function App() {

  const userContext = useContext(UserContext);

  const tryIt=()=>{
    console.log("Trying");
    userContext.setCurrentUser("magda");

  }
  return (
    <>
      <GlobalStyle />
      <Theme>
        <UserContextProvider>
          <Container>
            <button style={{width:"300px",height:"200px"}} onClick={()=>tryIt()}></button>
            <p>{userContext.username}</p>
          <Sidebar />
            {userContext.isAuth ?  <> <RecentChats />
            <Chat /></> : <div>Not logged get the fuck out!</div>}
          
          
          </Container>
        </UserContextProvider>
      </Theme>
    </>
  );
}

export default App;

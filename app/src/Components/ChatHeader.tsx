import React from 'react';
import styled from 'styled-components';
import { BlueText } from './BlueText';
import { Heading } from './Heading';

import { UserProfile } from './UserProfile';

import { AiOutlinePaperClip as ClipIcon } from 'react-icons/ai';
import { BsThreeDotsVertical as DotsIcon } from 'react-icons/bs';


const Header = styled.div`
width: 100%;
padding: 2em;
background-color: #FAFBFF;
border-bottom: 3px solid ${props => props.theme.colors.lightgray};
display: flex;
flex-direction: row;
align-items: center;
`;


const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;

`;


const UserImage = styled(UserProfile)`
margin-right: 1em;
`


type IIconWrapperProps = {
  src?:string;
}

const IconWrapper = styled.a<IIconWrapperProps>`
width:52px;
height:52px;
border-radius:100%;
background-color: ${props => props.theme.colors.white};
display: flex;
align-self: center;
justify-content: center;
margin-right: 1em;

>svg{
  cursor: pointer;
  display: inline-block;
  margin-top: auto;
  margin-bottom: auto;
}
`;

const IconContainer = styled.div`
margin-left: auto;
margin-right: 2em;
display: flex;
flex-direction: row;
`;

export const ChatHeader = () => {
  return (
    <Header>
      <UserImage size="54px" />
      <Text>
        <Heading>Nika Jerrardo</Heading>
        <BlueText>last online 5 hours ago</BlueText>
      </Text>
      <IconContainer>
        <IconWrapper src="http://interia.pl"> <ClipIcon size="2em" color="#707C97" /></IconWrapper>
        <IconWrapper> <DotsIcon size="2em" color="#707C97" /></IconWrapper>
      </IconContainer>
    </Header>
  );
}

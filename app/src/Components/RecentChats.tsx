import React from 'react'

import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '../SVG/PlusButton.svg';
import { ReactComponent as SearchIcon } from '../SVG/Search.svg';
import { UserProfile } from './UserProfile';
const Container = styled.div`
max-width:400px;

display: inline-block;
vertical-align: top;
margin-left: 1em;
`;

const StyledButton = styled.button`
background: linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%);
padding:1em 2em;
border:none;
color: ${props => props.theme.colors.white};
text-align: center;
border-radius: 5px;
display: flex;
flex-direction: row;
align-items: center;
font-size: 20px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

&>span {
margin-left: 5px;
}
`;


const StyledSearch = styled.div`
position: relative;
&>input {
width: 80%;
padding:1.5em 0;
color: ${props => props.theme.colors.gray};
color: ${props => props.theme.colors.white};
border: none;
border-radius: 5px;
color: ${props => props.theme.colors.gray};

}
&>svg {
    position:absolute;
    left: 5%;
    top: 33%;
}


`;


const Card = styled.div`
background: ${props => props.theme.colors.white};
padding: 2em;
margin: 1em 0;
width: 100%;


h3{
    margin: 0 0 0 10px;
    color: black;
    font-weight: 800;

}

span,p {
    color: ${props => props.theme.colors.gray};
}



`;

const CardHeader = styled.div`
display: flex;

&>span {
    margin-left: 15px;
}
`;



const Posts = [
    {
        userimage: "https://picsum.photos/200/300?random=1",
        username: "Joel Havier",
        timestamp: "1 min ago",
        lastMessage: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",

    },
    {
        userimage: "https://picsum.photos/200/300?random=2",
        username: "Amanda Cris",
        timestamp: "Now",
        lastMessage: "You have a mistake in html: input is self-closing tag and cannot have children like you do ",

    },
    {
        userimage: "https://picsum.photos/200/300?random=3",
        username: "Cristien Oleg",
        timestamp: "1 hour ago",
        lastMessage: "TextInput with an icon and clear button. TextInput is a controlled component. This means that the visible text will always match the contents of the value prop.",

    },
    {
        userimage: "https://picsum.photos/200/300?random=4",
        username: "Joel Havier",
        timestamp: "1 min ago",
        lastMessage: "Each input component also accepts all react-final-form FieldProps, including: ... initialValue, Optional, mixed, -, Value to be set when the property is null or undefined",

    },
    {
        userimage: "https://picsum.photos/200/300?random=5",
        username: "Amelia Prosecco",
        timestamp: "32 min ago",
        lastMessage: "Javascript answers related to “react js text input with icon”. bootstrap icons react ",

    },


]
export const RecentChats = () => {
    return (
        <Container>
            <StyledButton>
                <PlusIcon /> <span>Create New Chat</span>
            </StyledButton>

            <StyledSearch>
                <input type="text" />
                <SearchIcon />
            </StyledSearch>


            {Posts.map((post, index) => (
                <Card key={index}>
                    <CardHeader>

                        <UserProfile src={post.userimage} size="36px" />
                        <h3>{post.username}</h3>
                        <span>{post.timestamp}</span>

                    </CardHeader>
                    <p>{post.lastMessage}</p>
                </Card>))}
        </Container>
    )
}
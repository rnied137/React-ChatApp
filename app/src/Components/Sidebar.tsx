import React from 'react';
import styled from 'styled-components';
import { UserProfile } from './UserProfile';

import { ReactComponent as HomeIcon } from '../SVG/HomeIcon.svg';
import { ReactComponent as ContactsIcon } from '../SVG/ContactsIcon.svg';
import { ReactComponent as ChatIcon } from '../SVG/ChatIcon.svg';




const Container = styled.div`
width:400px;
display: flex;
flex-direction: column;
justify-content: center;

&:last-child
{
    background: red;
    color: yellow;
    align-self: flex-end;
   
}
`;

const StyledProfile = styled(UserProfile)`
margin: 2em;`

const Link = styled.a`
padding: 2em 1em;
text-decoration: none;
display: flex;
align-items: center;
height: 100%;
color: ${props => props.theme.colors.gray};


&:hover {
    color: ${props => props.theme.colors.blue};
    &>svg {
        stroke:${props => props.theme.colors.blue};
    }
}

&:active {
    color: ${props => props.theme.colors.blue};
    &>svg {
        stroke:${props => props.theme.colors.blue};
    }
}
&>svg {

margin: auto 15px ;
}
`;


export const Sidebar = () => {
    return (
        <Container>
            <StyledProfile size="96px"/>
            <Link href="interia.pl">
            <HomeIcon/>
                <span>HOME</span>
            </Link>

            <Link href="interia.pl">
                <ContactsIcon/>
                <span>CONTACTS</span>
            </Link>


            <Link href="interia.pl">
            <ChatIcon/>
                <span>CHAT</span>
            </Link>


            <Link href="interia.pl">
            <HomeIcon/>
                <span>NOTIFICATIONS</span>
            </Link>
            <Link href="interia.pl">
            <HomeIcon/>
                <span>LAST</span>
            </Link>
        </Container>
    )
}

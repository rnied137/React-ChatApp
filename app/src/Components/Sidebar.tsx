import React from 'react';
import styled from 'styled-components';
import { UserProfile } from './UserProfile';

import { ReactComponent as HomeIcon } from '../SVG/SidebarIcons/grid.svg';
import { ReactComponent as ContactsIcon } from '../SVG/SidebarIcons/person.svg';
import { ReactComponent as NotificationsIcon } from '../SVG/SidebarIcons/bell.svg';
import { ReactComponent as SettingsIcon } from '../SVG/SidebarIcons/settings.svg';
import { ReactComponent as CalendarIcon } from '../SVG/SidebarIcons/calendar.svg';
import { ReactComponent as LogoutIcon } from '../SVG/SidebarIcons/logout.svg';
import { ReactComponent as ChatIcon } from '../SVG/SidebarIcons/chat.svg';




const Container = styled.aside`
  height: 100vh;
  width: 300px;


  &>:last-child {
      position: relative;
    top:30%;
  
  }
`;

const StyledProfile = styled(UserProfile)`
margin: 2em;`

const Link = styled.a`
padding: 2em 1em;
text-decoration: none;
display: flex;
align-items: center;
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
            <NotificationsIcon/>
                <span>NOTIFICATIONS</span>
            </Link>
            <Link href="interia.pl">
            <CalendarIcon/>
                <span>NOTIFICATIONS</span>
            </Link>
            <Link href="interia.pl">
            <SettingsIcon/>
                <span>SETTINGS</span>
            </Link>

            <Link href="interia.pl">
            <LogoutIcon/>
                <span>LOGOUT</span>
            </Link>
        </Container>
    )
}

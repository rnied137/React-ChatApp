import React from 'react'
import styled from 'styled-components';


const MenuWrapper = styled.div`
height:61px;
background:#333333;

@media(max-width:550px){
height: auto;
}


`;

const Menu = styled.ul`
margin: 0 15% 0 15%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: nowrap;


@media(max-width:550px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    text-align: center;
    margin:0%;
}

`;


const MenuItem = styled.a`
list-style-type: none;
color: #fff;
line-height: 61px;
margin-right: 40px;
height: 100%;

&:hover {
    color: black;
}

`;
export const MainMenu = () => {
    return (
        <MenuWrapper>
            <Menu>
                <MenuItem>
                    Home
                </MenuItem>
                <MenuItem>
                    About
                </MenuItem>
                <MenuItem>
                    Causes
                </MenuItem>
                <MenuItem>
                    Pages
                </MenuItem>
                <MenuItem>
                    Events
                </MenuItem>
                <MenuItem>
                 Contact
                </MenuItem>
            </Menu>
        </MenuWrapper>
    )
}

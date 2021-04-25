import React from 'react'
import styled from 'styled-components';


const MenuWrapper = styled.div`
height:61px;
background:#333333;


`;

const Menu = styled.ul`
margin: 0 15% 0 15%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;

`;


const MenuItem = styled.a`
list-style-type: none;
color: #fff;
line-height: 61px;
margin-right: 40px;

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
                    Home
                </MenuItem>
                <MenuItem>
                    Home
                </MenuItem>
                <MenuItem>
                    Home
                </MenuItem>
                <MenuItem>
                    Home
                </MenuItem>
                <MenuItem>
                    Home
                </MenuItem>
            </Menu>
        </MenuWrapper>
    )
}

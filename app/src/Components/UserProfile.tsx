import React from 'react'
import styled from 'styled-components';

type StyledUserImageProps = {
    size?: string;
    className?: string;
}

const UserImage = styled.img<StyledUserImageProps>`
height: ${props=>props.size};
width: ${props=>props.size};
border-radius: 100%;
object-fit: cover;
display: inline-block;
`;
export const UserProfile = ({src="https://fwcdn.pl/ppo/06/52/2730652/452145.3.jpg", size="36px", className=""}) => {

    return (
        <UserImage size={size} className={className}
        src={src} alt="profile photo"/>
    )
}

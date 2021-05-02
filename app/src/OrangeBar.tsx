import React from "react";
import styled from "styled-components";

import {
  FaTwitter as TwitterIcon,
  FaYoutube as YoutubeIcon,
  FaFacebook as FacebookIcon,
  FaInstagram as InstagramIcon,
} from "react-icons/fa";

const BarWrapper = styled.div`
  background: #ff7000;
  height: 55px;
`;

const Bar = styled.div`
  margin: 0 15% 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: #fff;

  p {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21.09px;
  }


  @media(max-width:1000px){
    p{
      display: none;
    }

  }
`;

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 100%;
  list-style-type: none;
`;

const Icon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 55px;

  &:hover {
    background-color: #333333;
  }

  > svg {
    width: 27px;
    height: 28px;
  }
`;

export const OrangeBar = () => {
  return (
    <BarWrapper>
      <Bar>
        {" "}
        <p>Urgent : Awesome Template for Charity & Non-profit Site</p>
        <IconsContainer>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <YoutubeIcon />
          </Icon>
        </IconsContainer>
      </Bar>
    </BarWrapper>
  );
};

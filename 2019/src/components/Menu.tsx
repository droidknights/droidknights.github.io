import * as React from "react";
import styled from "styled-components";

import { scroller } from "react-scroll";

interface MenuProps {}

const Wrapper = styled.div`
  @font-face {
    font-family: "SilkScreen";
    src: url(${require("../assets/fonts/SilkScreen/silkscreen.eot")})
        format("embedded-opentype"),
      url(${require("../assets/fonts/SilkScreen/silkscreen.ttf")})
        format("truetype");
  }

  display: flex;
  height: 100%;
  justify-content: flex-end;

  & > div {
    font-family: "SilkScreen";
    font-size: 18px;
    font-stretch: expanded;
    line-height: 0.72;
    letter-spacing: -1.7px;
    color: #ffffff;
    text-decoration: none;

    display: flex;
    align-items: center;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 5%;
    }

    &:hover {
      color: #45fc17;
    }
  }
`;

const Menu: React.FunctionComponent<MenuProps> = props => {
  const scrollTo = (name: string) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <Wrapper>
      <div onClick={() => scrollTo("about")}>ABOUT</div>
      <div onClick={() => scrollTo("schedule")}>SCHEDULE</div>
      <div onClick={() => scrollTo("location")}>LOCATION</div>
      <div onClick={() => scrollTo("sponsor")}>SPONSOR</div>
      <div onClick={() => scrollTo("organizer")}>ORGANIZER</div>
    </Wrapper>
  );
};

export default Menu;

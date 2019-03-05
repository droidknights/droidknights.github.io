import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

export interface OrganizerProps {}

const Wrapper = styled(Element)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 101px 14.4% 137px 14.4%;
  background-color: #080e17;

  & > div:nth-child(1) {
    font-size: 38px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;
    color: #45fc17;
    margin-bottom: 49px;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 69px 8% 60px 8%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  width: 150px;
  margin-bottom: 44px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > img {
    width: 120px;
    height: 120px;
    background-color: #d8d8d8;
  }

  & > div {
    width: 120px;
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;

    margin-top: 12px;

    & > a {
      width: 15px;
      height: 15px;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Hidden = styled.div`
  visibility: hidden;
  height: 0;
  padding: 0;
  margin: 0;
  border-top-width: 0;
  border-bottom-width: 0;
`;

export default class Organizer extends React.Component<OrganizerProps, any> {
  public render() {
    return (
      <Wrapper name="organizer">
        <div>ORGANIZER</div>
        <Content>
          <Item>
            <img src={require("../assets/images/person/이승민.png")} alt="" />
            <div>
              <span>이승민</span>
              <a href="https://www.facebook.com/maryangmin">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/이대명.png")} alt="" />
            <div>
              <span>이대명</span>
              <a href="https://www.instagram.com/moka_q/">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/프루.png")} alt="" />
            <div>
              <span>Pluu</span>
              <a href="https://twitter.com/pluulove">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/김지윤.png")} alt="" />
            <div>
              <span>김지윤</span>
              <a href="http://about-jiyoon.kr">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/박민우.png")} alt="" />
            <div>
              <span>박민우</span>
              <a href="https://twitter.com/tebica">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img alt="" />
            <div>
              <span>권태환</span>
              <a href="http://thdev.tech">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img alt="" />
            <div>
              <span>이영찬</span>
              <a href="https://www.facebook.com/profile.php?id=100001924034433">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/정석준.jpg")} alt="" />
            <div>
              <span>정석준</span>
              <a href="https://www.facebook.com/sjjeong1225">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img alt="" />
            <div>
              <span>김나연</span>
              <a href="http://fb.com">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/박상권.png")} alt="" />
            <div>
              <span>박상권</span>
              <a>
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/김지영.png")} alt="" />
            <div>
              <span>김지영</span>
              <a href="http://fb.com">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/윤영채.jpg")} alt="" />
            <div>
              <span>윤영채</span>
              <a href="https://www.facebook.com/profile.php?id=100004142386759">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img alt="" />
            <div>
              <span>김기현</span>
              <a href="https://www.facebook.com/keestory91">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Item>
            <img src={require("../assets/images/person/윤정현.png")} alt="" />
            <div>
              <span>윤정현</span>
              <a href="https://www.facebook.com/profile.php?id=100007676581535">
                <img src={require("../assets/images/link.png")} alt="" />
              </a>
            </div>
          </Item>
          <Hidden />
          <Hidden />
          <Hidden />
          <Hidden />
          <Hidden />
          <Hidden />
          <Hidden />
          <Hidden />
          <Hidden />
        </Content>
      </Wrapper>
    );
  }
}

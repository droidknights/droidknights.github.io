import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
export interface MainProps {
  isPhone: boolean;
}

export interface MainState {}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;

  & > div.title {
    position: relative;
    margin-bottom: 73px;
    padding: 0 14.4%;

    & > img.title {
      width: 60%;
      position: absolute;
      top: 96px;
      left: 20%;
      right: 20%;
    }

    & > img.main {
      width: 100%;
    }
  }

  & > p {
    font-size: 25px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.12;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 26px;
  }
  & > a {
    width: 30%;
    margin-bottom: 55px;
    & > img.get_ticket {
      padding: 20px;
      width: 100%;
    }
  }

  & > div.dk-2018 {
    display: flex;
    background-image: linear-gradient(to bottom, #0f1723, #09273c);
    padding: 111px 14.4%;

    & > div:nth-child(1) {
      width: 200%;
      height: 0;
      padding-bottom: 35%;
      position: relative;
      margin-right: 10%;

      & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    & > div:nth-child(2) {
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.64;
      letter-spacing: normal;
      color: #ededed;
      & > p:nth-child(1) {
        color: #3dea11;
        font-size: 32px;
      }

      & p {
        margin: 0;
      }
    }
  }

  @media only screen and (max-device-width: 480px) {
    margin: 100px 0 0 0;
    & > div.title {
      padding: 0 0;
    }
    & > div.title > img.title {
      top: 0px;
      width: 80%;
      left: 10%;
      right: 10%;
    }

    & > p {
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.12;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      margin-bottom: 24px;
    }
    & > a {
      width: 52%;
      & > img.get_ticket {
        padding: 10px;
        width: 100%;
      }
    }

    & > div.dk-2018 {
      display: block;
      padding: 49px 8%;
      & > div:nth-child(1) {
        width: 100%;
        padding-bottom: 70%;
        margin-bottom: 70px;
      }

      & > div:nth-child(2) > p:nth-child(1) {
        margin-bottom: 25px;
      }
    }
  }
`;

export default class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <div className="title">
          <img
            src={require("../assets/images/2019_dk_title.png")}
            alt="title"
            className="title"
          />
          <img
            src={require("../assets/images/main-graphic.png")}
            alt="main"
            className="main"
          />
        </div>
        <p>
          오직 안드로이드 개발자들을 위한 컨퍼런스 <br />
          드로이드 나이츠 일반티켓 오픈!
        </p>
        <a href="https://event-us.kr/droidknights/event/5483">
          <img
            src={require("../assets/images/get_ticket.png")}
            alt="get_ticket"
            className="get_ticket"
          />
        </a>

        <Element className="dk-2018" name="about">
          <div>
            <img src={require("../assets/images/dk-2018.png")} alt="" />
          </div>
          <div>
            <p>DROID KNIGHTS 2019</p>
            <p>
              드로이드나이츠는 "안드로이드 개발자들을 위한 컨퍼런스"를 표방하며
              안드로이드 기술에 대한 세션으로 안드로이드 개발자들의 경험을
              공유하고 만남의 장을 만드는 컨퍼런스 입니다. <br />
              <br />
              한국은 높은 안드로이드점유율과 관련 제조사, 플랫폼 개발회사, 앱
              개발회사 등 개발 생태계가 잘 발달하였음에도 불구하고 안드로이드
              개발자들이 지식을 나눌 수 있는 기회가 부족하다는 필요로 인해
              비영리 개발자 조직에 의해 만들어졌습니다. <br />
              <br />
              드로이드나이츠 2017, 2018을 성공리에 개최하고 이번 2019년에는 더욱
              성숙한 행사를 통해 안드로이드 개발자들이 새로운 기술과 정보를
              공유하고 서로 교류할 수 있는 행사가 되기를 희망합니다.
            </p>
          </div>
        </Element>
      </Wrapper>
    );
  }
}

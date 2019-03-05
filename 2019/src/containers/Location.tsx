import * as React from "react";
import styled from "styled-components";
import { NaverMap } from "react-naver-maps";
import { Element } from "react-scroll";

export interface LocationProps {
  isPhone: boolean;
}

const Wrapper = styled(Element)`
  padding: 101px 14.4% 137px 14.4%;
  background-color: #0f1723;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #09273c, #0f1723);

  & > div.title {
    font-size: 38px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;
    color: #ffffff;
  }

  & > div.desc {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

    margin-top: 18px;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 69px 8% 60px 8%;
  }
`;

const LocationContent = styled(Element)`
  width: 50%;

  @media only screen and (max-device-width: 480px) {
    width: 100%;
  }
`;

const SponsorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 27%;
    margin-top: 20px;

    &.platinum {
      width: 41%;
    }
    &.gold {
      width: 34%;
    }
    &.silver {
      width: 37%;
    }
  }

  & > span {
    width: 100%;
    font-size: 51px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.75;
    text-align: center;
    color: #003e61;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media only screen and (max-device-width: 480px) {
    & > span {
      font-size: 41px;
    }
  }
`;
export default class Location extends React.Component<LocationProps, any> {
  public render() {
    return (
      <Wrapper name="location">
        <div className="title">LOCATION</div>
        <div className="desc">
          {this.props.isPhone ? (
            <>
              장소 코엑스 E홀
              <br />
              서울특별시 강남구 영동대로 513 (삼성동, 코엑스)
            </>
          ) : (
            "장소 코엑스 E홀 / 서울특별시 강남구 영동대로 513 (삼성동, 코엑스)"
          )}
        </div>
        <LocationContent name="sponsor">
          <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
            style={{
              margin: "34px 0",
              width: "100%",
              height: "400px"
            }}
            defaultCenter={{ lat: 37.5107735, lng: 127.0576294 }}
            defaultZoom={10}
          />
        </LocationContent>
        <div className="title">SPONSOR</div>
        <SponsorContent>
          <img
            className="platinum"
            src={require("../assets/images/sponsor-platinum.png")}
            alt=""
          />
          <span>COMING SOON...</span>

          <img
            className="gold"
            src={require("../assets/images/sponsor-gold.png")}
            alt=""
          />
          <img
            className="sponsor"
            src={require("../assets/images/sponsors/헤이딜러.png")}
            alt=""
          />

          <img
            className="silver"
            src={require("../assets/images/sponsor-silver.png")}
            alt=""
          />
          <span>COMING SOON...</span>
        </SponsorContent>
      </Wrapper>
    );
  }
}

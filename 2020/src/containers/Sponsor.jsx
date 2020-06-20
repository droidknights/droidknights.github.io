import React from "react";
import styles from "../styles/Sponsor.module.scss";
import { Element } from "react-scroll";

const Sponsor = (props) => {
  return (
    <Element name="sponsor" className={styles.root}>
      <div className={styles.title}>sponsor</div>
      <div className={styles.list}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-diamond/btn-diamond.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/btn-diamond/btn-diamond@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/btn-diamond/btn-diamond@3x.png 3x`}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/toss/logo-toss.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/toss/logo-toss@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/toss/logo-toss@3x.png 3x`}
            style={{ width: "80%", marginTop: "15px", marginBottom: "150px" }}
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-platinum/btn-platinum.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/btn-platinum/btn-platinum@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/btn-platinum/btn-platinum@3x.png 3x`}
          />

          <img
            src={
              process.env.PUBLIC_URL +
              "/img/sponsors/heydealer/logo-heydealer.png"
            }
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/heydealer/logo-heydealer@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/heydealer/logo-heydealer@3x.png 3x`}
            style={{
              width: "60%",
              marginTop: "15px",
            }}
          />

          {/* <img
            src={process.env.PUBLIC_URL + "/img/sponsors/line/logo-line.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/line/logo-line@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/line/logo-line@3x.png 3x`}
            style={{ width: "40%" }}
          /> */}

          {/* <img
            src={
              process.env.PUBLIC_URL +
              "/img/sponsors/remember/logo-remember.png"
            }
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/remember/logo-remember@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/remember/logo-remember@3x.png 3x`}
            style={{ width: "90%", marginTop: "10px", marginBottom: "150px" }}
          /> */}
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-gold/btn-gold.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/btn-gold/btn-gold@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/btn-gold/btn-gold@3x.png 3x`}
          />

          <img
            src={
              process.env.PUBLIC_URL + "/img/sponsors/gangnam/logo-gangnam.png"
            }
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/gangnam/logo-gangnam@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/gangnam/logo-gangnam@3x.png 3x`}
            style={{
              width: "50%",
              marginTop: "25px",
            }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/naver/logo-naver.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/naver/logo-naver@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/naver/logo-naver@3x.png 3x`}
            style={{
              width: "50%",
              marginTop: "15px",
            }}
          />

          {/* <img
            src={
              process.env.PUBLIC_URL +
              "/img/sponsors/myrealtrip/logo-myrealtrip.png"
            }
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/myrealtrip/logo-myrealtrip@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/myrealtrip/logo-myrealtrip@3x.png 3x`}
            style={{
              width: "55%",
              marginTop: "7px",
              marginBottom: "34px"
            }}
          /> */}

          <img
            src={
              process.env.PUBLIC_URL +
              "/img/sponsors/kakaopay/logo-kakaopay.png"
            }
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/kakaopay/logo-kakaopay@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/kakaopay/logo-kakaopay@3x.png 3x`}
            style={{
              width: "35%",
            }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/vcnc/logo-vcnc.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/sponsors/vcnc/logo-vcnc@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/vcnc/logo-vcnc@3x.png 3x`}
            style={{
              width: "35%",
            }}
          />
        </div>
      </div>
    </Element>
  );
};

export default Sponsor;

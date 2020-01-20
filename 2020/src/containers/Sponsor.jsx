import React from "react";
import styles from "../styles/Sponsor.module.scss";
import { Element } from "react-scroll";

const Sponsor = props => {
  return (
    <Element name="sponsor" className={styles.root}>
      <div className={styles.title}>sponsor</div>
      <div className={styles.list}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-diamond.png"}
            alt=""
            srcSet=""
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/toss.svg"}
            alt=""
            srcSet=""
            style={{ width: "50%", marginTop: "15px", marginBottom: "50px" }}
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-platinum.png"}
            alt=""
            srcSet=""
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/heydealer.png"}
            alt=""
            srcSet=""
            style={{
              width: "40%",
              marginTop: "20px"
            }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/line.png"}
            alt=""
            srcSet=""
            style={{ width: "33%" }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/remember.png"}
            alt=""
            srcSet=""
            style={{ marginTop: "10px", marginBottom: "55px" }}
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-gold.png"}
            alt=""
            srcSet=""
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/강남언니.svg"}
            alt=""
            srcSet=""
            style={{
              width: "43%",
              marginTop: "25px"
            }}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/naver.png"}
            alt=""
            srcSet=""
            style={{
              width: "43%",
              marginTop: "15px"
            }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/myrealtrip.png"}
            alt=""
            srcSet=""
            style={{
              width: "55%",
              marginTop: "7px",
              marginBottom: "34px"
            }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/kakaopay.png"}
            alt=""
            srcSet=""
            style={{
              width: "40%"
            }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/sponsors/vcnc.png"}
            alt=""
            srcSet=""
            style={{
              width: "44%"
            }}
          />
        </div>
      </div>
    </Element>
  );
};

export default Sponsor;

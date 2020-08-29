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
            style={{ width: "80%", marginBottom: "120px" }}
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
              marginBottom: "120px",
            }}
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-gold/btn-gold.png"}
            alt=""
            srcSet={`${process.env.PUBLIC_URL}/img/btn-gold/btn-gold@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/btn-gold/btn-gold@3x.png 3x`}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/sponsors/kakaopay/logo-kakaopay.png"
              }
              alt=""
              srcSet={`${process.env.PUBLIC_URL}/img/sponsors/kakaopay/logo-kakaopay@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/kakaopay/logo-kakaopay@3x.png 3x`}
              style={{ marginRight: 50 }}
            />

            <img
              src={process.env.PUBLIC_URL + "/img/sponsors/vcnc/logo-vcnc.png"}
              alt=""
              srcSet={`${process.env.PUBLIC_URL}/img/sponsors/vcnc/logo-vcnc@2x.png 2x,
            ${process.env.PUBLIC_URL}/img/sponsors/vcnc/logo-vcnc@3x.png 3x`}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Sponsor;

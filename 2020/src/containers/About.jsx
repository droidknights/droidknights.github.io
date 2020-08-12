import React, { useEffect } from "react";
import styles from "../styles/About.module.scss";
import { Element } from "react-scroll";
import { useWindowSize, useRouter } from "../utils/hooks";
import { useTranslation } from "react-i18next";

const About = (props) => {
  const size = useWindowSize();
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Element name="about" className={styles.root}>
      {/* <img src={process.env.PUBLIC_URL + "/img/2019-pic.png"} alt="" /> */}

      <div>
        <span className={styles.high}>{t("Droid")}</span>
        {t("About01")}
        <br />
        {t("About02")} {size.width <= 425 && <br />}
        {t("About03")}
        {size.width <= 425 && <br />}
        {t("About04")}
      </div>

      <img
        src={process.env.PUBLIC_URL + "/img/img-planet.svg"}
        alt=""
        srcSet=""
      />

      <div className={styles.btns}>
        <a
          href="https://www.wanted.co.kr/events/droidknights2020"
          target="__blank"
          style={{ backgroundColor: " #2C5BF2" }}
        >
          참가 신청하기
        </a>

        <a
          href="https://www.youtube.com/c/DroidKnights"
          target="__blank"
          style={{ backgroundColor: " #FF0000" }}
        >
          유튜브 링크
        </a>
      </div>
    </Element>
  );
};

export default About;

import React from "react";
import styles from "../styles/About.module.scss";
import { Element } from "react-scroll";
import { useWindowSize } from "../utils/hooks";
import { useTranslation } from "react-i18next";

// TODO: 아래쪽에 살짝의 마진
const About = props => {
  const size = useWindowSize();
  const { t } = useTranslation();

  return (
    <Element name="about" className={styles.root}>
      <img src={process.env.PUBLIC_URL + "/img/2019-pic.png"} alt="" />

      <div className={styles.overlay}>
        <div>
          <span className={styles.high}>{t("Droid")}</span>
          {t("About01")}
          <br />
          {t("About02")} {size.width <= 425 && <br />}
          {t("About03")}
          {size.width <= 425 && <br />}
          {t("About04")}
        </div>
      </div>
    </Element>
  );
};

export default About;

import React from "react";
import styles from "../styles/Index.module.scss";
import { Element } from "react-scroll";

import { useTranslation } from "react-i18next";
// FIXME: 아래쪽에 살짝의 마진 (About이랑 살짝 균격이 있음)
const Index = props => {
  const { t, i18n } = useTranslation();
  return (
    <Element
      name="idx"
      className={styles.root}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg_star.svg)`
      }}
    >
      <img
        className={styles.title}
        src={process.env.PUBLIC_URL + "/img/img_title.svg"}
        alt=""
        srcSet=""
      />
      <div className={styles.desc}>
        <div>{t("Date")}</div>
        <div>{t("Place")}</div>
      </div>
      <div className={styles.img}>
        <img
          src={process.env.PUBLIC_URL + "/img/img_droid_space.svg"}
          alt=""
          srcSet=""
        />

        <img
          src={process.env.PUBLIC_URL + "/img/img_shooter.svg"}
          alt=""
          srcSet=""
        />
      </div>
    </Element>
  );
};

export default Index;

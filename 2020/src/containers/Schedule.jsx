import React from "react";
import styles from "../styles/Schedule.module.scss";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Schedule = props => {
  const { t } = useTranslation();
  return (
    <Element name="schedule" className={styles.root}>
      <div className={styles.desc}>{t("Comming Soon Session")}</div>
      <div className={styles.coming}>COMING SOON</div>
      <img
        src={process.env.PUBLIC_URL + "/img/img-planet.svg"}
        alt=""
        srcSet=""
      />
    </Element>
  );
};

export default Schedule;

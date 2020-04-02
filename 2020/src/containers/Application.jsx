import React, { useEffect } from "react";
import styles from "../styles/Application.module.scss";
import { Element } from "react-scroll";
import { useWindowSize, useRouter } from "../utils/hooks";
import { useTranslation } from "react-i18next";

const Application = props => {
  const size = useWindowSize();
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Element name="application" className={styles.root}>
      <div className={styles.title}>App</div>
      <div className={styles.desc}>
        {t("app_desc_1")} <br />
        {t("app_desc_2-1")}
        <span>{t("app_desc_2-2")}</span>
        {t("app_desc_2-3")}
        <br />
        {t("app_desc_3")}
        <br />
      </div>
      <img src={process.env.PUBLIC_URL + "/img/icon_app.svg"} alt="" />
      <div className={styles.btnBox}>
        <a onClick={() => alert(t("ready"))}>{t("app_download")}</a>
        <a
          href="https://github.com/droidknights/DroidKnights2020_App"
          target="__blank"
        >
          {t("app_github")}
        </a>
      </div>
    </Element>
  );
};

export default Application;

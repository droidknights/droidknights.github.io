import React from "react";
import { loadNavermapsScript } from "react-naver-maps";
import styles from "../styles/Location.module.scss";
import { Element } from "react-scroll";
import { useWindowSize } from "../utils/hooks";
import { useTranslation } from "react-i18next";

const Location = props => {
  const { t } = useTranslation();
  const size = useWindowSize();
  React.useEffect(() => {
    var map = null;

    loadNavermapsScript({ ncpClientId: "0x78ib6nmi" }).then(navermaps => {
      map = new navermaps.Map("map", {
        useStyleMap: true,
        center: new navermaps.LatLng(37.51319, 127.05845),
        zoom: 16
      });
      new navermaps.Marker({
        position: new navermaps.LatLng(37.51319, 127.05845),
        map: map
      });
    });
  }, []);
  return (
    <Element name="location" className={styles.root}>
      <div className={styles.title}>location</div>
      <div className={styles.desc}>
        <span>{t("Place")}</span> <br />
        {t("Place Detail")}
      </div>
      <div
        id="map" // default: react-naver-map
        style={{
          margin: "34px 0",
          width: size.width <= 425 ? "100%" : "50%",
          height: size.width <= 425 ? "300px" : "400px",
          transform: "translateX(-50%)",
          left: "50%"
        }}
      ></div>
    </Element>
  );
};

export default Location;

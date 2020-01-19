import React from "react";
import { loadNavermapsScript } from "react-naver-maps";
import styles from "../styles/Location.module.scss";
import { Element } from "react-scroll";
import { useWindowSize } from "../utils/hooks";

const Location = props => {
  const size = useWindowSize();
  React.useEffect(() => {
    var map = null;

    loadNavermapsScript({ ncpClientId: "0x78ib6nmi" }).then(navermaps => {
      map = new navermaps.Map("map", {
        useStyleMap: true,
        center: new navermaps.LatLng(37.5117818, 127.0592741),
        zoom: 16
      });
      new navermaps.Marker({
        position: new navermaps.LatLng(37.5117818, 127.0592741),
        map: map
      });
    });
  }, []);
  return (
    <Element name="location" className={styles.root}>
      <div className={styles.title}>location</div>
      <div className={styles.desc}>
        <span>코엑스 아셈볼룸 2F</span> {size.width <= 425 && <br />}서울특별시
        강남구 영동대로 513 (삼성동, 코엑스)
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

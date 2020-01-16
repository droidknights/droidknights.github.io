import React from "react";
import { NaverMap, Marker } from "react-naver-maps";
import styles from "../styles/Location.module.scss";

const Location = props => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>location</div>
      <div className={styles.desc}>
        <span>코엑스 아셈볼룸 2F</span> 서울특별시 강남구 영동대로 513 (삼성동,
        코엑스)
      </div>
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          margin: "34px 0",
          width: "50%",
          height: "400px",
          transform: "translateX(-50%)",
          left: "50%"
        }}
        defaultCenter={{ lat: 37.5117818, lng: 127.0592741 }}
        defaultZoom={11}
      >
        <Marker position={{ lat: 37.5117818, lng: 127.0592741 }} />
      </NaverMap>
    </div>
  );
};

export default Location;

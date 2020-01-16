import React from "react";
import styles from "../styles/Schedule.module.scss";

const Schedule = props => {
  return (
    <div className={styles.root}>
      <div className={styles.desc}>2월중에 세션이 공개됩니다.</div>
      <div className={styles.coming}>COMING SOON</div>
      <img
        src={process.env.PUBLIC_URL + "/img/img-planet.svg"}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Schedule;

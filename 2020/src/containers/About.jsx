import React from "react";
import styles from "../styles/About.module.scss";

// TODO: 아래쪽에 살짝의 마진
const About = props => {
  return (
    <div className={styles.root}>
      <img
        src={process.env.PUBLIC_URL + "/img/2019-pic.png"}
        alt=""
        srcset=""
      />

      <div className={styles.overlay}>
        <div>
          <span className={styles.high}>드로이드나이츠</span>는 <br />
          기술 세션으로 개발자들의 경험을 공유하는 안드로이드 컨퍼런스 입니다.
        </div>
      </div>
    </div>
  );
};

export default About;

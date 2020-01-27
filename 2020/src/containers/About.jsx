import React from "react";
import styles from "../styles/About.module.scss";
import { Element } from "react-scroll";
import { useWindowSize } from "../utils/hooks";

// TODO: 아래쪽에 살짝의 마진
const About = props => {
  const size = useWindowSize();

  return (
    <Element name="about" className={styles.root}>
      <img
        src={process.env.PUBLIC_URL + "/img/2019-pic.jpg"}
        alt=""
        srcSet=""
      />

      <div className={styles.overlay}>
        <div>
          <span className={styles.high}>드로이드나이츠</span>는 <br />
          기술 세션으로 개발자들의 경험을 공유하는 {size.width <= 425 && <br />}
          안드로이드 컨퍼런스 입니다.
        </div>
      </div>
    </Element>
  );
};

export default About;

import React from "react";
import styles from "../styles/ComingSoon.module.scss";

const ComingSoon = props => {
  return (
    <div className={styles.root}>
      <div className={styles.desc}>
        오직 안드로이드 개발자들을 위한 컨퍼런스 <br />
        드로이드 나이츠 !!
      </div>
      <div className={styles.coming}>COMING SOON</div>
    </div>
  );
};

export default ComingSoon;

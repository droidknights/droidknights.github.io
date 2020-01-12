import React from "react";
import styles from "../styles/Index.module.scss";

const Index = props => {
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg_star.svg)`
      }}
    >
      <img
        className={styles.title}
        src={process.env.PUBLIC_URL + "/img/img_title.svg"}
        alt=""
        srcset=""
      />
      <div className={styles.desc}>
        <div>2020.04.06</div>
        <div>코엑스 아셈볼룸 2층</div>
      </div>
      <div className={styles.img}>
        <img
          src={process.env.PUBLIC_URL + "/img/img_droid_space.png"}
          alt=""
          srcset=""
        />

        <img
          src={process.env.PUBLIC_URL + "/img/img_shooter.svg"}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Index;

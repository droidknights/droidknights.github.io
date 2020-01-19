import React from "react";
import styles from "../styles/Sponsor.module.scss";
import { Element } from "react-scroll";

const Sponsor = props => {
  return (
    <Element name="sponsor" className={styles.root}>
      <div className={styles.title}>sponsor</div>
      <div className={styles.list}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-platinum.svg"}
            alt=""
            srcSet=""
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-gold.svg"}
            alt=""
            srcSet=""
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-silver.svg"}
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </Element>
  );
};

export default Sponsor;

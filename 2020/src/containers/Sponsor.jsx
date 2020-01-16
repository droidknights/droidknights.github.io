import React from "react";
import styles from "../styles/Sponsor.module.scss";

const Sponsor = props => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>sponsor</div>
      <div className={styles.list}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-platinum.svg"}
            alt=""
            srcset=""
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-gold.svg"}
            alt=""
            srcset=""
          />
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/btn-silver.svg"}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

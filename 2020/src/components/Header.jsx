import React from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <span>
          <Link to="/">Droid knights</Link>
        </span>
      </div>
      <nav>
        <span>
          <Link to="/">about</Link>
        </span>
        <span>
          <Link to="/">schedule</Link>
        </span>
        <span>
          <Link to="/">location</Link>
        </span>
        <span>
          <Link to="/">sponsor</Link>
        </span>
        <span>
          <Link to="/">organizer</Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;

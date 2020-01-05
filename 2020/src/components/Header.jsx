import React from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <span>
          <Link to="/2020/">Droid knights</Link>
        </span>
      </div>
      <nav>
        <span>
          <Link to="/2020/">about</Link>
        </span>
        <span>
          <Link to="/2020/">schedule</Link>
        </span>
        <span>
          <Link to="/2020/">location</Link>
        </span>
        <span>
          <Link to="/2020/">sponsor</Link>
        </span>
        <span>
          <Link to="/2020/">organizer</Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;

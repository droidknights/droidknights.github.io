import React from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "react-scroll";

const Header = props => {
  return (
    <div
      className={styles.root}
      style={{
        top: props.isShow ? 0 : "-100px"
      }}
    >
      <div className={styles.title}>
        <span>
          <Link to="idx" smooth={true} offset={-160} duration={500}>
            Droid knights
          </Link>
        </span>
      </div>
      <nav>
        <span>
          <Link to="about" smooth={true} offset={-50} duration={500}>
            about
          </Link>
        </span>
        <span>
          <Link to="schedule" smooth={true} offset={-50} duration={500}>
            schedule
          </Link>
        </span>
        <span>
          <Link to="location" smooth={true} offset={-50} duration={500}>
            location
          </Link>
        </span>
        <span>
          <Link to="sponsor" smooth={true} offset={-50} duration={500}>
            sponsor
          </Link>
        </span>
        <span>
          <Link to="organizer" smooth={true} offset={-50} duration={500}>
            organizer
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;

import React, { useEffect } from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "react-scroll";
import { useRouter } from "../utils/hooks";
import i18next from "i18next";

const Header = props => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, []);

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
      <div>
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
        </nav>
        <div className={styles.tool}>
          <span
            className={router.query.lng === "ko" ? styles.focus : ""}
            onClick={() => {
              router.replace("/2020?lng=ko");
              i18next.changeLanguage("ko");
            }}
          >
            KO
          </span>
          <span>/</span>
          <span
            className={router.query.lng === "en" ? styles.focus : ""}
            onClick={() => {
              router.replace("/2020?lng=en");
              i18next.changeLanguage("en");
            }}
          >
            EN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

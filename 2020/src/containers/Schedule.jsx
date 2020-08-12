import React from "react";
import styles from "../styles/Schedule.module.scss";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Schedule = (props) => {
  const { t } = useTranslation();
  return (
    <Element name="schedule" className={styles.root}>
      <div className={styles.live}>
        <div className={styles.topBar}>
          <div>
            <div>9월 5일(토)</div>
            <div className={styles.bold}>LIVE 세션 소개</div>
          </div>
          <div>* ZOOM으로 진행됩니다.</div>
        </div>

        <div className={styles.speakerBox}>
          <SpeakerItem
            img="강사룡.png"
            name="강사룡"
            belong="Google Japan"
            title="안드로이드 아키텍처 총정리 2020"
          />
          <SpeakerItem
            img="드로이드.svg"
            name="김범준"
            belong="쿠팡"
            title="어려운 상태관리! 프로그램에 위임시키기"
          />
          <SpeakerItem
            img="배필주.jpg"
            name="배필주"
            belong="쿠팡"
            title="Find ViewBinding View를 바인딩하는 모든 방법"
          />
        </div>
      </div>

      <div className={styles.record}>
        <div className={styles.topBar} style={{ alignItems: "flex-start" }}>
          <div>
            <div className={styles.bold}>세션 순차 공개</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <div>* DroidKnights Youtube 채널</div>
            <div style={{ color: "#f00" }}>구독! 좋아요!</div>
          </div>
        </div>

        <div className={styles.subTopBar}>1주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="권태환.jpg"
            name="권태환"
            belong="카카오페이"
            title="Effective Kotlin을 알아보자"
          />
          <SpeakerItem2
            img1="이성원.jpg"
            img2="유영혁.jpg"
            name="이성원&유영혁"
            belong="버즈빌"
            title="레거시에서 멀티모듈 시스템까지 A to Z 실전 적용기"
          />
          <SpeakerItem name="TBD" />
        </div>

        <div className={styles.subTopBar}>2주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="안성용.jpg"
            name="안성용"
            belong="네이버 웹툰"
            title="Android UI에 Animation 들이붓기"
          />
          <SpeakerItem
            img="옥수환.png"
            name="옥수환"
            belong="네이버 밴드"
            title="Hilt와 함께하는 안드로이드 의존성 주입"
          />
          <SpeakerItem
            img="이승원_3.jpg"
            name="이승원"
            belong="LINE"
            title=" Android 비디오 편집의 silver bullet을 찾아서"
          />
        </div>

        <div className={styles.subTopBar}>3주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="윤승용.png"
            name="윤승용"
            belong="Styleshare"
            title="Declarative UI의 이론과 실제"
          />
          <SpeakerItem
            img="박성철.jpg"
            name="박성철"
            belong="쿠팡"
            title="Android Modularization"
          />
          <SpeakerItem
            img="황인성.jpg"
            name="황인성"
            belong="카카오"
            title=" Custom Lint 개발기"
          />
        </div>

        <div className={styles.subTopBar}>4주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="최재호.jpg"
            name="최재호"
            belong="마이리얼트립"
            title=" MVI 아키텍처 적용기"
          />
          <SpeakerItem
            name="Garima Jain"
            belong="Over"
            title=" A LUT (lot) of image filters on Android"
          />
          <SpeakerItem display="none" />
        </div>
      </div>
    </Element>
  );
};

const SpeakerItem = (props) => {
  return (
    <div
      className={styles.speakerItem}
      style={{ visibility: props.display === "none" ? "hidden" : "visible" }}
    >
      <div className={styles.imgBox}>
        <img
          src={
            process.env.PUBLIC_URL +
            `/img/speakers/${props.img || "드로이드.svg"}`
          }
          alt=""
        />
      </div>
      <div className={styles.textBox}>
        <div className={styles.name}>{props.name}</div>

        <div className={styles.belong}>{props.belong}</div>

        <div className={styles.title}>{props.title}</div>
      </div>
      {/* <div className={styles.sessionBtn}>
        <img src={process.env.PUBLIC_URL + "/img/session.svg"} alt="" />
        <div>세션소개</div>
      </div> */}
    </div>
  );
};

const SpeakerItem2 = (props) => {
  return (
    <div
      className={styles.speakerItem}
      style={{ visibility: props.display === "none" ? "hidden" : "visible" }}
    >
      <div className={styles.imgBoxWrapper}>
        <div className={styles.imgBox}>
          <div />
          <img
            src={
              process.env.PUBLIC_URL +
              `/img/speakers/${props.img1 || "드로이드.svg"}`
            }
            alt=""
          />
        </div>
        <div className={styles.imgBox}>
          <div />
          <img
            src={
              process.env.PUBLIC_URL +
              `/img/speakers/${props.img2 || "드로이드.svg"}`
            }
            alt=""
          />
        </div>
      </div>
      <div className={styles.textBox}>
        <div className={styles.name}>{props.name}</div>

        <div className={styles.belong}>{props.belong}</div>

        <div className={styles.title}>{props.title}</div>
      </div>
      {/* <div className={styles.sessionBtn}>
        <img src={process.env.PUBLIC_URL + "/img/session.svg"} alt="" />
        <div>세션소개</div>
      </div> */}
    </div>
  );
};

export default Schedule;

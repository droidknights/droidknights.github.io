import React, { useState } from "react";
import styles from "../styles/Schedule.module.scss";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Schedule = (props) => {
  const { t } = useTranslation();

  // const [isShowDialog, setIsShowDialog] = useState(false);
  const [dialogItem, setDialogItem] = useState({
    title: "",
    subTitle: "",
    desc: "",
    isShow: false,
  });

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
            onClickSessionBtn={() => {
              setDialogItem({
                title: "안드로이드 아키텍쳐 총정리 2020",
                subTitle: "강사룡 / Google Japan",
                desc:
                  "경력 20년차 개발자. 미국 창업 도중 모바일 개발을 접한 이후 다양한 설계 방식을 모바일 환경에 시도해옴. 최근까지 IBM iX Japan에서 기술 컨설팅을 담당했고, 5월 Google Japan 입사를 앞두고 현재 휴식 중.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            img="김범준.png"
            name="김범준"
            belong="쿠팡"
            title="어려운 상태관리! 프로그램에 위임시키기"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "어려운 상태관리! 프로그램에 위임시키기",
                subTitle: "김범준 / 쿠팡",
                desc:
                  "레이니스트에서 Banksalad 서비스를 개발하는 김범준이라고 합니다. 간결하고 유지보수성이 높은 코드를 작성하는데 많은 관심이 있습니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            img="배필주.jpg"
            name="배필주"
            belong="쿠팡"
            title="Find ViewBinding View를 바인딩하는 모든 방법"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Find ViewBinding View를 바인딩하는 모든 방법",
                subTitle: "배필주 / 쿠팡",
                desc:
                  "2012년 사회 첫 시작을 안드로이드 개발로 시작해서, 현재는 쿠팡에서 안드로이드 서비스에 힘을 보태고 있습니다. 기술을 나누는 것을 좋아하는 GDG 인천의 운영진입니다.",
                isShow: true,
              });
            }}
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
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Effective Kotlin을 알아보자",
                subTitle: "권태환 / 카카오페이",
                desc:
                  "8년차 안드로이드 개발자로 GDG Seoul 운영진 활동을 하고 있습니다. 꿈 많은 개발자가 되자! 블로그를 통해 안드로이드 개발에 관련한 다양한 글을 비주기로 업로드하고 있으며, 현재는 카카오페이에서 안드로이드 개발을 하고 있습니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem2
            img1="이성원.jpg"
            img2="유영혁.jpg"
            name="이성원&유영혁"
            belong="버즈빌"
            title="레거시에서 멀티모듈 시스템까지 A to Z 실전 적용기"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "레거시에서 멀티모듈 시스템까지 A to Z 실전 적용기",
                subTitle: "이성원&유영혁 / 버즈빌",
                desc:
                  "현재 애드테크 컴퍼니 버즈빌에서 Chief Architect 역할을 맡고 있습니다. 이전에는 울트라캡숑과 42컴퍼니의 대표이자 공동 창업자로서 다양한 안드로이드 서비스를 개발 및 운영하였습니다. 소프트웨어 아키텍처에 관심이 많으며, 개인 블로그를 통해서 이에 관한 내용과 개발/연구 중 얻은 인사이트를 공유하고 있습니다.\n\n안드로이드 개발을 시작하여, 현재 애드테크 버즈빌에서 Android Developer 역할을 수행하고 있습니다. 좋은 시스템은 어떻게 만들어야 하는지에 대해 관심이 많으며, 최근에는 안드로이드 앱의 모듈화에 관심을 갖고 있습니다.",
                isShow: true,
              });
            }}
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
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Android UI에 Animation 들이붓기",
                subTitle: "안성용 / 네이버 웹툰",
                desc:
                  "Android UI, UX, FRW에 관심있는 안드로이드 개발자입니다.\n지금은 네이버웹툰에서 앱을 개발하고 있습니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            img="옥수환.png"
            name="옥수환"
            belong="네이버 밴드"
            title="Hilt와 함께하는 안드로이드 의존성 주입"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Hilt와 함께하는 안드로이드 의존성 주입",
                subTitle: "옥수환 / 네이버 밴드",
                desc:
                  "찰스의 안드로이드' 블로그를 운영하고 있으며, 현재 네이버 밴드에서 안드로이드 개발자로 일하고 있습니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            img="이승원_3.jpg"
            name="이승원"
            belong="LINE"
            title=" Android 비디오 편집의 silver bullet을 찾아서"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Android 비디오 편집의 silver bullet을 찾아서",
                subTitle: "이승원 / LINE",
                desc:
                  "안드로이드 개발 6년차로 LINE Gallery project 소속입니다. Gallery project는 LINE 글로벌 사용자들이 멀티미디어를 대화방, 타임라인 등에서 친구들에게 공유할 때, 멀티미디어를 시청하고 편집하는 유저 경험을 더 좋게 만들고자 매일 노력합니다. 특히 저는 사용자들이 멀티미디어를 통해 머릿속에 있는 감정을 그대로 표현하고 친구들과 더 풍부하게 소통할 수 있도록 만드는 것이 목표입니다. ",
                isShow: true,
              });
            }}
          />
        </div>

        <div className={styles.subTopBar}>3주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="윤승용.png"
            name="윤승용"
            belong="Styleshare"
            title="Declarative UI의 이론과 실제"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Declarative UI의 이론과 실제",
                subTitle: "윤승용 / Styleshare",
                desc:
                  "현재 StyleShare에서 안드로이드 개발자로 일하고 있습니다. 유저들에게 더 좋은 제품을 전달하는 것과 즐겁게 협업하는 문화에 관심이 많습니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            img="박성철.jpg"
            name="박성철"
            belong="쿠팡"
            title="Android Modularization"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Android Modularization",
                subTitle: "박성철 / 쿠팡",
                desc:
                  "이커머스 쿠팡앱을 담당하고 있는 안드로이드 개발자로서 프로젝트의 안정성과 생산성을 향상시키기 위한 아키텍처를 설계하고 앱 사용자들의 편의성을 높이기 위해 노력하고 있습니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            img="황인성.jpg"
            name="황인성"
            belong="카카오"
            title=" Custom Lint 개발기"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Custom Lint 개발기",
                subTitle: "황인성 / 카카오",
                desc: "카카오에서 카카오톡 안드로이드 개발을 맡고 있습니다.",
                isShow: true,
              });
            }}
          />
        </div>

        <div className={styles.subTopBar}>4주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="최재호.jpg"
            name="최재호"
            belong="마이리얼트립"
            title="MVI 아키텍처 적용기"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "MVI 아키텍처 적용기",
                subTitle: "최재호 / 마이리얼트립",
                desc:
                  "마이리얼트립에서 내면의 평화를 찾기 위한 여행을 하고 있는 11년차 안드로이드 개발자입니다. 과거 엔씨소프트에서 모바일 메신저와 인 게임 커뮤니티를 개발한 경험이 있습니다. 알면 알 수록 모르는 것이 많다는걸 느끼며 즐거워하고 오늘의 내가 과거의 내 코드를 비웃을 수 있도록 항상 깨어있는 감각을 유지하기 위해 노력합니다.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem
            name="Garima Jain"
            belong="Over"
            title="A LUT (lot) of image filters on Android"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "A LUT (lot) of image filters on Android",
                subTitle: "Garima Jain / Over",
                desc:
                  "Garima Jain, recent Android GDE, also known as @ragdroid is working as an Android Engineer at Over. Previously she has worked with Fueled Noida and Bharti Soft Bank (Hoppr, Hike). She is also an international speaker and an active technical blogger. She has done her post-graduation from IIT Jodhpur.",
                isShow: true,
              });
            }}
          />
          <SpeakerItem display="none" />
        </div>
      </div>

      <Dialog
        title={dialogItem.title}
        desc={dialogItem.desc}
        subTitle={dialogItem.subTitle}
        isShow={dialogItem.isShow}
        onDismiss={() => {
          setDialogItem({
            title: "",
            subTitle: "",
            desc: "",
            isShow: false,
          });
        }}
      />
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
      <div className={styles.sessionBtn} onClick={props.onClickSessionBtn}>
        <img src={process.env.PUBLIC_URL + "/img/img_droid_head.svg"} alt="" />
        <div>세션소개</div>
      </div>
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
      <div className={styles.sessionBtn} onClick={props.onClickSessionBtn}>
        <img src={process.env.PUBLIC_URL + "/img/img_droid_head.svg"} alt="" />
        <div>세션소개</div>
      </div>
    </div>
  );
};

const Dialog = (props) => {
  return (
    <div
      className={styles.dialog}
      style={{ display: props.isShow ? "flex" : "none" }}
      onClick={props.onDismiss}
    >
      <div className={styles.container}>
        <div className={styles.subTitle}>{props.subTitle}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.desc}>
          {props.desc.split("\n").map((v) => (
            <>
              <span>{v}</span>
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;

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
    session: "",
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
          <div>* Youtube Live로 진행됩니다.</div>
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
                  "!!경력 20년차 개발자. 미국 창업 과정에서 모바일 개발을 접한 이후 다양한 설계 방식을 모바일 환경에 시도해옴. 현재는 Google Japan에서 한국과 일본의 파트너 사들을 대상으로 기술 컨설팅을 담당하고 있음",
                isShow: true,
                session:
                  "2019년 안드로이드 아키텍처에 일어난 중요한 변화들을 다시 한 번 짚어보고, 2020년에는 대규모 앱을 만들기 위한 설계 전략이 어떻게 진화하고 있는지를 짚어봅니다.\n 주요 키워드: #Clean Acrhitecture #DDD Lite #AAC #MVVM #Redux #RIBs",
              });
            }}
          />
          <SpeakerItem
            img="김범준.jpg"
            name="김범준"
            belong="쿠팡"
            title="어려운 상태관리! 프로그램에 위임시키기"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "어려운 상태관리! 프로그램에 위임시키기",
                subTitle: "김범준 / 쿠팡",
                desc:
                  "!!간결하고 유연한 코드를 지향하는 개발자 김범준입니다.\n현재 쿠팡에서 안드로이드 개발자로 일하고 있습니다. :)",
                isShow: true,
                session:
                  "화면의 구성이 복잡해지면 복잡해질 수록 프로그래머가 관리해야 할 상태 또한 비례해서 많아집니다.\n그럴수록 코드를 이해하기도 어려워지고 이는 점점 유지보수에 더 많은 어려움이 생기게 되죠.\n이렇게 관리하기 힘든 상태를 꼭 휴먼이 관리해야 할까요?.?  관리하기 힘든 상태 녀석들을 프로그램에 위임시켜봅시다!.",
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
                  "!!2012년 사회 첫 시작을 안드로이드 개발로 시작해서, 현재는 쿠팡에서 안드로이드 서비스에 힘을 보태고 있습니다. 기술을 나누는 것을 좋아하는 GDG 인천의 운영진입니다.",
                isShow: true,
                session:
                  "Google io 2019에서는 View Binding이 발표 되었습니다. View를 코드에서 바인딩하기 위한 방법도 여러가지가 되었습니다. View를 코드에서 쓰기 위한 가장 기본적인 FindViewbyId 부터 시작해서, Data Binding과 View Binding, 그리고 Butter Knife, Kotlin synthetic에서 뷰를 바인딩하기 위해 각각의 라이브러리 내부의 코드 레벨에서 어떻게 다른 방법으로 바인딩 하고 있는지 비교하고 차이점을 알아봅니다.",
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
                  "!!8년차 안드로이드 개발자로 GDG Seoul 운영진 활동을 하고 있습니다. 꿈 많은 개발자가 되자! 블로그를 통해 안드로이드 개발에 관련한 다양한 글을 비주기로 업로드하고 있으며, 현재는 카카오페이에서 안드로이드 개발을 하고 있습니다.",
                isShow: true,
                session:
                  "Effective Kotlin을 통해 더 나은 코드 접근법을 알아보려한다. 읽기 쉽고 협업하기 좋은 코드는 어떤게 있을지 예를 통해 정답은 아니지만 좀 더 좋은 코드로 다가가기 위한 방법을 알아보자.\n\n본 내용은 Effective Kotlin 책의 일부를 포함하고 있다.",
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
                  "이성원: !!현재 애드테크 컴퍼니 버즈빌에서 Chief Architect 역할을 맡고 있습니다. 이전에는 울트라캡숑과 42컴퍼니의 대표이자 공동 창업자로서 다양한 안드로이드 서비스를 개발 및 운영하였습니다. 소프트웨어 아키텍처에 관심이 많으며, 개인 블로그를 통해서 이에 관한 내용과 개발/연구 중 얻은 인사이트를 공유하고 있습니다.\nhttps://medium.com/@ssowonny\nhttps://dev.buzzvil.com/docs/buzzvil-architecture\n\n!!유영혁: !!현대 자동차 그룹에서 안드로이드 개발을 시작하여, 현재 애드테크 버즈빌에서 Android Developer 역할을 수행하고 있습니다. 좋은 시스템은 어떻게 만들어야 하는지에 대해 관심이 많으며, 최근에는 안드로이드 앱의 모듈화에 관심을 갖고 있습니다.\nhttps://dev.buzzvil.com/docs/buzzvil-architecture",
                isShow: true,
                session:
                  "Airbnb 같은 거대 서비스는 멀티 모듈을 통해 성공적으로 시스템의 복잡도를 낮춥니다. 하지만 레거시 환경을 모듈화 하는 것은 쉽지 않은 일이죠. 이 세션에서는 레거시를 멀티 모듈로 나눌 때 마주한 문제들과 이를 해결한 경험을 공유합니다.\n\n- 모듈을 나누는 기준(DDD)\n- 멀티 모듈을 위한 인프라 구성(Gradle, CI)\n- 레거시로 인한 제약과 대응 방법",
              });
            }}
          />
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
                  "!!마이리얼트립에서 내면의 평화를 찾기 위한 여행을 하고 있는 11년차 안드로이드 개발자입니다. 과거 엔씨소프트에서 모바일 메신저와 인 게임 커뮤니티를 개발한 경험이 있습니다. 알면 알 수록 모르는 것이 많다는걸 느끼며 즐거워하고 오늘의 내가 과거의 내 코드를 비웃을 수 있도록 항상 깨어있는 감각을 유지하기 위해 노력합니다.",
                isShow: true,
                session:
                  "MVI 아키텍처에 대한 개괄적인 설명과 함께 마이리얼트립 안드로이드 앱에 MVI 아키텍처를 적용한 사례를 공유합니다. 실제 적용 된 사례를 통해 MVI 아키텍처의 장점과 단점을 살펴보고 보다 쉽게 MVI 아키텍처를 적용 할 수 있도록 도와주는 오픈소스 BOX를 소개합니다.",
              });
            }}
          />
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
                  "!!Android UI, UX, FRW에 관심있는 안드로이드 개발자입니다.\n지금은 네이버웹툰에서 앱을 개발하고 있습니다.",
                isShow: true,
                session:
                  "안드로이드에는 Animation을 구현할 수 있는 다양한 방법들이 있습니다.\nAndroid Platform/Jetpack API를 이용하여\nAndroid UI/UX를 개선하는 방법을 살펴봅니다.",
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
                  "!!'아키텍처를 알면 앱 개발이 보인다' 저자로서 온라인에서는 찰스의 안드로이드(https://charlezz.com)라는 블로그를 운영하고 있습니다.\n현재는 네이버 밴드 앱 개발을 하고 있습니다.",
                isShow: true,
                session:
                  "선택이 아닌 필수가 되어버린 안드로이드 의존성주입!\n배우기 어려웠던 Dagger를 좀 더 쉽게 사용할 수 있게 해주는 Hilt를 소개합니다.",
              });
            }}
          />
          <SpeakerItem
            img="이승원.jpg"
            name="이승원"
            belong="LINE"
            title=" Android 비디오 편집의 silver bullet을 찾아서"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Android 비디오 편집의 silver bullet을 찾아서",
                subTitle: "이승원 / LINE",
                desc:
                  "!!안드로이드 개발 6년차로 LINE Gallery project 소속입니다. Gallery project는 LINE 글로벌 사용자들이 멀티미디어를 대화방, 타임라인 등에서 친구들에게 공유할 때, 멀티미디어를 시청하고 편집하는 유저 경험을 더 좋게 만들고자 매일 노력합니다. 특히 저는 사용자들이 멀티미디어를 통해 머릿속에 있는 감정을 그대로 표현하고 친구들과 더 풍부하게 소통할 수 있도록 만드는 것이 목표입니다. ",
                isShow: true,
                session:
                  "LINE 메신저에서 친구에게 비디오를 공유할 때, 비디오 사이즈를 조절하고 편집할 수 있습니다. 예를들면, 내가 촬영한 비디오에 기분 좋은 감정을 표현하고 싶을 때나 친구들에게 자랑하고 싶을 때, 비디오에 LINE 스티커, 텍스트를 올리거나 비디오를 트림할 수 있습니다. LINE에는 위의 요구사항을 만족할 수 있는 “Cruiser” 프로젝트가 있습니다. “Cruiser” 프로젝트는 비디오 사이즈 조절과 편집에 관련한 필수적인 기능을 제공하는 LINE 내부의 라이브러리입니다. 다음과 같은 기능을 제공합니다. -Android 플랫폼에서 동작합니다. -Standalong library입니다. Android MediaCodec을 이용해 다른 무거운 library를 필요로하지 않습니다. -비디오를 편집할 수 있습니다. 비디오 트림 기능을 제공하며 LINE sticker, text, doodle과 같은 이펙트 아이콘을 비디오 위에 올릴 수 있습니다. -비디오의 사이즈를 조절할 수 있습니다. 비디오의 해상도, bitrate 및 오디오의 sample rate를 변경할 수 있습니다. -비디오 포맷을 변환할 수 있습니다. 다양한 비디오 포맷을 어디에서나 재생가능한 보편적인 하나의 포맷으로 변경할 수 있습니다. 이 세션에서는 Android MediaCodec을 이용해서 Cruiser 프로젝트를 만들고 Android MediaCodec을 사용함으로써 Android의 다양한 디바이스에서 발생한 파편화를 어떻게 해결했는지에 대한 경험을 공유하려고 합니다.",
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
            title="Declarative UI 도입을 향한 여정"
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Declarative UI 도입을 향한 여정",
                subTitle: "윤승용 / Styleshare",
                desc:
                  "!!현재 StyleShare에서 안드로이드 개발자로 일하고 있습니다. 유저들에게 더 좋은 제품을 전달하는 것과 즐겁게 협업하는 문화에 관심이 많습니다.",
                isShow: true,
                session:
                  "Jetpack Compose, Flutter, Swift UI 등 UI 개발 패턴의 트랜드로 자리잡은 Declarative UI에 대해서 소개하고, 이를 스타일쉐어 서비스에 녹여내기 위해 고군분투한 경험에 대해 공유합니다.",
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
                  "!!이커머스 쿠팡앱을 담당하고 있는 안드로이드 개발자로서 프로젝트의 안정성과 생산성을 향상시키기 위한 아키텍처를 설계하고 앱 사용자들의 편의성을 높이기 위해 노력하고 있습니다.",
                isShow: true,
                session:
                  "안드로이드 프로젝트의 설계를 위한 전략들을 소개합니다.\n\n2년간의 진행되었던 쿠팡 안드로이드 모듈화 프로젝트의 적용사례를 바탕으로 수많은 코드들을 안정적이고 효율적으로 분리하여 관리하는 방안에 대해 이야기 해 보고자 합니다.",
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
                desc: "!!카카오에서 카카오톡 안드로이드 개발을 맡고 있습니다.",
                isShow: true,
                session:
                  "kotlin / java 코드에 모두 적용되는 커스텀 린트 개발기",
              });
            }}
          />
        </div>

        <div className={styles.subTopBar}>4주차</div>
        <div className={styles.speakerBox}>
          <SpeakerItem
            img="남반석.jpg"
            name="남반석"
            belong="Lawfully"
            title="Flutter로 글로벌앱 출시를 위한 꿀팁."
            onClickSessionBtn={() => {
              setDialogItem({
                title: "Flutter로 글로벌앱 출시를 위한 꿀팁.",
                subTitle: "남반석 / Lawfully",
                desc:
                  "!!안드로이드 개발 7년차, Flutter 개발 2년차 개발자입니다. 현재 스타트업 Lawfully에서 182개국 약 7만명의 유저가 사용중인 글로벌앱을 개발/관리 하고 있습니다. 프론트엔드 개발에 관심이 많아 그 외에 React 프로젝트도 참여하였고, 각 플랫폼과 언어의 장단점을 잘 녹여서 개발에 적용중입니다.",
                isShow: true,
                session:
                  "이번 발표는 Flutter에 관심이 있는 개발자, 혹은 Flutter앱을 처음 런칭하시는 분들이 참고하시면 좋은 내용으로 준비했습니다.",
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
                  "!!Garima Jain, recent Android GDE, also known as @ragdroid is working as an Android Engineer at Over. Previously she has worked with Fueled Noida and Bharti Soft Bank (Hoppr, Hike). She is also an international speaker and an active technical blogger. She has done her post-graduation from IIT Jodhpur.",
                isShow: true,
                session:
                  "In this talk, we will learn how to create image filters with LUTs (Lookup Tables) using Renderscript on Android. We will briefly look into various approaches one can take for creating filters on Android. We will then learn about the basics of LUTs and how we can use them with Renderscript for creating filters. Finally, we will focus on the challenges that we faced while implementing filters on Android with the Renderscript framework. We will try to use graphical representations wherever possible to explain all these concepts.",
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
        session={dialogItem.session}
        onDismiss={() => {
          setDialogItem({
            title: "",
            subTitle: "",
            desc: "",
            session: "",
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

        <div className={styles.session}>
          {props.session.split("\n").map((value) => (
            <>
              <span>{value}</span>
              <br />
            </>
          ))}
        </div>

        <div className={styles.sessionBtn} onClick={props.onClickSessionBtn}>
          <img
            src={process.env.PUBLIC_URL + "/img/img_droid_head_color.svg"}
            alt=""
          />
          <div>발표자 소개</div>
        </div>
        <div className={styles.desc}>
          {props.desc.split("!!").map((value, index, arr) => {
            console.log(arr.length);
            if ((index + 1) % 2 === 0) {
              return value.split("\n").map((v) => (
                <>
                  <span>{v}</span>
                  <br />
                </>
              ));
            } else {
              return <span style={{ color: "#00DEAB" }}>{value}</span>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;

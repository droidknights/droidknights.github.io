import i18n from "i18next";
import {
  initReactI18next
} from "react-i18next";

// import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = {
  en: {
    translation: {
      Droid: "DroidKnights",
      Date: "Aug 14, 2020",
      Place: "Conference Room(North) 2F COEX",
      "Comming Soon Session": "Session schedule will be announced in Jun.",
      About01: " is",
      About02: "an Android conference to share",
      About03: "advanced knowledge and experiences ",
      About04: "via tech session",
      "Place Detail": "513, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea",
      "Ticket": "Regular ticket open!",
      "app_desc_1": "Droid Knights introduction and app launch to check the session schedule!",
      "app_desc_2-1": "Become a ",
      "app_desc_2-2": "Contributor ",
      "app_desc_2-3": "of the Droid Knights app",
      "app_desc_3": "We wait for your participation!",
      "app_download": "Download the app",
      "app_github": "Go to Github",
      "ready": "Coming soon.",
    }
  },
  ko: {
    translation: {
      Droid: "드로이드나이츠",
      Date: "2020.09.05",
      Place: "코로나로 인해 온라인 스트리밍으로 진행 예정입니다.",
      "Comming Soon Session": "6월중에 세션이 공개됩니다.",
      About01: "는",
      About02: "기술 세션으로 개발자들의 경험을 공유하는",
      About03: "안드로이드 컨퍼런스 입니다.",
      About04: "",
      "Place Detail": "서울특별시 강남구 영동대로 513 (삼성동, 코엑스)",
      "Ticket": "일반티켓 오픈!",
      "app_desc_1": "드로이드나이츠 소개와 세션 스케쥴을 확인할 수 있는 앱 런칭!",
      "app_desc_2-1": "드로이드나이츠 앱의 ",
      "app_desc_2-2": "컨트리뷰터",
      "app_desc_2-3": "가 되어주세요.",
      "app_desc_3": "여러분의 참여를 기다립니다!",
      "app_download": "앱 다운로드",
      "app_github": "깃헙 바로가기",
      "ready": "준비중입니다.",
    }
  }
};

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "ko",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;

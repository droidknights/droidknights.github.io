<template>
  <div class="root">
    <div class="main">

      <!---->
      <div class="info-title">
        SESSION
      </div>
      <div class="about-container">
        <session-item
          time="10:00 ~ 10:10"
          title="오프닝"
          presenter="DroidKnights"
          detail="aa"
          introduce="introduce"
          isOpening=true></session-item>

        <session-item
          time="10:10 ~ 10:50"
          title="Compose everything with rx & kotlin"
          presenter="허재위"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="11:00 ~ 11:40"
          title="Some OK Practices in Android Development"
          presenter="황성현"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="11:50 ~ 12:15"
          title="개밥먹기 - FaceBook KeyFrame 사용해 앱에 에니메이션 적용해보기"
          presenter="이영찬"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="12:15 ~ 13:30"
          title="점심시간 (포켓몬을 잡자)"
          presenter="이영찬"
          detail="aa"
          introduce="introduce"
          isLunch=true></session-item>

        <session-item
          time="13:30 ~ 14:10"
          title="파이어베이스를 실제 모바일 백엔드로 사용 했을때 생기는 일들"
          presenter="장도훈"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="14:20 ~ 14:45"
          title="Firebase Remote Config로 배포없이 앱 운영하기"
          presenter="이승민"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="14:55 ~ 15:10"
          title="티타임"
          presenter="이영찬"
          detail="aa"
          introduce="introduce"
          isLunch=true></session-item>

        <session-item
          time="15:10 ~ 15:50"
          title="빠르고 지속적으로 전달하기: Continuous Delivery for Android"
          presenter="남상균"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="16:00 ~ 16:25"
          title="UiAutomator와 AWS Device Farm 을 활용한 UI 테스팅 자동화"
          presenter="유윤재"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="16:35 ~ 17:15"
          title="Anatomy of Realm"
          presenter="김용욱"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="17:25 ~ 18:05"
          title="안드로이드 스튜디오 플러그인 만들어보기"
          presenter="차영호"
          detail="aa"
          introduce="introduce"></session-item>

        <session-item
          time="18:05 ~ 18:25"
          title="경품추첨"
          presenter=""
          detail="aa"
          introduce="introduce"
          isLunch=true></session-item>

      </div>

      <session-place></session-place>
      <!---->

    </div>
  </div>
</template>

<script>
  import SessionItem from './SessionItem.vue'
  import SessionPlace from './SessionPlace.vue'

  export default {
    components: {
      SessionItem,
      SessionPlace
    },
    created() {
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .root {
    position: relative;
    background-color: #000;
    padding-top: 10px;
    padding-bottom: 40px;
  }

  .main {
    max-width: 1024px;
    min-width: 1024px;
    padding-left: 35px;
    padding-right: 35px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  }

  /*
  */

  .info-title {
    font-size: 34px;
    text-align: center;
    padding-top: 33px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #000;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

  .about-container {
    margin-top: 12px;
    padding-top: 16px;
    margin-bottom: 40px;
    display: block;
  }

</style>

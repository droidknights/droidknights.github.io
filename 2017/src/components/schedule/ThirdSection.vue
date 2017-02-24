<template>
  <div class="root">
    <div class="main">

      <!---->
      <div class="section-session-container">

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
            profileImage="../../assets/image/profile_hjw.jpg"
            level="상"

            detail="
안드로이드를 개발할 때 사용자의 입력(터치 등)을 받는 것과 화면을 그리는게 복잡하다고 느껴 좀 더 나은 방법으로 개발할 수 있는 방법에 대해 고민 중입니다.<br />
rx를 이용해서 input/output을 구현하는 방법에 대해 소개하고자 합니다.<br />
(여기서 input/output 은 사용자가 터치하는 것, 폰이 사람에게 보여주는/들려주는 것 등등을 이야기합니다.)"

            introduce="
안드로이드 개발자입니다. 코틀린과 Rx로 개발하는 것을 좋아합니다. <br />
https://www.meetup.com/kotlinkr/<br />
https://github.com/importre/kotlin_on_android<br />
https://github.com/importre/ready-for-production"></session-item>


          <session-item
            time="11:00 ~ 11:40"
            title="Some OK Practices in Android Development"
            presenter="황성현"
            profileImage="../../assets/image/profile_hsh.png"
            level="상"

            detail="
끊임없이 변화하고 개선하며 안드로이드 프로젝트를 운영했던 경험을 토대로 안드로이드 코드베이스 차원에서 성공적이었던 시도와 그렇지 않았던 시도 등에 대한 얘기를 나눠보고 싶습니다. 구체적으로 다뤄질 내용들은 DDD in Android(Clean Architecture), RxJava, Retrofit, Kotlin, Anko 등 현재 뱅크샐러드를 지탱하는 기술들에 대한 소개와 저의 생각을 공유하는 발표가 될 것 같습니다."

            introduce="
안녕하세요? 뱅크샐러드 서비스(https://play.google.com/store/apps/details?id=com.rainist.banksalad)를 개발하고 운영하는 레이니스트에서 CTO를 맡고있는 황성현입니다^^; 2015년 8월 GDG 서울 정기 모임에서 Google Play를 이용한 애자일의 실천에 대한 발표를 한적이 있습니다. (https://speakerdeck.com/sunghyunzz/agile-git-flow-google-play) 안드로이드 개발은 2013년도부터 시작하였고, 작년부터 Kotlin을 이용하여 사내 안드로이드 코드 베이스를 운영하고있습니다."></session-item>


          <session-item
            time="11:50 ~ 12:15"
            title="개밥먹기 - FaceBook KeyFrame 사용해 앱에 에니메이션 적용해보기"
            presenter="이영찬"
            profileImage="../../assets/image/profile_lyc.png"
            level="중하"

            detail="
개발자라면 삽질과 개밥을 먹을 줄 알아야 한다라는 것을 소개하고 그 예로 facebook 의 keyframe을 소개하여 안드로이드 앱에서 애니메이션 뷰를 적용하는 방법을 소개해보려 합니다."

            introduce="
안녕하세요. GDG에서 활동 중인 이영찬이라고 합니다. 발표경력은 사내발표 및 기타 작은 모임에서 Rx관련으로 발표한 적이 있습니다. (https://drive.google.com/open?id=0ByCgjlo38_eeX1o0ckZyMTlPUzA) 안드로이드 개발 경력은 안드로이드 5년 정도 되는 것 같습니다"></session-item>


          <session-item
            time="12:15 ~ 13:30"
            title="점심시간 (포켓몬을 잡자)"
            presenter=""
            detail=""
            introduce="introduce"
            isLunch=true></session-item>


          <session-item
            time="13:30 ~ 14:10"
            title="파이어베이스를 실제 모바일 백엔드로 사용 했을때 생기는 일들"
            presenter="장도훈"
            profileImage=""
            level="중상"

            detail="
파이어베이스를 메인 백엔드 솔루션으로 사용할때 겪었던 문제와 해결 방법을 다루고 있습니다. 호스팅, 스토리지, 백앤드 로직의 문제로, 결국 Node.js나 Java 서드파티 서버를 파이어베이스에 붙이는 2가지 디자인 패턴을 소개합니다."

            introduce="
도돌 앱을 개발했던 장도훈입니다, 인디 개발자로 다시 지내고 있습니다."></session-item>


          <session-item
            time="14:20 ~ 14:45"
            title="Firebase Remote Config로 배포없이 앱 운영하기"
            presenter="이승민"
            profileImage=""
            level="하"

            detail="
앱서비스 내에는 운영 이슈에 따라 변경되어야 할 부분이 종종 있습니다. 이 때마다 변경사항을 새롭게 배포하는 것은 사안에 비해 큰 개발 리소스와 시간을 소요합니다.<br />
<br />
Firebase의 Remote Config를 사용하면 배포없이 운영 이슈를 바로 적용할 수 있습니다. 간단한 적용부터 실제 응용 사례까지 알아봅시다."

            introduce="
드라마앤컴퍼니에서 리멤버 명함관리 서비스의 안드로이드 앱을 개발하는 이승민 입니다. 자세한 경력 및 발표경험은 링크드인 링크를 첨부합니다.<br />
<br />
https://www.linkedin.com/in/rfrost77"></session-item>


          <session-item
            time="14:55 ~ 15:10"
            title="티타임"
            presenter=""
            detail=""
            introduce=""
            isLunch=true></session-item>


          <session-item
            time="15:10 ~ 15:50"
            title="빠르고 지속적으로 전달하기: Continuous Delivery for Android"
            presenter="남상균"
            profileImage="../../assets/image/profile_ksg.jpg"
            level="상"

            detail="
최근 높은 서비스 품질을 위해 사용자의 피드백을 빠르게 반영하고, 잦은 릴리즈를 반복하는 것이 일반화되고 있습니다. 이를 위해 효율적으로 테스트와 빌드, 출시를 수행하는 것이 필수적입니다. 이번 발표에서는 fastlane과 bitrise를 이용하여 인수 테스트 자동화, 사내 베타 배포와 마켓 출시 등 릴리즈 과정을 통합하고 소규모 그룹에서도 빠르고 지속적으로 앱을 전달할 수 있는 방법을 소개하고자 합니다."

            introduce="
현재 안드로이드 첫화면 플랫폼인 캐시슬라이드의 테크리드로 일하고 있습니다. iOS와 안드로이드 초기부터 개발해 왔으며 상세한 경력은 링크드인을 첨부드립니다.<br />
https://www.linkedin.com/in/sangkyoonnam<br />
<br />
<b>주요 발표 경력은 다음과 같습니다.</b><br />
- 라즈베리파이로 크롬캐스트 만들기: 2013 Daum DevOn<br />
-그루비로 안드로이드 앱 개발하기 http://www.slideshare.net/gdgkorea/gkac-2014-nov<br />
-JUnit4와 Robolectric을 이용한 안드로이드 단위 테스트 : GDG Korea DevFair 2014<br />
- 포그라운드 서비스를 사용하며 겪은 일들: https://realm.io/kr/news/android-forground-service-cashslide/<br />
- 캐시슬라이드 Realm 적용 사례"></session-item>


          <session-item
            time="16:00 ~ 16:25"
            title="UiAutomator와 AWS Device Farm 을 활용한 UI 테스팅 자동화"
            presenter="유윤재"
            profileImage="../../assets/image/profile_yyj.jpg"
            level="상"

            detail="
많은 사람들이 자동화된 UI 테스트는 까다롭고 복잡하다는 편견을 가지고 있지만, UI 테스트를 매뉴얼하게 진행한다면 많은 시간과 비용이 소모됩니다.<br />
UiAutomator와 AWS Device Farm을 활용하면 클라우드에서 자동화된 UI 테스트를 수행하고 결과를 보고받을 수 있고 이를 통해 테스트 시간과 장비 구입 비용을 획기적으로 줄일 수 있습니다.<br />
스타트업 '숨고'에서 자동화된 UI 테스팅을 수행하며 얻은 값진 팁과 교훈을 공유합니다."

            introduce="
2010년부터 안드로이드 개발을 해왔고 3번의 스타트업 창업 경험이 있습니다. 현재는 스타트업 '숨고'에서 모바일앱 개발 리드로 일하고 있습니다."></session-item>


          <session-item
            time="16:35 ~ 17:15"
            title="Anatomy of Realm"
            presenter="김용욱"
            profileImage="../../assets/image/profile_yyj.jpg"
            level="상"

            detail="aa"

            introduce="introduce"></session-item>


          <session-item
            time="17:25 ~ 18:05"
            title="안드로이드 스튜디오 플러그인 만들어보기"
            presenter="차영호"

            detail="
* 플러그인 개발환경 설정하기<br />
* IntellJ Plugin API 살펴보기<br />
&nbsp;&nbsp;* 컴포넌트<br />
&nbsp;&nbsp;* 라이프 사이클<br />
* 플러그인 배포하기<br />
&nbsp;&nbsp;* 릴리즈 관리<br />
* 부록: kotlin으로 포팅할 때 주의할 점"

            introduce="
GDG 노예"></session-item>


          <session-item
            time="18:05 ~ 18:25"
            title="경품추첨"
            presenter=""
            detail="aa"
            introduce="introduce"
            isLunch=true></session-item>

        </div>

      </div>

      <!---->
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
    margin: 0 auto;
    background-color: black;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  }

  /*
  */

  .section-session-container {
    background-color: white;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 1px;
  }

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
    padding-top: 30px;
    display: block;
    margin-bottom: -10px;
  }

</style>

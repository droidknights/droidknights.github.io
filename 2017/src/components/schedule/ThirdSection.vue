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
            time="09:00 ~ 10:00"
            title="등록시간"
            presenter="DroidKnights"
            detail="aa"
            introduce="introduce"
            isOpening=true></session-item>


          <session-item
            time="10:00 ~ 10:10"
            title="오프닝"
            presenter="DroidKnights"
            detail="aa"
            introduce="introduce"
            isOpening=true></session-item>


          <!---->


          <session-item
            time="10:10 ~ 10:50"
            title="Compose everything with rx & kotlin"
            presenter="허재위"
            profileImage="https://droidknights.github.io/2017/src/assets/image/profile_hjw.jpg"
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


          <!---->


          <session-item
            time="11:00 ~ 11:40"
            title="Some OK Practices in Android Development"
            presenter="황성현"
            profileImage="https://droidknights.github.io/2017/src/assets/image/profile_hsh.png"
            level="상"

            detail="
끊임없이 변화하고 개선하며 안드로이드 프로젝트를 운영했던 경험을 토대로 안드로이드 코드베이스 차원에서 성공적이었던 시도와 그렇지 않았던 시도 등에 대한 얘기를 나눠보고 싶습니다. 구체적으로 다뤄질 내용들은 DDD in Android(Clean Architecture), RxJava, Retrofit, Kotlin, Anko 등 현재 뱅크샐러드를 지탱하는 기술들에 대한 소개와 저의 생각을 공유하는 발표가 될 것 같습니다."

            introduce="
뱅크샐러드를 개발하고 운영하는 레이니스트에서 CTO를 맡고있는 황성현입니다. 안드로이드 개발은 2013년도부터 시작하였고, 작년부터 Kotlin을 이용하여 사내 안드로이드 코드 베이스를 운영하고있습니다."></session-item>


          <!---->


          <session-item
            time="11:50 ~ 12:30"
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


          <!---->


          <session-item
            time="12:30 ~ 13:45"
            title="점심시간 (포켓몬을 잡자)"
            presenter=""
            detail=""
            introduce="introduce"
            isLunch=true></session-item>


          <session-item
            time="13:45 ~ 14:25"
            title="Firebase를 실제 모바일 백엔드로 사용 했을때 생기는 일들"
            presenter="장도훈"
            profileImage=""
            level="중상"

            detail="
Firebase를 메인 백엔드 솔루션으로 사용할때 겪었던 문제와 해결 방법을 다루고 있습니다. 호스팅, 스토리지, 백앤드 로직의 문제로, 결국 Node.js나 Java 서드파티 서버를 파이어베이스에 붙이는 2가지 디자인 패턴을 소개합니다."

            introduce="
도돌 앱을 개발했던 장도훈입니다, 인디 개발자로 다시 지내고 있습니다."></session-item>


          <!---->


          <session-item
            time="14:35 ~ 15:00"
            title="Firebase Remote Config로 배포없이 앱 운영하기"
            presenter="이승민"
            profileImage="https://droidknights.github.io/2017/src/assets/image/profile_lsm.jpg"
            level="하"

            detail="
앱서비스 내에는 운영 이슈에 따라 변경되어야 할 부분이 종종 있습니다. 이 때마다 변경사항을 새롭게 배포하는 것은 사안에 비해 큰 개발 리소스와 시간을 소요합니다.<br />
<br />
Firebase의 Remote Config를 사용하면 배포없이 운영 이슈를 바로 적용할 수 있습니다. 간단한 적용부터 실제 응용 사례까지 알아봅시다."

            introduce="
드라마앤컴퍼니에서 리멤버 명함관리 서비스의 안드로이드 앱을 개발하는 이승민 입니다."></session-item>


          <!---->


          <session-item
            time="15:10 ~ 15:25"
            title="티타임"
            presenter=""
            detail=""
            introduce=""
            isLunch=true></session-item>


          <!---->


          <session-item
            time="15:25 ~ 16:05"
            title="빠르고 지속적으로 전달하기: Continuous Delivery for Android"
            presenter="남상균"
            profileImage="https://droidknights.github.io/2017/src/assets/image/profile_ksg.jpg"
            level="중상"

            detail="
최근 높은 서비스 품질을 위해 사용자의 피드백을 빠르게 반영하고, 잦은 릴리즈를 반복하는 것이 일반화되고 있습니다. 이를 위해 효율적으로 테스트와 빌드, 출시를 수행하는 것이 필수적입니다. 이번 발표에서는 fastlane과 bitrise를 이용하여 인수 테스트 자동화, 사내 베타 배포와 마켓 출시 등 릴리즈 과정을 통합하고 소규모 그룹에서도 빠르고 지속적으로 앱을 전달할 수 있는 방법을 소개하고자 합니다."

            introduce="
엔비티에서 첫 화면 서비스 '캐시슬라이드'의 아키텍쳐 오너로 일하고 있습니다."></session-item>


          <!---->


          <session-item
            time="16:15 ~ 16:40"
            title="UiAutomator와 AWS Device Farm 을 활용한 UI 테스팅 자동화"
            presenter="유윤재"
            profileImage="https://droidknights.github.io/2017/src/assets/image/profile_yyj.jpg"
            level="상"

            detail="
많은 사람들이 자동화된 UI 테스트는 까다롭고 복잡하다는 편견을 가지고 있지만, UI 테스트를 매뉴얼하게 진행한다면 많은 시간과 비용이 소모됩니다.<br />
UiAutomator와 AWS Device Farm을 활용하면 클라우드에서 자동화된 UI 테스트를 수행하고 결과를 보고받을 수 있고 이를 통해 테스트 시간과 장비 구입 비용을 획기적으로 줄일 수 있습니다.<br />
스타트업 '숨고'에서 자동화된 UI 테스팅을 수행하며 얻은 값진 팁과 교훈을 공유합니다."

            introduce="
2010년부터 안드로이드 개발을 해왔고 3번의 스타트업 창업 경험이 있습니다. 현재는 스타트업 '숨고'에서 모바일앱 개발 리드로 일하고 있습니다."></session-item>


          <!---->


          <session-item
            time="16:50 ~ 17:30"
            title="Anatomy of Realm (Realm 심층 분석)"
            presenter="김용욱"
            profileImage=""
            level="상"

            detail="
Realm Java 바인드만큼 다양한 이미지로 사용자에게 전달되는 기술은 없을 것 같습니다. Realm의 구현 방식과 Realm Java의 바인드 방식을 설명하여 이해를 돕고 같이 개선해 나갈 방안을 찾는 것이 이 세션의 목표입니다."

            introduce="
Realm에서 안드로이드 바인드인 Realm Java에 참여하며 문서 지역화, 집필, 발표에도 참여하고 있습니다."></session-item>


          <!---->


          <session-item
            time="17:40 ~ 18:05"
            title="KeyFrame과 Lottie로 인터렉티브한 애니메이션을 구현해보기"
            presenter="이영찬"
            profileImage="https://droidknights.github.io/2017/src/assets/image/profile_lyc.png"
            level="중하"

            detail="
개발자라면 삽질과 개밥을 먹을 줄 알아야 한다라는 것을 소개하고 그 예로 facebook 의 keyframe을 소개하여 안드로이드 앱에서 애니메이션 뷰를 적용하는 방법을 소개해보려 합니다."

            introduce="
GDG에서 활동 중인 이영찬이라고 합니다. 안드로이드 개발 경력은 5년여 가량 됩니다"></session-item>


          <!---->


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

      <!---->
      <sponsors></sponsors>
      <!---->

    </div>
  </div>
</template>

<script>
  import SessionItem from './SessionItem.vue'
  import SessionPlace from './SessionPlace.vue'
  import Sponsors from './Sponsors.vue'

  export default {
    components: {
      SessionItem,
      SessionPlace,
      Sponsors
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
    /*min-width: 1024px;*/
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
    margin-bottom: 30px;
  }

  @media (max-width: 1100px) {
    .section-session-container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

</style>

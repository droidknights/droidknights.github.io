<template>
  <div class="root">

    <div class="header-back">
      <div class="header">
        <div class="logo">
          DROID KNIGHTS
        </div>
      </div>
    </div>

    <div class="main-title-back">
      <div class="main-title">

        <div class="main-sector-left">
          <div class="logo_image"></div>
        </div>
        <div class="main-sector-right">
          <div class="des">
            <b>Droid Knights 2017</b>
            <div class="detail">
              오직 안드로이드 개발자들을 위한 수준있는 독립 컨퍼런스<br>
              <br>
              <br>
              <div class="detail-info">
                행사 날짜 : 3월 25일<br>
                장소 : 전문건설회관 (보라매공원)<br>
                참가비 : 3만원 (학생 1.5만원)
              </div>
            </div>
          </div>
          <div class=apply>
            참가 신청
          </div>
        </div>
      </div>
    </div>

    <div class="section-back">
      <div class=section>

        <i class="fa fa-calendar info-icon" aria-hidden="true"></i>
        <div class="info-title">
          SESSION
        </div>
        <div class="about-container">

          <span class="about-label">9:30 ~ 10:00</span>
          <span class="about-text">참가자 등록</span><br>
          <span class="about-speaker"></span><br>

          <span class="about-label">10:00 ~ 10:30</span>
          <span class="about-text">드로이드 나이츠 소개</span><br>
          <span class="about-speaker">관계자</span><br>

          <span class="about-label">10:30 ~ 11:20</span>
          <span class="about-text">첫 번째 세션</span><br>
          <span class="about-speaker">초고수1</span><br>

          <span class="about-label">11:30 ~ 12:20</span>
          <span class="about-text">두 번째 세션</span><br>
          <span class="about-speaker">초고수2</span><br>

          <span class="about-label">12:20 ~ 13:20</span>
          <span class="about-text">점심</span><br>
          <span class="about-speaker"></span><br>

          <span class="about-label">13:30 ~ 14:20</span>
          <span class="about-text">세 번째 세션</span><br>
          <span class="about-speaker">초고수3</span><br>

          <span class="about-label">14:30 ~ 15:20</span>
          <span class="about-text">네 번째 세션</span><br>
          <span class="about-speaker">초고수4</span><br>

          <span class="about-label">15:30 ~ 16:20</span>
          <span class="about-text">다섯 번째 세션</span><br>
          <span class="about-speaker">초고수5</span><br>

          <span class="about-label">16:20 ~ 17:00</span>
          <span class="about-text">마지막 인사 경품추천</span><br>
          <span class="about-speaker"></span><br>
        </div>

      </div>
    </div>

    <div class=section-back>
      <div class="section-sponsors">

        <i class="fa fa-users info-icon" aria-hidden="true"></i>
        <div class="info-title">
          SPONSOR
        </div>

        <div class="sponsor-container">

          <div class="spon-item">
            realm
          </div>

          <div class="spon-item">
            <img class="spon-image" src="../assets/image/jpub.png">
          </div>

          <div class="spon-item">
            기타
          </div>

          <div class="spon-item">
            등등
          </div>

        </div>

      </div>
    </div>

    <div class="footer-back">
      <div class="footer">
        Copyright DroidKnights 2017 | All Rights Reserved
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    components: {},
    created (){
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
  @import url(https://fonts.googleapis.com/earlyaccess/nanumpenscript.css);

  .root {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }

  /*
  */

  .header-back {
    position: relative;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header {
    max-width: 1224px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  .logo {
    width: 25%;
    font-size: 20px;
    color: #3C465B;
    font-weight: bold;
    letter-spacing: 2px;
  }

  /*
  */

  .main-title-back {
    position: relative;
    background-color: #B6E3FC;
    height: 560px;
    padding-top: 66px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: inherit;
    top: inherit;
  }

  .main-title {
    box-shadow: 2px 2px 30px 2px #96999e;
    background-color: white;
    max-width: 1024px;
    margin: 0 auto;
  }

  .main-sector-left {
    display: inline-block;
    float: left;
    padding-right: 80px;
    padding-left: 80px;
    background-color: #B6E3FC;
  }

  .main-sector-right {
    display: inline-block;
    background-color: white;
    height: 420px;
  }

  .logo_image {
    width: 336px;
    height: 300px;
    margin-bottom: 50px;
    margin-top: 70px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../assets/image/logo_dk.png);
  }

  .des {
    color: #3C465B;
    text-align: center;
    font-size: 28px;
    margin-top: 100px;
    display: inline-block;
  }

  .detail {
    font-size: 16px;
    color: #9ED2EF;
    margin-top: 6px;
    font-weight: bold;
  }

  .detail-info {
    font-size: 16px;
    color: #3C465B;
  }

  .apply {
    border: 2px solid #3C465B;
    border-radius: 6px;
    text-align: center;
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 6px;
    padding-top: 6px;
    cursor: pointer;
    margin: 20px auto 0px auto;
    color: #3C465B;
  }

  /*
  */

  .section-back {
    position: relative;
    background-color: #FAFAFA;
  }

  .section {
    max-width: 612px;
    margin: 0 auto;
    column-count: 1;
  }

  /*
  */

  .info-icon {
    display: block;
    color: #3C465B;
    font-size: 30px;
    padding-top: 80px;
    text-align: center;
  }

  .info-title {
    font-size: 24px;
    margin-top: 8px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .about-container {
    height: 580px;
    box-shadow: 1px 1px 10px 1px #DfDfDf;
    background-color: #FFFFFF;
    border-radius: 2px;
    margin-top: 12px;
    padding-top: 16px;
    margin-bottom: 40px;
    padding-left: 16px;
  }

  .about-label {
    font-weight: bold;
    width: 250px;
    position: relative;
    margin-left: 6px;
    display: inline-block;
  }

  .about-text {
    margin-right: 16px;
  }

  .about-speaker {
    display: block;
    min-width: 1px;
    margin-left: 260px;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 14px;
    color: #9ED2EF;
  }

  /*
  */

  .section-sponsors {
    max-width: 1024px;
    margin: 0 auto;
  }

  .sponsor-container {
    column-count: 4;
    height: 250px;
  }

  .spon-item {
    text-align: center;
    height: 80px;
  }

  .spon-image {
    height: 60px;
    object-fit: contain;
  }

  /*
  */

  .footer-back {
    background-color: #9ED2EF;
    height: 80px;
  }

  .footer {
    max-width: 1024px;
    padding-top: 30px;
    margin: 0 auto 0 auto;
    text-align: center;
    color: white;
    font-weight: bold;
  }

</style>

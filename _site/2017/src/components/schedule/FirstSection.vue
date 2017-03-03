<template>

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

</template>

<script>
  export default {
    created() {
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

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
    background-image: url(../../assets/image/logo_dk.png);
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

</style>

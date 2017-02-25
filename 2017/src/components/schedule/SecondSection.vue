<template>
  <div>

    <div class="root">
      <div class="main">

        <!---->
        <div class="left-logo">

        </div>
        <div class="right-content">

          <div class="text-01">
            오직 안드로이드 개발자들을 위한 수준있는 독립 컨퍼런스
          </div>
          <div class="text-02">
            심화된 안드로이드 기술에 대한 세션으로 개발자 여러분들의 오감을 만족시켜드리기 위해 준비하였습니다.<br>
            많이 오셔서 새로운 개발의 장을 즐겨 주세요.
          </div>
          <div class="text-03">
            행사 날짜 : 3월 25일<br>
            장소 : 전문건설회관 (보라매공원)<br>
            참가비 : 3만원 (학생 1.5만원)
          </div>
          <div class="text-04">
            참가 신청하기
          </div>

        </div>
        <!---->

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
  .root {
    position: relative;
    background-color: #000;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .main {
    max-width: 1024px;
    min-width: 1024px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
    border-radius: 2px;
    border: 6px solid #76ff03;
  }

  .left-logo {
    width: 336px;
    height: 300px;
    margin-bottom: 50px;
    margin-left: 18px;
    margin-top: 70px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_logo.svg);
    display: inline-block;
  }

  .right-content {
    display: inline-block;
    vertical-align: top;
    padding-left: 40px;
    padding-top: 105px;
    color: black;
  }

  .text-01 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
    color: white;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

  .text-02 {
    font-size: 13px;
    margin-bottom: 20px;
    color: white;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

  .text-03 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
    color: white;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

  .text-04 {
    border: 6px solid #76ff03;
    background-color: #76ff03;
    border-radius: 2px;
    text-align: center;
    width: 229px;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 13px;
    padding-top: 13px;
    cursor: pointer;
    color: black;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

</style>

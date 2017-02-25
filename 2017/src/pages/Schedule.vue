<template>
  <div class="root" v-bind:id="rootaa">

    <header-navi></header-navi>

    <!--<first-section></first-section>-->
    <first-section-new></first-section-new>

    <second-section></second-section>

    <third-section></third-section>

    <!--<div class=section-back>-->
    <!--<div class="section-sponsors">-->

    <!--<i class="fa fa-users info-icon" aria-hidden="true"></i>-->
    <!--<div class="info-title">-->
    <!--SPONSOR-->
    <!--</div>-->

    <!--<div class="sponsor-container">-->

    <!--<div class="spon-item">-->
    <!--realm-->
    <!--</div>-->

    <!--<div class="spon-item">-->
    <!--<img class="spon-image" src="../assets/image/jpub.png">-->
    <!--</div>-->

    <!--<div class="spon-item">-->
    <!--기타-->
    <!--</div>-->

    <!--<div class="spon-item">-->
    <!--등등-->
    <!--</div>-->

    <!--</div>-->

    <!--</div>-->
    <!--</div>-->

    <div class="footer-back">
      <div class="footer">
        Copyright DroidKnights 2017 | All Rights Reserved
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderNavi from '../components/schedule/HeaderNavi.vue'
  import FirstSection from '../components/schedule/FirstSection.vue'
  import FirstSectionNew from '../components/schedule/FirstSectionNew.vue'
  import SecondSection from '../components/schedule/SecondSection.vue'
  import ThirdSection from '../components/schedule/ThirdSection.vue'

  export default {
    components: {
      HeaderNavi,
      FirstSection,
      FirstSectionNew,
      SecondSection,
      ThirdSection
    },
    created (){
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Montserrat);
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

  .root {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }

  /*
  */

  .section-back {
    position: relative;
    background-color: #FAFAFA;
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
    background-color: black;
    height: 80px;
  }

  .footer {
    max-width: 1024px;
    min-width: 1024px;
    padding-top: 30px;
    margin: 0 auto 0 auto;
    text-align: center;
    color: white;
    font-weight: bold;
  }

</style>

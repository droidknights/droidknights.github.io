<template>
  <div class="root">

    <header-navi></header-navi>

    <!--<first-section></first-section>-->
    <first-section-new></first-section-new>

    <second-section></second-section>

    <third-section></third-section>

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

  .footer-back {
    background-color: black;
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

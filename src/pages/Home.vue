<template>
  <header class="container">
    <div class="title">
      <p class="mini">This is ..</p>
      DROID KNIGHTS 2017 . IN SEOUL

      <div class="cfp" @click="goCfp">
        스피커를 모집합니다.<br>
        모집기간 : 1/18 ~ 2/5<br>
        <u>지원하러 가기</u>
      </div>
    </div>

    <div class="sub-title">
      <div class="text-vertical-center">
        <h1>Comming Soon ..<span>{{cursor}}</span></h1>
        <div class="sub-title-des">수준있는 안드로이드 개발자를 위한 독립 컨퍼런스가 열립니다.</div>
        <br>
        <span class="go-facebook" @click="goFacebook" target="_blank">
          <i class="fa fa-facebook-square" aria-hidden="true"></i></span>
        <br>
        <br>
        <br>
        <remain-time dueDate="03 25 2017"></remain-time>
      </div>
    </div>

  </header>
</template>

<script>
  import Rx from 'rxjs/Rx'
  import RemainTime from '../components/RemainTime.vue'

  export default {
    created() {
      this.$subscribeTo(Rx.Observable.interval(500), (index) => {
        if (index % 2 == 0)
          this.cursor = 'l'
        else
          this.cursor = '.'
      })
    },
    components: {
      RemainTime
    },
    data() {
      return {
        cursor: 'l'
      }
    },
    methods: {
      goFacebook () {
        window.open("https://www.facebook.com/droidknights/", '_blank');
      },

      goCfp () {
        window.open("https://goo.gl/forms/aiyddgox4iUDs89i1", '_blank');
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }

  .mini {
    font-size: 8px;
    color: #CFCFCF;
  }

  .title {
    display: block;
    padding-left: 260px;
    color: white;
    font-size: 16px;
    color: #DFDFDF;
    letter-spacing: 5px;
    top: 60px;
    position: relative;
  }

  @media screen and (max-width: 1300px) {
    .title {
      padding-left: 0px;
      text-align: center;
    }

    .cfp {
      text-align: center;
      margin: 19px auto 0px auto;
    }
  }

  .sub-title {
    top: 230px;
    display: block;
    margin-bottom: 150px;
    position: relative;
  }

  .sub-title-des {
    font-size: 17px;
    margin-top: 10px;
    color: #CFCFCF;
  }

  .text-vertical-center {
    display: block;
    text-align: center;
    vertical-align: middle;
    color: white;
  }

  .text-vertical-center h1 {
    margin: 0;
    padding: 0;
    font-size: 4.1em;
    font-weight: 700;
  }

  .go-facebook {
    cursor: pointer;
    color: #4862A3;
    font-size: 23px;
  }

  .cfp {
    display: block;
    width: 240px;
    color: #FFFFFF;
    font-size: 19px;
    letter-spacing: 0px;
    margin-top: 19px;
    position: relative;
    cursor: pointer;
    font-weight: bold;
  }

</style>

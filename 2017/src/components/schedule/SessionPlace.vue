<template>
  <div class="root">

    <!---->
    <div class="info-title">
      PLACE
    </div>
    <div class="container">

      <div class="text-01">
        <div class="label">
          장소
        </div>
        <div class="detail">
          <b>전문건설회관 ( 보라매공원 )</b>
        </div>
      </div>

      <div class="text-02">
        <div class="label">
          주소
        </div>
        <div class="detail">
          서울특별시 동작구 보라매로5길 15
        </div>
      </div>

      <div class="text-03">
        <div class="label">
          찾아오는 길
        </div>
        <div class="detail">
          서울특별시.보라매병원 (20-217) 전문건설회관.보라매병원 (20-916) 전문건설회관.보라매병원 동작05(보라매어린이집.문창중학교) → 전문건설회관.보라매병원 정류장 하차
        </div>

        <div style="width: 100%; height: 300px">
          <google-map :center="center" :zoom="10">
            <map-marker
              :position="m.position"
              :opacity="m.opacity"
              :draggable="m.draggable"
              v-for="m in markers"
            >
            </map-marker>
          </google-map>
        </div>

      </div>
      <!---->

    </div>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';

  export default {
    components: {},
    created() {
    },
    data() {
      return {
        markers: [],
        center: { lat: 37.4932343, lng: 126.9175175 }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .root {
    position: relative;
    padding-top: 10px;
    background-color: white;
    padding-bottom: 40px;
  }

  /*
  */

  .info-title {
    font-size: 34px;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 230px;
    background-color: #76ff03;
    color: #000;
    position: relative;
    z-index: 100;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .container {
    border-radius: 2px;
    height: 300px;
    margin-left: 4px;
    margin-right: 4px;
    border: 6px solid #000000;
    position: relative;
    top: -34px;
  }

  .text-01 {
    margin-top: 60px;
    margin-bottom: 10px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .text-02 {
    margin-bottom: 10px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .text-03 {
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .label {
    display: inline-block;
    width: 140px;
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    vertical-align: top;
    margin-right: 6px;
  }

  .detail {
    display: inline-block;
    font-size: 18px;
    width: 710px;
  }

</style>

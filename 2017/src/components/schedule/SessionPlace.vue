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
          신림역에서 5516, 5525<br>
          신대방역에서 동작 05-1 , 6511, 6516, 5522A, 5524<br>
          보라매역에서 동작 05-1, 6516, 153, 6513, 461, 6514
        </div>

        <div style="width: 100%; height: 300px">
          <div id="map"></div>
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
    margin-top: 60px;
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
    color: black;
    position: relative;
    z-index: 100;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .container {
    border-radius: 2px;
    margin-left: 4px;
    margin-right: 4px;
    border: 6px solid #76ff03;
    position: relative;
    top: -34px;
  }

  .text-01 {
    margin-top: 60px;
    margin-bottom: 10px;
    color: white;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .text-02 {
    margin-bottom: 10px;
    color: white;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .text-03 {
    color: white;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .label {
    display: inline-block;
    width: 380px;
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    vertical-align: top;
    margin-right: 6px;
    line-height: 26px;
  }

  .detail {
    display: inline-block;
    font-size: 18px;
    width: 550px;
    line-height: 26px;
  }

</style>

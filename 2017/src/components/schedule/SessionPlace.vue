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
      </div>

      <iframe class="g-map" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZWpZ47qffDUResdjxrOQiXQ&key=AIzaSyB7-Du8H42JpIRj1E3XxGGUG7GbSC6OhiQ" allowfullscreen></iframe>
      <!---->

    </div>
  </div>
</template>

<script>
  export default {
    components: {},
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
    width: 100%;
    border-radius: 2px;
    /*margin-left: 4px;*/
    /*margin-right: 4px;*/
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

  .g-map {
    width: 100%;
    height: 450px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 1100px) {
    .text-01 {
      display: table;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }

    .text-02 {
      display: table;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }

    .text-03 {
      display: table;
      margin-left: auto;
      margin-right: auto;
    }

    .label {
      display: table;
      width: 0;
      margin-left: auto;
      margin-right: auto;
    }

    .detail {
      display: table;
      width: 0;
      text-align: center;
    }
  }

</style>

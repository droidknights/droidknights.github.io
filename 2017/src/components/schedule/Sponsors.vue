<template>
  <div class="root">

    <!---->
    <div class="info-title">
      SPONSORS
    </div>
    <div class="container">

      <div class="item-container">
        <div class="realm">
        </div>
      </div>

      <div class="item-container">
        <div class="realm">
        </div>
      </div>

      <div class="item-container">
        <div class="realm">
        </div>
      </div>

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
    margin-top: 30px;
    padding-bottom: 40px;
  }

  /*
  */

  .info-title {
    font-size: 34px;
    text-align: center;
    font-weight: bold;
    margin: 0 auto 30px auto;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 230px;
    border: 5px solid #76ff03;
    border-radius: 2px;
    color: #76ff03;
    position: relative;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: table;
  }

  .item-container {
    width: 341px;
    height: 224px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/sponsor_bg.svg);
  }

  .realm {

  }

  @media (max-width: 1100px) {
    .item-container {
      display: block;
      width: 95vw;
      height: 35vh;
      background-position: center;
    }
  }

</style>

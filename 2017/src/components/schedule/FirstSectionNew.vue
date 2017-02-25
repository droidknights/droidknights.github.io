<template>

  <div class="main-title-back" id="element">
    <div class="logo_image"></div>
    <!--<div class="main-title">-->

    <!--<div class="main-sector-left">-->
    <!--</div>-->

    <!--</div>-->
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
    background-color: #000;
    height: 850px;
    padding-top: 42px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: inherit;
    top: inherit;
  }

  .main-title {
    max-width: 1024px;
    min-width: 1024px;
    margin: 0 auto;
  }

  .main-sector-left {
    display: inline-block;
    padding-right: 80px;
    padding-left: 80px;
    background-color: white;
  }

  .main-sector-right {
    display: inline-block;
    background-color: white;
    height: 420px;
  }

  .logo_image {
    width: 736px;
    height: 640px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 70px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_badge.svg);
  }

</style>

<template>

  <div class="main-title-back">
    <div class="main-title">

      <div class="main-sector-left">
        <div class="logo_image"></div>
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
    background-color: white;
    height: 540px;
    padding-top: 42px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: inherit;
    top: inherit;
    margin-left: 15px;
    margin-right: 15px;
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

<template>
  <div>

    <div class="header-back">
      <div class="header">
        <div class="logo">

        </div>

        <div class="section">
          INTRODUCE
        </div>
        <div class="section">
          SESSION
        </div>
        <div class="section">
          PLACE
        </div>
        <div class="section">
          SPONSOR
        </div>
        <div class="section border">
          REGISTER
        </div>


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

  .header-back {
    position: relative;
    background-color: #76ff03;
    height: 75px;
  }

  .header {
    max-width: 1024px;
    min-width: 1024px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  .logo {
    width: 25%;
    height: 51px;
    font-size: 20px;
    color: #000;
    margin-top: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-right: 250px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_logo.svg);
  }

  .section {
    display: inline-block;
    font-weight: bold;
    margin-right: 14px;
    margin-bottom: 5px;
    color: #000;
    cursor: pointer;
    position: relative;
    top: -20px;
    font-family: 'Montserrat', sans-serif;
  }

  .border {
    padding: 5px 10px 5px 10px;
    border: 4px solid #000000;
    border-radius: 3px;
    margin-right: 6px;
  }

</style>

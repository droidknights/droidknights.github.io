<template>
  <div class="root">

    <!---->
    <div class="info-title">
      SPONSORS
    </div>
    <div class="container">
      <!--<div class="contact" @click="onClickContact()">-->
      <!--CONTACT : https://docs.google.com/forms..-->
      <!--</div>-->

      <div class="tier">GOLD</div>

      <div class="item-container google">
      </div>

      <div class="item-container lezhin">
      </div>

      <br><br><br><br>
      <div class="tier">SILVER</div>

      <div class="item-container siver realm">
      </div>

      <div class="item-container siver smartstudy">
      </div>

      <br><br><br><br>
      <div class="tier">MEDIA</div>

      <div class="item-container siver jpub">
      </div>

      <div class="item-container siver hanbit">
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
    methods: {
      onClickContact: function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSeIZeXY4MQdYmT5rq9HTBIPRfV8Jdsg83VJ2lZNDfkW8NljQA/viewform", '_blank');
      }
    }
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
    text-align: center;
  }

  .contact {
    color: white;
    margin-top: 40px;
    font-size: 40px;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    word-break: break-all;
  }

  .tier {
    color: white;
    font-size: 20px;
    background-color: #76ff03;
    width: 110px;
    padding: 5px 0px 5px 0px;
    margin: 0 auto 20px auto;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
    color: black;
    border-radius: 2px;
    text-align: center;
    word-break: break-all;
  }

  .item-container {
    width: 341px;
    height: 224px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .siver {
    width: 228px;
    height: 150px;
  }

  .realm {
    background-image: url(../../assets/image/spon_realm.png);
  }

  .jpub {
    background-image: url(../../assets/image/spon_jpub.png);
  }

  .smartstudy {
    background-image: url(../../assets/image/spon_smartstudy.png);
  }

  .google {
    background-image: url(../../assets/image/spon_google.png);
  }

  .lezhin {
    background-image: url(../../assets/image/spon_lezhin.png);
  }

  .hanbit {
    background-image: url(../../assets/image/spon_hanbit.png);
  }

  @media (max-width: 1100px) {
    .item-container {
      display: block;
      width: 95vw;
      height: 26vh;
      background-position: center;
    }

    .siver {
      display: inline-block;

      width: 47vw;
      height: 19vh;
      background-position: center;
    }
  }

</style>

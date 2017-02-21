<template>
  <div>

    <div class="header-back">
      <div class="header">
        <div class="logo">
          DROID KNIGHTS
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
    padding-top: 20px;
    padding-bottom: 20px;
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
    font-size: 20px;
    color: #000;
    font-weight: bold;
    letter-spacing: 2px;
    margin-right: 250px;
    display: inline-block;
  }

  .section {
    display: inline-block;
    font-weight: bold;
    margin-right: 14px;
    color: #000;
    cursor: pointer;
  }

  .border {
    padding: 5px 10px 5px 10px;
    border: 4px solid #000000;
    border-radius: 3px;
    margin-right: 6px;
  }

</style>
